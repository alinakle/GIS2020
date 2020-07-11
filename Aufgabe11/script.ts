namespace Aufgabe11 {

    let htmlButton: HTMLElement = <HTMLElement>document.getElementById("send");
    htmlButton?.addEventListener("click", handleSend);

    let jsonButton: HTMLElement = <HTMLElement>document.getElementById("get");
    jsonButton?.addEventListener("click", handleGet);

    let div: HTMLElement = <HTMLElement>document.getElementById("DIvDIv");

    let formData: FormData;

    async function handleSend(): Promise<void> {

        formData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gisak2020.herokuapp.com";
        url = url + "/send";
        url = url + "?" + query.toString();

        await fetch(url);
    }

    async function handleGet(): Promise<void> {
        formData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gisak2020.herokuapp.com";
        url = url + "/get";
        url = url + "?" + query.toString();

        let answer: Response = await fetch(url);
        let answer2: string = await answer.text();
        div.innerHTML = answer2;
}
    }
