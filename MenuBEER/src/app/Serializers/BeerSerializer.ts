export interface Beer {
    "BeerName": string;
    "Descripcion": string;
    "Alcohol": string;
    "price": string;
}
export interface Banner {
    "Name": string;
    "Title": string;
    "Text1": string;
    "Text2": string;
}
export interface FinalData {
    "BeerMain": Beer[];
    "BeerDown": Beer;
    "Banner": Banner;
}