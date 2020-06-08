namespace Aufgabe06 {

    for (let i: number = 0; i < klassiker.length; i++) {

        let neuesDiv: HTMLElement = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Klassiker")?.appendChild(neuesDiv);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", klassiker[i].bild);
        neuesDiv.appendChild(bild);

        let name: HTMLElement = document.createElement("h4");
        name.innerHTML = klassiker[i].name;
        neuesDiv.appendChild(name);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = "" + klassiker[i].preis + "€";
        neuesDiv.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        inhalt.innerHTML = klassiker[i].inhalt;
        neuesDiv.appendChild(inhalt);

        let buy: HTMLElement = document.createElement("button");
        buy.setAttribute("preis", "" + klassiker[i].preis);
        buy.innerHTML = "In den Warenkorb";
        neuesDiv.appendChild(buy);
        buy.addEventListener("click", handlerHinzufügen);

    }


    for (let i: number = 0; i < tiere.length; i ++) {

        let neuesDiv2: HTMLElement = document.createElement("div");
        neuesDiv2.setAttribute("class", "artikel");
        document.getElementById("Tiere")?.appendChild(neuesDiv2);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", tiere[i].bild);
        neuesDiv2.appendChild(bild);

        let name: HTMLElement = document.createElement("h4");
        name.innerHTML = tiere[i].name;
        neuesDiv2.appendChild(name);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = "" + tiere[i].preis + "€";
        neuesDiv2.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        inhalt.innerHTML = tiere[i].inhalt;
        neuesDiv2.appendChild(inhalt);

        let buy: HTMLElement = document.createElement("button");
        buy.setAttribute("preis", "" + tiere[i].preis);
        buy.innerHTML = "In den Warenkorb";
        neuesDiv2.appendChild(buy);
        buy.addEventListener("click", handlerHinzufügen);
    }

    
    for (let i: number = 0; i < haushalt.length; i ++) {

        let neuesDiv: HTMLElement = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Haushalt")?.appendChild(neuesDiv);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", haushalt[i].bild);
        neuesDiv.appendChild(bild);

        let name: HTMLElement = document.createElement("h4");
        name.innerHTML = haushalt[i].name;
        neuesDiv.appendChild(name);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = "" + haushalt[i].preis + "€";
        neuesDiv.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        inhalt.innerHTML = haushalt[i].inhalt;
        neuesDiv.appendChild(inhalt);

        let buy: HTMLElement = document.createElement("button");
        buy.setAttribute("preis", "" + haushalt[i].preis);
        buy.innerHTML = "In den Warenkorb";
        neuesDiv.appendChild(buy);
        buy.addEventListener("click", handlerHinzufügen);
    }
// Anzeige wie viel in Warenkorb

    let warenkorb: number = 0;
    let warenwert: number = 0;
    

    function handlerHinzufügen(_event: Event): void {
        warenkorb ++;
        
        if (warenkorb > 0) {
        let neuesDiv: HTMLElement = document.createElement("div");
        neuesDiv.setAttribute("id", "WarenIcon");
        document.getElementById("WarenDing")?.appendChild(neuesDiv);

        let warenkorbAnzahl: HTMLElement = document.createElement("p");
        warenkorbAnzahl.innerHTML = warenkorb + "";
        neuesDiv.appendChild(warenkorbAnzahl);

        let geklickt: HTMLElement = <HTMLElement> _event.target;
        
        let preis: string = <string> geklickt.getAttribute("preis");

        let preisAlsZahl: number = parseFloat(preis);

        warenwert += preisAlsZahl;

        console.log("Warenwert: " + warenwert + "€");
        }
    }

    let allesi: HTMLElement = <HTMLElement> document.getElementById("momentan");
    allesi.addEventListener("click", handleAllesLink);

    let klassi: HTMLElement = <HTMLElement> document.getElementById("KlassikerLink");
    klassi.addEventListener("click", handleKlassikerLink);

    let tieri: HTMLElement = <HTMLElement> document.getElementById("TiereLink");
    tieri.addEventListener("click", handleTiereLink);
    
    let haushalti: HTMLElement = <HTMLElement> document.getElementById("HaushaltLink");
    haushalti.addEventListener("click", handleHaushaltLink);

    function handleKlassikerLink(): void {
        let one: HTMLElement = <HTMLElement> document.getElementById("Tiere");
        one.style.display = "none";
        let two: HTMLElement = <HTMLElement> document.getElementById("Haushalt");
        two.style.display = "none";
        let three: HTMLElement = <HTMLElement> document.getElementById("Klassiker");
        three.style.display = "flex";
    }

    function handleTiereLink(): void {
        let one: HTMLElement = <HTMLElement> document.getElementById("Klassiker");
        one.style.display = "none";
        let two: HTMLElement = <HTMLElement> document.getElementById("Haushalt");
        two.style.display = "none";
        let three: HTMLElement = <HTMLElement> document.getElementById("Tiere");
        three.style.display = "flex";
    }

    function handleHaushaltLink(): void {
        let one: HTMLElement = <HTMLElement> document.getElementById("Klassiker");
        one.style.display = "none";
        let two: HTMLElement = <HTMLElement> document.getElementById("Tiere");
        two.style.display = "none";
        let three: HTMLElement = <HTMLElement> document.getElementById("Haushalt");
        three.style.display = "flex";
    }

    function handleAllesLink(): void {
        let one: HTMLElement = <HTMLElement> document.getElementById("Klassiker");
        one.style.display = "flex";
        let two: HTMLElement = <HTMLElement> document.getElementById("Tiere");
        two.style.display = "flex";
        let three: HTMLElement = <HTMLElement> document.getElementById("Haushalt");
        three.style.display = "flex;";
    }
}