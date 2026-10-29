// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.



export function renderItems(list) {
  const container = document.querySelector("#list");
  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("li");
    card.classList.add("goods-item");
    card.textContent = `${item.name} - ${item.price} EGP`;

    container.append(card);
  });
}

export function matching() {
  return items.filter(item => item.category === "kitchen");
}

export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}

