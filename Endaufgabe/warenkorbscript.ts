namespace Endaufgabe {

    let liste: Artikel[] = JSON.parse(localStorage.getItem("liste")!);
    let warenkorbDiv: HTMLElement = <HTMLElement> document.getElementById("Inhalt");

    for (let i: number = 0; i < liste.length; i++) {

        let divArtikel: HTMLElement = <HTMLElement>document.createElement("div");
        divArtikel.setAttribute("class", "artikel");

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", liste[i]._bild);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h4");
        name.innerHTML = liste[i]._name;
        divArtikel.appendChild(name);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = "" + liste[i]._preis + "€";
        divArtikel.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        inhalt.innerHTML = liste[i]._inhalt;
        divArtikel.appendChild(inhalt);

        let loeschen: HTMLElement = document.createElement("button");
        loeschen.innerHTML = "Entfernen";
        divArtikel.appendChild(loeschen);
        loeschen.setAttribute("index", "" + liste[i]);
        loeschen.setAttribute("preis", "" + liste[i]._preis);
        loeschen.addEventListener("click", handleEntfernen);

        warenkorbDiv?.appendChild(divArtikel);
    }

    let wert: HTMLElement = <HTMLElement> JSON.parse(localStorage.getItem("warenwert")!);
    let wertDiv: HTMLElement = <HTMLElement> document.getElementById("GesamtWert");
    wertDiv.innerHTML = "" + wert + "€";

    let button: HTMLElement = <HTMLElement> document.getElementById("EntfernenButton");
    button.addEventListener("click", handleAllesEntfernen);

    function handleAllesEntfernen(): void {
        
        localStorage.clear();
        window.location.reload();
    }

    function handleEntfernen(_event: Event): void {

        let geklickt: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseFloat(geklickt.getAttribute("index")!);
        let neueListe: Artikel[] = JSON.parse(localStorage.getItem("liste")!);
        neueListe.splice(index, 1);
        localStorage.setItem("liste", JSON.stringify(neueListe));

        let preis: number = parseFloat(geklickt.getAttribute("preis")!);
        let neuerPreis: number = JSON.parse(localStorage.getItem("warenwert")!);
        neuerPreis -= preis;
        localStorage.setItem("warenwert", JSON.stringify(neuerPreis));
        window.location.reload();
    }
}