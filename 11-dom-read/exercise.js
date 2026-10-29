
export function pageHeading() {
  return document.querySelector("h1").textContent.trim();
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  const cards = document.querySelectorAll(".card");

  return Array.from(cards).map(card =>
    card.querySelector("h3").textContent.trim()
  );
}

export function priceOf(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(card =>
    card.querySelector("h3").textContent.trim() === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent.trim();
}

export function soldOutNames() {
  const cards = document.querySelectorAll(".card.sold-out");

  return Array.from(cards).map(card =>
    card.querySelector("h3").textContent.trim()
  );
}
