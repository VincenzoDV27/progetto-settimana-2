const prodotti = [
  // ARRAY

  {
    nome: "Cuffie",
    categoria: "Elettronica",
    descrizione: "Cuffie wireless con cancellazione del rumore",
    prezzo: 29.99,
    rating: 4.2,
    immagine: "cuffie.jpg",
    disponibile: false,
  },
  {
    nome: "Tablet",
    categoria: "Elettronica",
    descrizione: "Tablet 10 pollici 64GB",
    prezzo: 199.9,
    rating: 4.7,
    immagine: "tablet.jpg",
    disponibile: true,
  },
  {
    nome: "Libro",
    categoria: "Libri",
    descrizione: "Il romanzo dell'anno",
    prezzo: 40.0,
    rating: 4.0,
    immagine: "libro.jpg",
    disponibile: true,
  },
  {
    nome: "Zaino",
    categoria: "Abbigliamento",
    descrizione: "Zaino da viaggio 30L impermeabile",
    prezzo: 15.99,
    rating: 3.8,
    immagine: "zaino.jpg",
    disponibile: true,
  },
  {
    nome: "Lampada",
    categoria: "Casa",
    descrizione: "Lampada LED da scrivania orientabile",
    prezzo: 70.99,
    rating: 4.4,
    immagine: "lampada.jpg",
    disponibile: true,
  },
  {
    nome: "Smartwatch",
    categoria: "Elettronica",
    descrizione: "Smartwatch fitness con GPS",
    prezzo: 55.0,
    rating: 4.0,
    immagine: "smartwatch.jpg",
    disponibile: true,
  },
  {
    nome: "Mouse",
    categoria: "Elettronica",
    descrizione: "Mouse ergonomico wireless",
    prezzo: 60.0,
    rating: 4.6,
    immagine: "mouse.jpg",
    disponibile: false,
  },
  {
    nome: "Caffettiera",
    categoria: "Casa",
    descrizione: "Caffettiera moka 6 tazze",
    prezzo: 8.99,
    rating: 4.8,
    immagine: "caffettiera.jpg",
    disponibile: true,
  },
  {
    nome: "Felpa",
    categoria: "Abbigliamento",
    descrizione: "Felpa con cappuccio",
    prezzo: 24.99,
    rating: 2.3,
    immagine: "felpa.jpg",
    disponibile: true,
  },
  {
    nome: "Tastiera",
    categoria: "Elettronica",
    descrizione: "Tastiera wireless meccanica",
    prezzo: 49.99,
    rating: 3.0,
    immagine: "tastiera.jpg",
    disponibile: false,
  },
  {
    nome: "Quaderno",
    categoria: "Libri",
    descrizione: "Quaderno da 120 pagine a righe",
    prezzo: 1.99,
    rating: 3.7,
    immagine: "quaderno.jpg",
    disponibile: true,
  },
  {
    nome: "Cuscino",
    categoria: "Casa",
    descrizione: "Cuscino bianco bello comodo",
    prezzo: 12.99,
    rating: 3.9,
    immagine: "cuscino.jpg",
    disponibile: true,
  },
];

//CARD

function generaCard() {
  const card = document.querySelector(".products-card");

  card.innerHTML = "";

  for (let i = 0; i < prodotti.length; i++) {
    card.innerHTML += `
      <div class="card-products">
        <div class="prod-img"></div>
        <div class="description"></div>
        <div class="rating">
          <span class="stars"></span>
          <span class="medium"></span>
        </div>
        <div class="price"></div>
        <button type="button" class="add-cart">
          Aggiungi al carrello
        </button>
      </div>
    `;
  }

  showImages();
  showDescriptions();
  showRating();
  showMediaRating();
  showPrice();
  showAvailability();
}
// IMMAGINI

function showImages() {
  const immagini = document.querySelectorAll(".prod-img");

  for (let i = 0; i < immagini.length; i++) {
    immagini[i].innerHTML =
      `<img src="assets/img/${prodotti[i].immagine}" alt="${prodotti[i].nome}">`;
  }
}

// DESCRIZIONI
function showDescriptions() {
  const descrizioni = document.querySelectorAll(".description");

  for (let i = 0; i < descrizioni.length; i++) {
    descrizioni[i].textContent = prodotti[i].descrizione;
  }
}

// RATING

function showRating() {
  const RATING = document.querySelectorAll(".rating .stars");

  for (let i = 0; i < RATING.length; i++) {
    const ratingArrotondato = Math.round(prodotti[i].rating);

    if (ratingArrotondato === 5) {
      RATING[i].textContent = "★★★★★";
    } else if (ratingArrotondato === 4) {
      RATING[i].textContent = "★★★★☆";
    } else if (ratingArrotondato === 3) {
      RATING[i].textContent = "★★★☆☆";
    } else if (ratingArrotondato === 2) {
      RATING[i].textContent = "★★☆☆☆";
    } else if (ratingArrotondato === 1) {
      RATING[i].textContent = "★☆☆☆☆";
    } else {
      RATING[i].textContent = "☆☆☆☆☆";
    }
  }
}

// MEDIA RATING

function showMediaRating() {
  const medium = document.querySelectorAll(".rating .medium");

  for (let i = 0; i < medium.length; i++) {
    medium[i].innerHTML = `(${prodotti[i].rating})`;
  }
}

// PREZZO

function showPrice() {
  const price = document.querySelectorAll(".price");
  for (let i = 0; i < price.length; i++) {
    price[i].innerHTML = `€ ${prodotti[i].prezzo}`;
  }
}

// DISPONIBILE

function showAvailability() {
  const price = document.querySelectorAll(".price");
  const buttons = document.querySelectorAll(".add-cart");

  for (let i = 0; i < price.length; i++) {
    switch (prodotti[i].disponibile) {
      case false:
        price[i].textContent = "Non disponibile";
        buttons[i].style.visibility = "hidden";
        break;

      default:
        break;
    }
  }
}

// EXEC

generaCard();
