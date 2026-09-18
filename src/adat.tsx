export type ZeneMufaj = "Rock" | "Progresszív rock" | "Pop" | "Hip-hop";

export interface ZeneTipus {
  readonly id: number;
  cim: string;
  szerzo: string;
  kiadas_ev: number;
  mufaj: string;
  album: string;
}

export const ZENEK: ZeneTipus[] = [
  {
    id: 1,
    cim: "Bohemian Rhapsody",
    szerzo: "Queen",
    kiadas_ev: 1975,
    mufaj: "Rock",
    album: "A Night at the Opera",
  },
  {
    id: 2,
    cim: "Gyöngyhajú lány",
    szerzo: "Omega",
    kiadas_ev: 1969,
    mufaj: "Progresszív rock",
    album: "10000 lépés",
  },
  {
    id: 3,
    cim: "Thriller",
    szerzo: "Michael Jackson",
    kiadas_ev: 1982,
    mufaj: "Pop",
    album: "Thriller",
  },
  {
    id: 4,
    cim: "Lose Yourself",
    szerzo: "Eminem",
    kiadas_ev: 2002,
    mufaj: "Hip-hop",
    album: "8 Mile",
  },
];
