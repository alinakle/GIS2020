"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let knopf = document.getElementById("abschicken");
    knopf?.addEventListener("click", handleKnopf);
    async function handleKnopf() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisak2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answer2 = answer.url;
        console.log(answer2);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map