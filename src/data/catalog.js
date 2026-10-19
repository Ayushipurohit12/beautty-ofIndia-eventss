export const imageSources = {
  textile: "https://images.pexels.com/photos/37415386/pexels-photo-37415386/free-photo-of-artisan-textiles-hanging-in-indian-market.jpeg",
  market: "https://images.pexels.com/photos/40004835/pexels-photo-40004835/free-photo-of-bengaluru-street-market-vibrant-day-scene.jpeg",
  jewelry: "https://images.pexels.com/photos/29400432/pexels-photo-29400432/free-photo-of-rajasthani-women-selling-traditional-jewelry.jpeg",
  diya: "https://images.pexels.com/photos/36543678/pexels-photo-36543678/free-photo-of-colorful-ganesha-statue-with-brass-diya.jpeg",
};

export const photo = (id, width = 900) =>
  `${imageSources[id]}?auto=compress&cs=tinysrgb&w=${width}&h=${Math.round(width * 0.66)}&fit=crop`;

export const months = ["Oktober", "November", "December", "Vinter 2027", "Sommar 2027", "Alla datum"];

export const monthAbbreviations = {
  januari: "JAN", februari: "FEB", mars: "MAR", april: "APR", maj: "MAJ", juni: "JUN",
  juli: "JUL", augusti: "AUG", september: "SEP", oktober: "OKT", november: "NOV", december: "DEC",
};

export const navigationItems = [
  { label: "Hem", slug: "hem" },
  { label: "Rökelse", slug: "rokelse" },
  { label: "Parfymoljor", slug: "parfymoljor" },
  { label: "Kläder", slug: "klader" },
  { label: "Smycken", slug: "smycken" },
  { label: "Hem & inredning", slug: "inredning" },
  { label: "Marknader", slug: "marknader" },
  { label: "Om oss", slug: "om-oss" },
];

export const collectionPages = {
  hem: {
    title: "Välkommen till Beauty of India",
    description: "Upptäck handplockade favoriter, färgstarka textilier och dofter från Indien.",
    image: "textile",
    products: [
      { name: "Rökelse & dofter", description: "Låt dina favoritdofter skapa lugn och harmoni.", image: "diya", link: "rokelse" },
      { name: "Färgstark stil", description: "Mönster, färger och detaljer med inspiration från Indien.", image: "textile", link: "klader" },
      { name: "Hitta oss nära dig", description: "Träffa oss på marknader och event runt om i Stockholm.", image: "market", link: "marknader" },
    ],
  },
  rokelse: {
    title: "Rökelse",
    description: "Upptäck rökelse och välkomnande dofter för hemmets lugna stunder.",
    image: "diya",
    products: [
      { name: "Indisk rökelse", description: "Välj en ny favorit bland varma, omsorgsfullt utvalda dofter.", image: "diya" },
      { name: "Dofter för hemmet", description: "Små detaljer som skapar en rofylld och ombonad känsla.", image: "textile" },
      { name: "Dofta på plats", description: "Besök oss på nästa marknad och hitta din egen favorit.", image: "market", link: "marknader" },
    ],
  },
  parfymoljor: {
    title: "Parfymoljor",
    description: "Hitta en personlig doft bland våra noga utvalda parfymoljor.",
    image: "diya",
    products: [
      { name: "Blommiga toner", description: "Mjuka och uttrycksfulla dofter inspirerade av blommor.", image: "textile" },
      { name: "Varm & kryddig", description: "Djupa dofter med en varm, minnesvärd karaktär.", image: "diya" },
      { name: "Prova din favorit", description: "Kom förbi en marknad och upptäck doften på plats.", image: "market", link: "marknader" },
    ],
  },
  klader: {
    title: "Kläder",
    description: "Färgstarka plagg och textilier med inspiration från indiskt hantverk.",
    image: "textile",
    products: [
      { name: "Färgstarka textilier", description: "Mönster och färger som gör varje dag lite vackrare.", image: "textile" },
      { name: "Hitta din stil", description: "Upptäck utvalda favoriter och detaljer med personlighet.", image: "jewelry" },
      { name: "Se sortimentet live", description: "Besök oss och känn på material och färger på plats.", image: "market", link: "marknader" },
    ],
  },
  smycken: {
    title: "Smycken",
    description: "Upptäck vackra detaljer och smycken som sätter personlig prägel på din stil.",
    image: "jewelry",
    products: [
      { name: "Färgstarka favoriter", description: "Uttrycksfulla smycken att bära både till vardag och fest.", image: "jewelry" },
      { name: "Hantverk & detaljer", description: "Inspirerande former och detaljer med indisk känsla.", image: "diya" },
      { name: "Prova på plats", description: "Träffa oss på nästa marknad och se hela urvalet.", image: "market", link: "marknader" },
    ],
  },
  inredning: {
    title: "Hem & inredning",
    description: "Ge hemmet en varm känsla med indiska textilier och vackra inredningsdetaljer.",
    image: "textile",
    products: [
      { name: "Textilier till hemmet", description: "Färgglada mönster som ger rummet en personlig känsla.", image: "textile" },
      { name: "Detaljer & dekoration", description: "Små inredningsfavoriter som gör stor skillnad.", image: "diya" },
      { name: "Hitta oss på marknad", description: "Se, känn och upptäck våra produkter på plats.", image: "market", link: "marknader" },
    ],
  },
  "om-oss": {
    title: "Om Beauty of India",
    description: "Vi vill dela vår kärlek till Indiens färger, dofter och hantverk – och göra det enkelt att upptäcka dem nära dig.",
    image: "market",
    products: [
      { name: "Våra handplockade varor", description: "Vi väljer ut produkter med omsorg och känsla för detaljer.", image: "textile" },
      { name: "Personlig service", description: "Vi hjälper dig gärna hitta en ny favorit när vi ses.", image: "jewelry" },
      { name: "Träffa oss", description: "Kom och säg hej på någon av våra kommande marknader.", image: "market", link: "marknader" },
    ],
  },
};

