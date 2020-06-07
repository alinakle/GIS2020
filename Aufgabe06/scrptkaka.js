"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    for (let i = 0; i < Aufgabe06.klassiker.length; i++) {
        let neuesDiv = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Klassiker")?.appendChild(neuesDiv);
        let bild = document.createElement("img");
        bild.setAttribute("src", Aufgabe06.klassiker[i].bild);
        neuesDiv.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = Aufgabe06.klassiker[i].name;
        neuesDiv.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = "" + Aufgabe06.klassiker[i].preis + "€";
        neuesDiv.appendChild(preis);
        let inhalt = document.createElement("p");
        inhalt.innerHTML = Aufgabe06.klassiker[i].inhalt;
        neuesDiv.appendChild(inhalt);
        let buy = document.createElement("button");
        buy.setAttribute("preis", "" + Aufgabe06.klassiker[i].preis);
        buy.innerHTML = "In den Warenkorb";
        neuesDiv.appendChild(buy);
        buy.addEventListener("click", handlerHinzufügen);
    }
    for (let i = 0; i < Aufgabe06.tiere.length; i++) {
        let neuesDiv2 = document.createElement("div");
        neuesDiv2.setAttribute("class", "artikel");
        document.getElementById("Tiere")?.appendChild(neuesDiv2);
        let bild = document.createElement("img");
        bild.setAttribute("src", Aufgabe06.tiere[i].bild);
        neuesDiv2.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = Aufgabe06.tiere[i].name;
        neuesDiv2.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = "" + Aufgabe06.tiere[i].preis + "€";
        neuesDiv2.appendChild(preis);
        let inhalt = document.createElement("p");
        inhalt.innerHTML = Aufgabe06.tiere[i].inhalt;
        neuesDiv2.appendChild(inhalt);
        let buy = document.createElement("button");
        buy.setAttribute("preis", "" + Aufgabe06.tiere[i].preis);
        buy.innerHTML = "In den Warenkorb";
        neuesDiv2.appendChild(buy);
        buy.addEventListener("click", handlerHinzufügen);
    }
    for (let i = 0; i < Aufgabe06.haushalt.length; i++) {
        let neuesDiv = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Haushalt")?.appendChild(neuesDiv);
        let bild = document.createElement("img");
        bild.setAttribute("src", Aufgabe06.haushalt[i].bild);
        neuesDiv.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = Aufgabe06.haushalt[i].name;
        neuesDiv.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = "" + Aufgabe06.haushalt[i].preis + "€";
        neuesDiv.appendChild(preis);
        let inhalt = document.createElement("p");
        inhalt.innerHTML = Aufgabe06.haushalt[i].inhalt;
        neuesDiv.appendChild(inhalt);
        let buy = document.createElement("button");
        buy.setAttribute("preis", "" + Aufgabe06.haushalt[i].preis);
        buy.innerHTML = "In den Warenkorb";
        neuesDiv.appendChild(buy);
        buy.addEventListener("click", handlerHinzufügen);
    }
    // Anzeige wie viel in Warenkorb
    let warenkorb = 0;
    let warenwert = 0;
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
    }
    let allesi = document.getElementById("momentan");
    allesi.addEventListener("click", handleAllesLink);
    let klassi = document.getElementById("KlassikerLink");
    klassi.addEventListener("click", handleKlassikerLink);
    let tieri = document.getElementById("TiereLink");
    tieri.addEventListener("click", handleTiereLink);
    let haushalti = document.getElementById("HaushaltLink");
    haushalti.addEventListener("click", handleHaushaltLink);
    function handleKlassikerLink() {
        let one = document.getElementById("Tiere");
        one.style.display = "none";
        let two = document.getElementById("Haushalt");
        two.style.display = "none";
        console.log("Hey");
    }
    function handleTiereLink() {
        let safe = document.getElementById("Klassiker");
        safe.hidden = false;
        let one = document.getElementById("Klassiker");
        one.hidden = true;
        let two = document.getElementById("Haushalt");
        two.hidden = true;
    }
    function handleHaushaltLink() {
        let safe = document.getElementById("Haushalt");
        safe.hidden = false;
        let one = document.getElementById("Klassiker");
        one.hidden = true;
        let two = document.getElementById("Tiere");
        two.hidden = true;
    }
    function handleAllesLink() {
        let safe = document.getElementById("Haushalt");
        safe.hidden = false;
        let one = document.getElementById("Klassiker");
        one.hidden = false;
        let two = document.getElementById("Tiere");
        two.hidden = false;
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=scrptkaka.js.map