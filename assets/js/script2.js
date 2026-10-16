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

// GRIGLIA

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

function showRating(rating) {
  if (rating === 5) {
    return "★★★★★";
  } else if (rating === 4) {
    return "★★★★☆";
  } else if (rating === 3) {
    return "★★★☆☆";
  } else if (rating === 2) {
    return "★★☆☆☆";
  } else if (rating === 1) {
    return "★☆☆☆☆";
  } else {
    return "☆☆☆☆☆";
  }
}

function ifAvailable(disponibile) {
  if (disponibile === true) {
    return "Disponibile";
  } else {
    return "Non disponibile";
  }
}

generaGriglia();
