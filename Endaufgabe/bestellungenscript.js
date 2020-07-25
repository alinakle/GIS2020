"use strict";
var Endaufgabe;
(function (Endaufgabe) {
    let laden = document.getElementById("besAnzeigen");
    let serverAntwort = document.getElementById("serverAntwort");
    laden.addEventListener("click", handleLaden);
    async function handleLaden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/get";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=bestellungenscript.js.map