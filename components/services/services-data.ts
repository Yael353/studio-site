export const services = [
  {
    number: "01",
    label: "Webbdesign & utveckling",
    tagline: "En webbplats som arbetar för dig.",
    description:
      "Din webbplats är ofta det första mötet mellan dig och en potentiell kund. Jag skapar skräddarsydda, användarvänliga webbplatser som speglar ditt företag, inger förtroende och gör det enkelt för besökaren att ta nästa steg.",
    benefits: [
      "Ett professionellt första intryck",
      "Anpassad för mobil, surfplatta och dator",
      "Tydliga vägar från besökare till kund",
    ],
    keyword: "Upplevelse",
  },
  {
    number: "02",
    label: "SEO & synlighet",
    tagline: "Bli hittad av rätt människor.",
    description:
      "SEO står för sökmotoroptimering. Det handlar om att göra din webbplats lättare för sökmotorer att förstå och för människor att hitta. Genom tydlig struktur, relevant innehåll och en genomtänkt teknisk grund förbättrar vi förutsättningarna att synas när kunder söker efter det du erbjuder.",
    benefits: [
      "Större möjlighet att synas i sökresultat",
      "Nå kunder som redan söker dina tjänster",
      "Bygg långsiktig synlighet utan att enbart förlita dig på annonser",
    ],
    keyword: "Synlighet",
  },
  {
    number: "03",
    label: "Teknik & vidareutveckling",
    tagline: "Byggt för idag. Redo för imorgon.",
    description:
      "En bra digital lösning ska inte bara se bra ut. Den ska fungera smidigt, vara säker och kunna utvecklas när behoven förändras. Jag hjälper dig med allt från teknisk optimering till skräddarsydda funktioner, integrationer och webbapplikationer.",
    benefits: [
      "Snabbare och smidigare användarupplevelse",
      "Funktioner anpassade efter verksamheten",
      "En teknisk grund som går att vidareutveckla",
    ],
    keyword: "Utveckling",
  },
] as const;

export type Service = (typeof services)[number];
