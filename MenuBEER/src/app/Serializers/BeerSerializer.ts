export interface Beer {
    "BeerName": string;
    "Description": string;
    "Alcohol": string;
    "price": string;
}
export interface Footer {
    "Name": string;
    "Title": string;
    "Text1": string;
    "Text2": string;
    "position": string;
}
export interface FinalData {
    "BeerMain": Beer[];
    "BeerDown": Beer;
    "Footer": Footer;
}