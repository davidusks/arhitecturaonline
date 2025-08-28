// 1) Your data model (customize this!)
const entries = [
  {
    photo: "img/1.jpg",
    date: "august 2024 · Apollo111",
    text: "Totul a inceput aici: cateodata a fost rai, cateodata a fost iad, insa va ramane pentru totdeauna locul care imi aminteste de ce imi plac jeleurile.",
    alt: "Noi",
  },
  {
    photo: "img/2.JPEG",
    date: "august 2024 · Parcul IOR",
    text: "Se pare ca primul nostru date a fost un real succes! Un motiv ni-l poate spune ora la care am facut aceasta poza.",
    alt: "Noi",
  },
  {
    photo: "img/3.PNG",
    date: "august 2024 · Vagonul din trenul CFR Bucuresti-Galati",
    text: "Fluturasii din stomacul meu nu au fost raniti pe parcursul realizarii acestui screenshot.",
    alt: "Noi",
  },
  {
    photo: "img/4.JPEG",
    date: "septembrie 2024 · Parcul Teilor",
    text: "Prima noastra incursiune in Universul 'Parcul Teilor', si totodata prima oara cand te-am asteptat timid pe peronul agitat al Garii de Nord.",
    alt: "Noi",
  },
  {
    photo: "img/5.JPEG",
    date: "octombrie 2024 · Alt vagon din trenurile CFR",
    text: "O amintire care va ramane cu mine pentru mult timp, cu siguranta. Nu calatoria de 10 ore cu trenul! City break-ul in Cluj! :) P.S.: Ce fete aveam! 😂",
    alt: "Noi",
  },
  {
    photo: "img/6.JPEG",
    date: "noiembrie 2024 · Gradina Botanica, Cluj-Napoca",
    text: "Noi 2 si Perry. Ce mai e de adaugat?",
    alt: "Noi",
  },
  {
    photo: "img/7.JPEG",
    date: "noiembrie 2024 · Art Safari",
    text: "Poza asta e cu atat mai speciala cu cat e inclusa in primul nostru story pus impreuna. A fost o zi frumoasa, in care am privit arta alaturi de insasi cea mai frumoasa opera.",
    alt: "Noi",
  },
  {
    photo: "img/8.JPEG",
    date: "decembrie 2024 · Teatris, Galati",
    text: "Vizitand micutul Galati alaturi de iubita mea. A, apropo - cand mai mergem la Galati?",
    alt: "Noi",
  },
  {
    photo: "img/9.JPEG",
    date: "revelion 2025 · Casa Mariei",
    text: "Hai sa nu comentam petrecerea in sine, am intrat impreuna in anul 2025 si asta e cel mai important! 😂",
    alt: "Noi",
  },
  {
    photo: "img/10.jpg",
    date: "ianuarie 2025 · Metroul din Bucuresti",
    text: "Care are mai multe sezoane? How I met your Mother, sau albumul nostru de poze din metrou?",
    alt: "Noi",
  },
  {
    photo: "img/11.JPEG",
    date: "ianuarie 2025 · Oaza noastra de liniste. Dristor",
    text: "Aici ne faceam frumosi impreuna! Cam groasa masca aia, totusi... Dar nu zic nu daca vrei sa repetam experienta!",
    alt: "Noi",
  },
  {
    photo: "img/12.JPEG",
    date: "ianuarie 2025 · Scarile 'Eforie'",
    text: "Nu putem nega ca serile de la scari au avut farmecul lor. Chiar daca unele nu au decurs cum ne-am dorit, ne-au aratat ca putem sa fim si seriosi, si distractivi.",
    alt: "Noi",
  },
  {
    photo: "img/13.JPEG",
    date: "ianuarie 2025 · Cotroceni",
    text: "Nu cred ca ti-am spus asta pana acum, dar ziua in care ne-am plimbat in Cotroceni este in top 3 zile petrecute alaturi de tine.",
    alt: "Noi",
  },
  {
    photo: "img/14.JPEG",
    date: "februarie 2025 · Barcelona, Spania",
    text: "Si.. am ajuns si la Barcelona! Fripturi, plaja, vin si.. un balcon boem langa Catedrala Barcelonei!",
    alt: "Noi",
  },
  {
    photo: "img/15.JPEG",
    date: "februarie 2025 · Quantic",
    text: "Desi concertul a fost reusit, cel mai frumos moment al serii pentru mine a fost declaratia mea in zapada.",
    alt: "Noi",
  },
  {
    photo: "img/16.JPEG",
    date: "februarie 2025 · Restaurant Margineni",
    text: "Iata ca a venit si ziua lui Silviu, si desi restaurantul ales de el a fost poate cam profan, noaptea aceea cu siguranta a fost sacra. 🍄",
    alt: "Noi",
  },
  {
    photo: "img/17.JPEG",
    date: "martie 2025 · Gender Reveal Eva",
    text: "O sa avem o nepotica!!! 🎀 Eva este cu siguranta mandra de matusica Cris.",
    alt: "Noi",
  },
  {
    photo: "img/18.JPEG",
    date: "martie 2025 · Apollo111",
    text: "De 2 lucruri nu scapi in viata: de moarte si de poze cu Cris si David daca esti DJ in Apollo.",
    alt: "Noi",
  },
  {
    photo: "img/19.JPEG",
    date: "martie 2025 · Palatul Cotroceni",
    text: "So... do you wanna be my Mrs. President?",
    alt: "Noi",
  },
  {
    photo: "img/20.JPEG",
    date: "aprilie 2025 · Paine si Vin",
    text: "Mai stii prima noastra despartie? A durat in jur de... 60 de secunde.",
    alt: "Noi",
  },
  {
    photo: "img/21.JPEG",
    date: "aprilie 2025 · Un parc din Chisinau",
    text: "Si iata-ne ajunsi in taramul magic, Chisinau. Nu are privelisti ca Paris si nici magazine ca Milano, dar aceasta vacanta alaturi de tine cu siguranta a avut ceva aparte.",
    alt: "Noi",
  },
  {
    photo: "img/22.JPEG",
    date: "aprilie 2025 · Apollo11",
    text: "EL cLuB? Si, senorita!",
    alt: "Noi",
  },
  {
    photo: "img/23.JPEG",
    date: "mai 2025 · Piata Victoriei",
    text: "Aici eram adulti repsonsaibili, interesati de viitorul copiilor lor.",
    alt: "Noi",
  },
  {
    photo: "img/24.JPEG",
    date: "mai 2025 · Cinema-ul din Mega Mall",
    text: "Si.. la ce film vreti sa cumparati bilete?",
    alt: "Noi",
  },
  {
    photo: "img/25.JPEG",
    date: "iulie 2025 · Parcul Floreasca",
    text: "This slide unfortunately cannot be used anymore, but I can still slide in your DM's, baby. Cu siguranta in top 5 zile alaturi de tine.",
    alt: "Noi",
  },
  {
    photo: "img/26.JPEG",
    date: "iulie 2025 · Eforie Nord",
    text: "Prima marturisire a iubirii noastre in fata valurilor marii a fost mai frumoasa decat ma asteptam!",
    alt: "Noi",
  },
  {
    photo: "img/27.JPEG",
    date: "iulie 2025 · Zoom Beach",
    text: "Mr. Cowboy & Mrs. Cowgirl.",
    alt: "Noi",
  },
  {
    photo: "img/28.JPEG",
    date: "august 2025 · Apollo111",
    text: "'O, nu! Nu iar astia 2'",
    alt: "Noi",
  },
  {
    photo: "img/30.JPEG",
    date: "august 2025 · Cracovia",
    text: "These 2 seem dangerous. I would stay away! (If I had been another boy/girl with romantic interests) ",
    alt: "Noi",
  },
  {
    photo: "img/31.JPEG",
    date: "august 2025 · Cracovia",
    text: "Ecuatia matematica din poza este intitulata 'Lema lui David' si sta la baza legilor acestui Univers.",
    alt: "Noi",
  },
  {
    photo: "img/29.JPEG",
    date: "august 2025 · Acasa la tine, unde e cald si bine",
    text: "Si.. iata-ne ajunsi la ultima poza din acest mini-album. Poate ca aceasta este cea mai expresiva, pentru ca este poza pe care ti-am facut-o in ziua in care te-am vazut ultima data, si care avea rolul de a imi alina dorul pe care urma sa ti-l port. Evenimentele nu au decurs asa cum ne doream si se pare ca aceasta poza m-a alinat mai mult timp decat anticipasem, dar privesc cu optimism in viitor.",
    alt: "Noi",
  },
];

