const favoriteClick = new CustomEvent("favorite_click");

class GenreItem extends HTMLElement {
  static observedAttribute;
  // Appelé lorsque que l'on insert l'élément dans le DOM, typiquement au moment de:
  // artistList.appendChild(newElement)
  static observedAttributes = ["favorite"];
  attributeChangedCallback() {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    console.log(this.getAttribute("favorite"));
    
    const icon =
      this.getAttribute("favorite") == "true" ? "thumb_up" : "thumb_up_off_alt";
    this.innerHTML = `
    <a href="#${this.getAttribute("href")}" class="genre-card">
       <div class="card__buttons">
         <button type="button" class="icon-button like-button">
           <span class="material-icons">${icon}</span>
         </button>
       </div>
       <img src=${this.getAttribute("img_url")} class="card__thumbnail" />
       <div class="card__title">${this.getAttribute("title")}</div>
       <div class="card__count">${this.getAttribute("count")} recettes</div>
     </a>
 `;
    this.querySelector(".like-button").addEventListener("click", (e) => {
      e.preventDefault()
      this.dispatchEvent(favoriteClick);
    });
  }
}
// Déclare le tag du custom element et la classe à utiliser pour le créer dans le DOM
// Pas besoin d'exporter, juste d'être appelé une fois
customElements.define("genre-item", GenreItem);
