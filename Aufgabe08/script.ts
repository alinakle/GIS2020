namespace Aufgabe08 {

    let knopf: HTMLElement = <HTMLElement>document.getElementById("abschicken");
    knopf?.addEventListener("click", handleKnopf);

    async function handleKnopf(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://gisak2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        let answer2: string = answer.url;
        console.log(answer2);

        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}