// 3) Render
const root = document.getElementById("timeline");

entries.forEach(({ photo, date, text, alt }, idx) => {
  const entry = document.createElement("section");
  entry.className = "entry"; // CSS handles alternating layout

  // media
  const media = document.createElement("div");
  media.className = "media";
  media.innerHTML = `
    <figure>
      <img src="${photo}" alt="${alt || ""}" loading="lazy" decoding="async">
      <figcaption>${date}</figcaption>
    </figure>
  `;

  // content
  const content = document.createElement("article");
  content.className = "content";
  content.innerHTML = `<p>${text}</p>`;

  entry.append(media, content);
  root.appendChild(entry);
});

// --- Music toggle ---
const audio = document.getElementById("bg-music");
const btn = document.getElementById("music-toggle");

// volume you like
if (audio) audio.volume = 0.5;

function updateBtn(playing) {
  if (!btn) return;
  btn.setAttribute("aria-pressed", playing ? "true" : "false");
  btn.textContent = playing ? "Pause" : "🎵 Play me first";
}

// Toggle on click
btn?.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      localStorage.setItem("musicOn", "1");
      updateBtn(true);
    } else {
      audio.pause();
      localStorage.setItem("musicOn", "0");
      updateBtn(false);
    }
  } catch (e) {
    // Autoplay or permissions might block; keep button visible
    console.warn("Audio play blocked:", e);
  }
});

// Respect prior choice (if user had music on last visit, start on first gesture)
document.addEventListener(
  "pointerdown",
  async () => {
    if (!audio || !btn) return;
    const wanted = localStorage.getItem("musicOn") === "1";
    if (wanted && audio.paused) {
      try {
        await audio.play();
        updateBtn(true);
      } catch {}
    }
  },
  { once: true }
);

// Keep button state in sync if user pauses via media controls
audio?.addEventListener("play", () => updateBtn(true));
audio?.addEventListener("pause", () => updateBtn(false));

// Start with correct label
updateBtn(false);
