class GenreItem extends HTMLElement {
  // Appelé lorsque que l'on insert l'élément dans le DOM, typiquement au moment de:
  // artistList.appendChild(newElement)
  connectedCallback() {
    this.innerHTML = `
         <a href="#" class="genre-card">
            <div class="card__buttons">
              <button type="button" class="icon-button like-button">
                <span class="material-icons">thumb_up_off_alt</span>
              </button>
            </div>
            <img src=${this.getAttribute("img_url")} class="card__thumbnail" />
            <div class="card__title">${this.getAttribute("title")}</div>
            <div class="card__count">${this.getAttribute(
              "count"
            )} recettes</div>
          </a>
      `;
  }
}

// Déclare le tag du custom element et la classe à utiliser pour le créer dans le DOM
// Pas besoin d'exporter, juste d'être appelé une fois
customElements.define("genre-item", GenreItem);
