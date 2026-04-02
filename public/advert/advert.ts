import image1 from "./IMG-20260325-WA0000.jpg";
import image2 from "./IMG-20260325-WA0001.jpg";
import { StaticImageData } from "next/image";

export interface Advert {
  id: string;
  name: string;
  time: string;
  description: string;
  price: number;
  colour: string;
  path: any;
}

export const adverts: Advert[] = [
  {
    id: "1",
    name: "Watch",
    time: "Next week",
    description: "Luxury black wrist watch",
    price: 15000,
    colour: "black",
    path: image1,
  },
  {
    id: "2",
    name: "Watch",
    time: "Next week",
    description: "Classic black watch",
    price: 12000,
    colour: "black",
    path: image2,
  },
];
