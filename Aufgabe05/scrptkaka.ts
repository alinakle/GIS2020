namespace Aufgabe05 {

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
        preis.innerHTML = klassiker[i].preis;
        neuesDiv.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        preis.innerHTML = klassiker[i].inhalt;
        neuesDiv.appendChild(inhalt);

    }

    


    for (let i: number = 0; i < tiere.length; i ++) {

        let neuesDiv: HTMLElement = document.createElement("div");
        neuesDiv.setAttribute("class", "artikel");
        document.getElementById("Tiere")?.appendChild(neuesDiv);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", tiere[i].bild);
        neuesDiv.appendChild(bild);

        let name: HTMLElement = document.createElement("h4");
        name.innerHTML = tiere[i].name;
        neuesDiv.appendChild(name);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = tiere[i].preis;
        neuesDiv.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        preis.innerHTML = tiere[i].inhalt;
        neuesDiv.appendChild(inhalt);
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
        preis.innerHTML = haushalt[i].preis;
        neuesDiv.appendChild(preis);

        let inhalt: HTMLElement = document.createElement("p");
        preis.innerHTML = haushalt[i].inhalt;
        neuesDiv.appendChild(inhalt);
    }
}