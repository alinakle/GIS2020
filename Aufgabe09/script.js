"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let htmlButton = document.getElementById("html");
    htmlButton?.addEventListener("click", handleHtml);
    let jsonButton = document.getElementById("json");
    jsonButton?.addEventListener("click", handleJson);
    let formData;
    async function handleHtml() {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://gisak2020.herokuapp.com/";
        url = url + "/html";
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answer2 = await answer.text();
        let answerHTML = document.getElementById("answerHTML");
        answerHTML.innerHTML = answer2;
    }
    async function handleJson() {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://gisak2020.herokuapp.com/";
        url = url + "/json";
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answer2 = await answer.json();
        console.log(answer2);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map