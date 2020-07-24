"use strict";
var Endaufgabe;
(function (Endaufgabe) {
    // Zum genergieren von den Artikeln
    let base = document.getElementById("Base");
    let eis = document.getElementById("Eis");
    let toppings = document.getElementById("Toppings");
    async function ladeJson(_url) {
        let response = await fetch(_url);
        let content = await response.json();
        for (let i = 0; i < content.length; i++) {
            let divArtikel = document.createElement("div");
            divArtikel.setAttribute("class", "artikel");
            if (content[i]._kategorie == "Toppings") {
                toppings?.appendChild(divArtikel);
            }
            if (content[i]._kategorie == "Eis") {
                eis?.appendChild(divArtikel);
            }
            if (content[i]._kategorie == "Base") {
                base?.appendChild(divArtikel);
            }
            let bild = document.createElement("img");
            bild.setAttribute("src", content[i]._bild);
            divArtikel.appendChild(bild);
            let name = document.createElement("h4");
            name.innerHTML = content[i]._name;
            divArtikel.appendChild(name);
            let preis = document.createElement("p");
            preis.innerHTML = "" + content[i]._preis + "€";
            divArtikel.appendChild(preis);
            let inhalt = document.createElement("p");
            inhalt.innerHTML = content[i]._inhalt;
            divArtikel.appendChild(inhalt);
            let buy = document.createElement("button");
            buy.setAttribute("bild", "" + content[i]._bild);
            buy.setAttribute("preis", "" + content[i]._preis);
            buy.setAttribute("name", "" + content[i]._name);
            buy.setAttribute("inhalt", "" + content[i]._inhalt);
            buy.setAttribute("kategorie", "" + content[i]._kategorie);
            buy.innerHTML = "In den Warenkorb";
            divArtikel.appendChild(buy);
            buy.addEventListener("click", handlerHinzufügen);
        }
    }
    ladeJson("artikel.json");
    let warenkorb = 0;
    let warenwert = 0;
    let liste = [];
    function handlerHinzufügen(_event) {
        warenkorb++;
        if (warenkorb > 0) {
            let neuesDiv = document.createElement("div");
            neuesDiv.setAttribute("id", "WarenIcon");
            document.getElementById("WarenDing")?.appendChild(neuesDiv);
            let warenkorbAnzahl = document.createElement("p");
            warenkorbAnzahl.innerHTML = warenkorb + "";
            neuesDiv.appendChild(warenkorbAnzahl);
            let geklickt = _event.target;
            let preis = geklickt.getAttribute("preis");
            let preisAlsZahl = parseFloat(preis);
            warenwert += preisAlsZahl;
            console.log("Warenwert: " + warenwert + "€");
        }
        let geklickt = _event.target;
        let bild = geklickt.getAttribute("bild");
        let name = geklickt.getAttribute("name");
        let preis = parseFloat(geklickt.getAttribute("preis"));
        let inhalt = geklickt.getAttribute("inhalt");
        let kategorie = geklickt.getAttribute("kategorie");
        let artikoel = { _bild: bild, _name: name, _preis: preis, _inhalt: inhalt, _kategorie: kategorie };
        liste.push(artikoel);
        localStorage.setItem("liste", JSON.stringify(liste));
        localStorage.setItem("warenwert", JSON.stringify(warenwert));
        // Div in dem aktuelle Bestellung Angezeigt wird
        let list = JSON.parse(localStorage.getItem("liste"));
        let warenkorbDiv = document.getElementById("Auflistung");
        let schrift = document.createElement("h5");
        schrift.innerHTML = ("Momentane Auswahl");
        warenkorbDiv.innerHTML = "";
        warenkorbDiv.appendChild(schrift);
        for (let i = 0; i < list.length; i++) {
            let divArtikel = document.createElement("div");
            divArtikel.setAttribute("class", "sidebarArtikel");
            let bild = document.createElement("img");
            bild.setAttribute("src", list[i]._bild);
            divArtikel.appendChild(bild);
            let name = document.createElement("h4");
            name.innerHTML = list[i]._name;
            divArtikel.appendChild(name);
            let preis = document.createElement("p");
            preis.innerHTML = "" + list[i]._preis + "€";
            divArtikel.appendChild(preis);
            warenkorbDiv?.appendChild(divArtikel);
        }
    }
    // Anzeige von Nur ausgewählten Aritkeln im Menü
    let allesM = document.getElementById("allMenu");
    allesM.addEventListener("click", handleAllesLink);
    let baseM = document.getElementById("BaseMenu");
    baseM.addEventListener("click", handleBaseLink);
    let eisM = document.getElementById("EisMenu");
    eisM.addEventListener("click", handleEisLink);
    let toppingsM = document.getElementById("ToppingsMenu");
    toppingsM.addEventListener("click", handleToppingsLink);
    function handleAllesLink() {
        let one = document.getElementById("Klassiker");
        one.style.display = "flex";
        let two = document.getElementById("Tiere");
        two.style.display = "flex";
        let three = document.getElementById("Haushalt");
        three.style.display = "flex;";
    }
    function handleBaseLink() {
        let one = document.getElementById("Tiere");
        one.style.display = "none";
        let two = document.getElementById("Haushalt");
        two.style.display = "none";
        let three = document.getElementById("Klassikef");
        three.style.display = "flex";
    }
    function handleEisLink() {
        let one = document.getElementById("Klassiker");
        one.style.display = "none";
        let two = document.getElementById("Haushalt");
        two.style.display = "none";
        let three = document.getElementById("Tiere");
        three.style.display = "flex";
    }
    function handleToppingsLink() {
        let one = document.getElementById("Klassiker");
        one.style.display = "none";
        let two = document.getElementById("Tiere");
        two.style.display = "none";
        let three = document.getElementById("Haushalt");
        three.style.display = "flex";
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=script.js.map