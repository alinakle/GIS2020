namespace Endaufgabe {
    
    let laden: HTMLElement = <HTMLElement>document.getElementById("besAnzeigen");
    let serverAntwort: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");

    laden.addEventListener("click", handleLaden);

    async function handleLaden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/get";
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
}