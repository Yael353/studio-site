const projects = [
  {
    title: "Taroudant Gold",
    category: "E-handel",
    description:
      "Visuellt driven e-handel med fokus på mikroupplevelser och lyxig känsla.",
    image: "/images/taroudant.png",
    link: "https://tarodantgold.vercel.app/",
  },
  {
    title: "WorldScope",
    category: "Datavisualisering",
    description:
      "Genom diagram kan du enkelt förstå trender och mönster vad gäller ekonomi och hälsa runt om i världen",
    image: "/images/worldscope.png",
    link: "https://worldscope-five.vercel.app/",
  },
  {
    title: "ChefMate",
    category: "AI-applikation",
    description:
      "Webbapp som integrerar OpenAI för recept och bilder. Byggd med Node.js och React.",
    image: "/images/chefmate.png",
    link: "https://github.com/Yael353/open_ai_13",
  },
  {
    title: "Fastighetsdata",
    category: "Dashboard",
    description:
      "Datatung dashboard för realtidsvisualisering av el, vatten och temperatur.",
    image: "/images/overview.png",
    link: "https://github.com/Yael353/fastighetsportal",
  },
  {
    title: "Carrot Cake News",
    category: "Nyhetssida",
    description:
      "En fullskalig nyhetssajt i C# och ASP.NET Core MVC med rollbaserad autentisering och molnlagring i Azure.",
    image: "/images/ccn.png",
    link: "https://github.com/Gr-25-17/CCN",
  },
  {
    title: "Hivify",
    category: "SaaS-plattform",
    description:
      "Skalbar plattform med Clean Architecture, CQRS och multi-tenant isolering.",
    image: "/images/hivify.jpg",
    link: "https://github.com/Hivify",
  },
];

export default projects;
export type Project = (typeof projects)[number];
