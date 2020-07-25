"use strict";
var Endaufgabe;
(function (Endaufgabe) {
    let deleteAll = document.getElementById("allesL");
    let laden = document.getElementById("besAnzeigen");
    let serverAntwort = document.getElementById("serverAntwort");
    deleteAll.addEventListener("click", handleDelete);
    laden.addEventListener("click", handleLaden);
    async function handleDelete() {
        serverAntwort.innerHTML = "Alle Bestellungen gelöscht!";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/loeschen";
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function handleLaden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/laden";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=bestellungenscript.js.map