export const shopProducts = [
  { id: "incense-rose", category: "rokelse", name: "Indisk rökelse – ros", description: "En mjuk, blommig doft för hemmets lugna stunder.", image: "diya", price: 89 },
  { id: "incense-sandalwood", category: "rokelse", name: "Rökelse – sandelträ", description: "Varmt doftande rökelse inspirerad av indiskt hantverk.", image: "diya", price: 79 },
  { id: "perfume-rose", category: "parfymoljor", name: "Parfymolja – ros", description: "En personlig och blommig doft i praktiskt oljeformat.", image: "textile", price: 149 },
  { id: "perfume-amber", category: "parfymoljor", name: "Parfymolja – varm amber", description: "En varm, mjuk doft att bära varje dag.", image: "diya", price: 159 },
  { id: "scarf-cotton", category: "klader", name: "Mönstrad bomullssjal", description: "Lätt, färgstark sjal med inspirerande mönster.", image: "textile", price: 249 },
  { id: "tunic-color", category: "klader", name: "Färgstark tunika", description: "En ledig favorit med färg och indisk känsla.", image: "market", price: 399 },
  { id: "earrings-brass", category: "smycken", name: "Mässingsörhängen", description: "Dekorativa örhängen med vackra hantverksdetaljer.", image: "jewelry", price: 199 },
  { id: "necklace-color", category: "smycken", name: "Färgstarkt halsband", description: "Ett uttrycksfullt halsband till vardag och fest.", image: "jewelry", price: 279 },
  { id: "cushion-cover", category: "inredning", name: "Mönstrat kuddfodral", description: "Färgstark textil som gör hemmet mer personligt.", image: "textile", price: 229 },
  { id: "brass-lantern", category: "inredning", name: "Dekorativ mässingslykta", description: "En varm inredningsdetalj med inspirerande former.", image: "diya", price: 329 },
];
