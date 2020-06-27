namespace Aufgabe09 {

    let htmlButton: HTMLElement = <HTMLElement>document.getElementById("html");
    htmlButton?.addEventListener("click", handleHtml);

    let jsonButton: HTMLElement = <HTMLElement>document.getElementById("json");
    jsonButton?.addEventListener("click", handleJson);

    let formData: FormData;

    async function handleHtml(): Promise<void> {

        formData= new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gisak2020.herokuapp.com/";
        url = url + "/html";
        url = url + "?" + query.toString();

        let answer: Response = await fetch(url);
        let answer2: string = await answer.text();
        let answerHTML: HTMLElement = <HTMLElement>document.getElementById("answerHTML");
        answerHTML.innerHTML = answer2;
        }

    async function handleJson(): Promise<void> {
        formData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gisak2020.herokuapp.com/";
        url = url + "/json";
        url = url + "?" + query.toString();

        let answer: Response = await fetch(url);
        let answer2: string = await answer.json();
        console.log(answer2);
}
    }