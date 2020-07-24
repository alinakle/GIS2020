namespace Endaufgabe {

    // Zum genergieren von den Artikeln
    let base: HTMLElement = <HTMLElement>document.getElementById("Base");
    let eis: HTMLElement = <HTMLElement>document.getElementById("Eis");
    let toppings: HTMLElement = <HTMLElement>document.getElementById("Toppings");

    async function ladeJson(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        let content: Artikel[] = await response.json();
        
        for (let i: number = 0; i < content.length; i++) {

            let divArtikel: HTMLElement = <HTMLElement>document.createElement("div");
            divArtikel.setAttribute("class", "artikel");

            if (content[i]._kategorie == "Toppings") {
                toppings?.appendChild(divArtikel);
            }

            if (content[i]._kategorie == "Eis") {
                eis?.appendChild(divArtikel);
            }

            if (content[i]._kategorie == "Base") {
                base?.appendChild(divArtikel);
            }

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", content[i]._bild);
            divArtikel.appendChild(bild);

            let name: HTMLElement = document.createElement("h4");
            name.innerHTML = content[i]._name;
            divArtikel.appendChild(name);

            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = "" + content[i]._preis + "€";
            divArtikel.appendChild(preis);

            let inhalt: HTMLElement = document.createElement("p");
            inhalt.innerHTML = content[i]._inhalt;
            
            divArtikel.appendChild(inhalt);

            let buy: HTMLElement = document.createElement("button");
            buy.setAttribute("bild", "" + content[i]._bild);
            buy.setAttribute("preis", "" + content[i]._preis);
            buy.setAttribute("name", "" + content[i]._name);
            buy.setAttribute("inhalt", "" + content[i]._inhalt);
            buy.setAttribute("kategorie", "" + content[i]._kategorie);
            buy.innerHTML = "In den Warenkorb";
            divArtikel.appendChild(buy);
            buy.addEventListener("click", handlerHinzufügen);

        }
    }

    ladeJson("artikel.json");

    let warenkorb: number = 0;
    let warenwert: number = 0;
    let liste: Artikel[] = [];


    function handlerHinzufügen(_event: Event): void {

        warenkorb++;

        if (warenkorb > 0) {

            let neuesDiv: HTMLElement = document.createElement("div");
            neuesDiv.setAttribute("id", "WarenIcon");
            document.getElementById("WarenDing")?.appendChild(neuesDiv);

            let warenkorbAnzahl: HTMLElement = document.createElement("p");
            warenkorbAnzahl.innerHTML = warenkorb + "";
            neuesDiv.appendChild(warenkorbAnzahl);

            let geklickt: HTMLElement = <HTMLElement>_event.target;

            let preis: string = <string>geklickt.getAttribute("preis");

            let preisAlsZahl: number = parseFloat(preis);

            warenwert += preisAlsZahl;

            console.log("Warenwert: " + warenwert + "€");
        }

        let geklickt: HTMLElement = <HTMLElement>_event.target;

        let bild: string = geklickt.getAttribute("bild")!;
        let name: string = geklickt.getAttribute("name")!;
        let preis: number = parseFloat(geklickt.getAttribute("preis")!);
        let inhalt: string = geklickt.getAttribute("inhalt")!;
        let kategorie: string = geklickt.getAttribute("kategorie")!;

        let artikoel: Artikel = {_bild: bild, _name: name, _preis: preis, _inhalt: inhalt, _kategorie: kategorie};

        liste.push(artikoel);

        localStorage.setItem("liste", JSON.stringify(liste));

        localStorage.setItem("warenwert", JSON.stringify(warenwert));

        // Div in dem aktuelle Bestellung Angezeigt wird

        
        let list: Artikel[] = JSON.parse(localStorage.getItem("liste")!);
        let warenkorbDiv: HTMLElement = <HTMLElement> document.getElementById("Auflistung");
        let schrift: HTMLElement = document.createElement("h5");
        schrift.innerHTML = ("Momentane Auswahl");
        warenkorbDiv.innerHTML = "";
        warenkorbDiv.appendChild(schrift);

        for (let i: number = 0; i < list.length; i++) {

            let divArtikel: HTMLElement = <HTMLElement>document.createElement("div");
            divArtikel.setAttribute("class", "sidebarArtikel");

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", list[i]._bild);
            divArtikel.appendChild(bild);

            let name: HTMLElement = document.createElement("h4");
            name.innerHTML = list[i]._name;
            divArtikel.appendChild(name);

            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = "" + list[i]._preis + "€";
            divArtikel.appendChild(preis);

            warenkorbDiv?.appendChild(divArtikel);
        }

    }


    // Anzeige von Nur ausgewählten Aritkeln im Menü
    let allesM: HTMLElement = <HTMLElement>document.getElementById("allMenu");
    allesM.addEventListener("click", handleAllesLink);

    let baseM: HTMLElement = <HTMLElement>document.getElementById("BaseMenu");
    baseM.addEventListener("click", handleBaseLink);

    let eisM: HTMLElement = <HTMLElement>document.getElementById("EisMenu");
    eisM.addEventListener("click", handleEisLink);

    let toppingsM: HTMLElement = <HTMLElement>document.getElementById("ToppingsMenu");
    toppingsM.addEventListener("click", handleToppingsLink);

    function handleAllesLink(): void {
        let one: HTMLElement = <HTMLElement>document.getElementById("Klassiker");
        one.style.display = "flex";
        let two: HTMLElement = <HTMLElement>document.getElementById("Tiere");
        two.style.display = "flex";
        let three: HTMLElement = <HTMLElement>document.getElementById("Haushalt");
        three.style.display = "flex;";
    }

    function handleBaseLink(): void {
        let one: HTMLElement = <HTMLElement>document.getElementById("Tiere");
        one.style.display = "none";
        let two: HTMLElement = <HTMLElement>document.getElementById("Haushalt");
        two.style.display = "none";
        let three: HTMLElement = <HTMLElement>document.getElementById("Klassikef");
        three.style.display = "flex";
    }

    function handleEisLink(): void {
        let one: HTMLElement = <HTMLElement>document.getElementById("Klassiker");
        one.style.display = "none";
        let two: HTMLElement = <HTMLElement>document.getElementById("Haushalt");
        two.style.display = "none";
        let three: HTMLElement = <HTMLElement>document.getElementById("Tiere");
        three.style.display = "flex";
    }

    function handleToppingsLink(): void {
        let one: HTMLElement = <HTMLElement>document.getElementById("Klassiker");
        one.style.display = "none";
        let two: HTMLElement = <HTMLElement>document.getElementById("Tiere");
        two.style.display = "none";
        let three: HTMLElement = <HTMLElement>document.getElementById("Haushalt");
        three.style.display = "flex";
    }
}