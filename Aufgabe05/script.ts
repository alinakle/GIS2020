namespace Aufgabe05 {

export interface Artikel {
    bild: string;
    name: string;
    preis: string;
    inhalt: string;
}

let familia: Artikel = {bild: "Familie.jpg", name: "We Are Familia", preis: "1€", inhalt: "Ein eindeutiges Statment in cooler Schrift"};
let rose: Artikel = {bild: "Rose.jpg", name: "All The Single Roses", preis: "4€", inhalt: "Das zeitlose Motiv der Rose. Ein muss für jede starke Frau" };
let schaedel: Artikel = {bild: "Skull.jpg", name: "Schicker Schädel" , preis: "5€", inhalt: "Egal ob harter Rocker oder Schulabbrecher, dieses Motiv ist ein Hingucker" };
let anker: Artikel = {bild: "Anker.jpg", name: "Nicht ganz so Old School Anker" , preis: "3€", inhalt: "Das klassische Motiv im neuen Stil" };

let pferd: Artikel = {bild: "Pferd.jpg", name: "Skatendes Pferd" , preis: "6€", inhalt: "Für jeden der daran glaubt, das alles möglich ist" };
let bkatze: Artikel = {bild: "VampCat.jpg", name: "Böse Katze" , preis: "2€", inhalt: "Ein Motiv für jeden der Katzen-Tattoos mag, aber Katzen nicht" };
let gkatze: Artikel = {bild: "Katze.jpg", name: "Gähnende Katze" , preis: "5€", inhalt: "Gegenstück zum klassischen 'Brüllender Löwe'-Motiv" };
let faultier: Artikel = {bild: "Faultier.jpg", name: "Abhängendes Faultier" , preis: "4€", inhalt: "Simples Faultier Design für simple Abhänger" };

let laptop: Artikel = {bild: "Laptop.jpg", name: "Aufgeklappter Laptop" , preis: "4€", inhalt: "Ein Liebesbeweis an jemanden der immer für einen da ist" };
let box: Artikel = {bild: "Tempos.jpg", name: "Box voll Tücher" , preis: "5€", inhalt: "Immer gut, wenn man Taschentücher dabei hat" };
let shirt: Artikel = {bild: "Shirt.jpg", name: "Simples T-Shirt" , preis: "2€", inhalt: "Nie wieder sorgen machen wegen Eregung öffentlichen Ärgernisses, da sie ja immer ein Shirt haben" };
let tape: Artikel = {bild: "Tape.jpg", name: "Angefangene Rolle Tape" , preis: "4€", inhalt: "Man findest sie nie wenn man sie braucht, also aufs Bein damit" };

export let klassiker: Artikel[] = [familia, rose, schaedel, anker];
export let tiere: Artikel[] = [pferd, bkatze, gkatze, faultier];
export let haushalt: Artikel[] = [laptop, box, shirt, tape];


}

