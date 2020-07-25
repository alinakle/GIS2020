"use strict";
var Endaufgabe;
(function (Endaufgabe) {
    let liste = JSON.parse(localStorage.getItem("liste"));
    let warenkorbDiv = document.getElementById("Inhalt");
    for (let i = 0; i < liste.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        let bild = document.createElement("img");
        bild.setAttribute("src", liste[i]._bild);
        divArtikel.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = liste[i]._name;
        divArtikel.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = "" + liste[i]._preis + "€";
        divArtikel.appendChild(preis);
        let inhalt = document.createElement("p");
        inhalt.innerHTML = liste[i]._inhalt;
        divArtikel.appendChild(inhalt);
        let loeschen = document.createElement("button");
        loeschen.innerHTML = "Entfernen";
        divArtikel.appendChild(loeschen);
        loeschen.setAttribute("index", "" + liste[i]);
        loeschen.setAttribute("preis", "" + liste[i]._preis);
        loeschen.addEventListener("click", handleEntfernen);
        warenkorbDiv?.appendChild(divArtikel);
    }
    let wert = JSON.parse(localStorage.getItem("warenwert"));
    let wertDiv = document.getElementById("GesamtWert");
    wertDiv.innerHTML = "" + wert + "€";
    let button = document.getElementById("EntfernenButton");
    button.addEventListener("click", handleAllesEntfernen);
    function handleAllesEntfernen() {
        localStorage.clear();
        window.location.reload();
    }
    function handleEntfernen(_event) {
        let geklickt = _event.target;
        let index = parseFloat(geklickt.getAttribute("index"));
        let neueListe = JSON.parse(localStorage.getItem("liste"));
        neueListe.splice(index, 1);
        localStorage.setItem("liste", JSON.stringify(neueListe));
        let preis = parseFloat(geklickt.getAttribute("preis"));
        let neuerPreis = JSON.parse(localStorage.getItem("warenwert"));
        neuerPreis -= preis;
        localStorage.setItem("warenwert", JSON.stringify(neuerPreis));
        window.location.reload();
    }
    let sendButton = document.getElementById("SendButton");
    sendButton?.addEventListener("click", handleSend);
    let formData;
    async function handleSend() {
        let localStorageData = "";
        for (let index = 0; index < localStorage.length; index++) {
            let localKey = localStorage.key(index);
            let localValue = localStorage.getItem(localKey);
            localStorageData += localKey + "=" + localValue + "&";
        }
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://gisak2020.herokuapp.com";
        url += "/send" + "?" + localStorageData + query.toString();
        await fetch(url);
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=warenkorbscript.js.map