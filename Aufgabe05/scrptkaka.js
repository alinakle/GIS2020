"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    for (let i = 0; i < Aufgabe05.klassiker.length; i++) {
        let neuesDiv = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Klassiker")?.appendChild(neuesDiv);
        let bild = document.createElement("img");
        bild.setAttribute("src", Aufgabe05.klassiker[i].bild);
        neuesDiv.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = Aufgabe05.klassiker[i].name;
        neuesDiv.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = Aufgabe05.klassiker[i].preis;
        neuesDiv.appendChild(preis);
        let inhalt = document.createElement("p");
        preis.innerHTML = Aufgabe05.klassiker[i].inhalt;
        neuesDiv.appendChild(inhalt);
    }
    for (let i = 0; i < Aufgabe05.tiere.length; i++) {
        let neuesDiv = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Tiere")?.appendChild(neuesDiv);
        let bild = document.createElement("img");
        bild.setAttribute("src", Aufgabe05.tiere[i].bild);
        neuesDiv.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = Aufgabe05.tiere[i].name;
        neuesDiv.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = Aufgabe05.tiere[i].preis;
        neuesDiv.appendChild(preis);
        let inhalt = document.createElement("p");
        preis.innerHTML = Aufgabe05.tiere[i].inhalt;
        neuesDiv.appendChild(inhalt);
    }
    for (let i = 0; i < Aufgabe05.haushalt.length; i++) {
        let neuesDiv = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Haushalt")?.appendChild(neuesDiv);
        let bild = document.createElement("img");
        bild.setAttribute("src", Aufgabe05.haushalt[i].bild);
        neuesDiv.appendChild(bild);
        let name = document.createElement("h4");
        name.innerHTML = Aufgabe05.haushalt[i].name;
        neuesDiv.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = Aufgabe05.haushalt[i].preis;
        neuesDiv.appendChild(preis);
        let inhalt = document.createElement("p");
        preis.innerHTML = Aufgabe05.haushalt[i].inhalt;
        neuesDiv.appendChild(inhalt);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=scrptkaka.js.map