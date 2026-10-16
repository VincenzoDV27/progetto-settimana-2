/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
  {
    nome: "Cuffie",
    categoria: "Elettronica",
    descrizione: "Cuffie wireless con cancellazione del rumore",
    prezzo: 29.99,
    rating: 4,
    immagine: "cuffie.jpg",
    disponibile: false,
  },
  {
    nome: "Tablet",
    categoria: "Elettronica",
    descrizione: "Tablet 10 pollici 64GB",
    prezzo: 199.9,
    rating: 5,
    immagine: "tablet.jpg",
    disponibile: true,
  },
  {
    nome: "Libro",
    categoria: "Libri",
    descrizione: "Il romanzo dell'anno",
    prezzo: 40.0,
    rating: 4,
    immagine: "libro.jpg",
    disponibile: true,
  },
  {
    nome: "Zaino",
    categoria: "Abbigliamento",
    descrizione: "Zaino da viaggio 30L impermeabile",
    prezzo: 15.99,
    rating: 4,
    immagine: "zaino.jpg",
    disponibile: true,
  },
  {
    nome: "Lampada",
    categoria: "Casa",
    descrizione: "Lampada LED da scrivania orientabile",
    prezzo: 70.99,
    rating: 3,
    immagine: "lampada.jpg",
    disponibile: true,
  },
  {
    nome: "Smartwatch",
    categoria: "Elettronica",
    descrizione: "Smartwatch fitness con GPS",
    prezzo: 55.0,
    rating: 5,
    immagine: "smartwatch.jpg",
    disponibile: true,
  },
  {
    nome: "Mouse",
    categoria: "Elettronica",
    descrizione: "Mouse ergonomico wireless",
    prezzo: 60.0,
    rating: 4,
    immagine: "mouse.jpg",
    disponibile: false,
  },
  {
    nome: "Caffettiera",
    categoria: "Casa",
    descrizione: "Caffettiera moka 6 tazze",
    prezzo: 8.99,
    rating: 2,
    immagine: "caffettiera.jpg",
    disponibile: true,
  },
  {
    nome: "Felpa",
    categoria: "Abbigliamento",
    descrizione: "Felpa con cappuccio",
    prezzo: 24.99,
    rating: 5,
    immagine: "felpa.jpg",
    disponibile: true,
  },
  {
    nome: "Tastiera",
    categoria: "Elettronica",
    descrizione: "Tastiera wireless meccanica",
    prezzo: 49.99,
    rating: 4,
    immagine: "tastiera.jpg",
    disponibile: false,
  },
  {
    nome: "Quaderno",
    categoria: "Libri",
    descrizione: "Quaderno da 120 pagine a righe",
    prezzo: 1.99,
    rating: 3,
    immagine: "quaderno.jpg",
    disponibile: true,
  },
  {
    nome: "Cuscino",
    categoria: "Casa",
    descrizione: "Cuscino bianco bello comodo",
    prezzo: 12.99,
    rating: 2,
    immagine: "cuscino.jpg",
    disponibile: true,
  },
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i < prodotti.length; i++) {
  console.log(`${prodotti[i].nome}: € ${prodotti[i].prezzo}`);
}

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const RATING = document.querySelectorAll(".rating .stars");

function stars(prodotto, stelle) {
  if (prodotto.rating === 5) {
    stelle.textContent = "★★★★★";
  } else if (prodotto.rating === 4) {
    stelle.textContent = "★★★★☆";
  } else if (prodotto.rating === 3) {
    stelle.textContent = "★★★☆☆";
  } else if (prodotto.rating === 2) {
    stelle.textContent = "★★☆☆☆";
  } else if (prodotto.rating === 1) {
    stelle.textContent = "★☆☆☆☆";
  }
}

for (let i = 0; i < RATING.length; i++) {
  stars(prodotti[i], RATING[i]);
}

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function categories(categoria) {
  const prodFiltrati = [];

  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].categoria === categoria) {
      prodFiltrati.push(prodotti[i]);
    }
  }
  return prodFiltrati;
}
console.log(categories("Elettronica"));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function available(disponibile) {
  const prodAvailable = [];

  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
      prodAvailable.push(prodotti[i]);
    }
  }
  return prodAvailable;
}
console.log(available(prodotti));

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function generaGriglia() {
  const tabella = document.querySelector(".table-products");

  tabella.innerHTML = `            
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Prezzo</th>
            <th>Rating</th>
            <th>Disponibile</th>
          </tr>
        </thead>
        `;

  for (let i = 0; i < prodotti.length; i++) {
    tabella.innerHTML += `
      <tr>
        <td>${prodotti[i].nome}</td>
        <td>${prodotti[i].categoria}</td>
        <td>€ ${prodotti[i].prezzo}</td>
        <td>${showRating(prodotti[i].rating)}</td>
        <td>${ifAvailable(prodotti[i].disponibile)}</td>
      </tr>
    `;
  }
}

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
