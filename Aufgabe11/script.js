"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let htmlButton = document.getElementById("send");
    htmlButton?.addEventListener("click", handleSend);
    let jsonButton = document.getElementById("get");
    jsonButton?.addEventListener("click", handleGet);
    let div = document.getElementById("DIvDIv");
    let formData;
    async function handleSend() {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://gisak2020.herokuapp.com";
        url = url + "/send";
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function handleGet() {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://gisak2020.herokuapp.com";
        url = url + "/get";
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answer2 = await answer.text();
        div.innerHTML = answer2;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map