class RecetteItem extends HTMLElement {
    // Appelé lorsque que l'on insert l'élément dans le DOM, typiquement au moment de:
    // artistList.appendChild(newElement)
    connectedCallback() {
      this.innerHTML = `
          <div>
            <img class="recipes__elem__preview" src=${this.getAttribute("img_url")}" />
            <div class="recipes__elem__name">${this.getAttribute("name")}</div>
          </div>
        </div>
        `;
    }
  }
  
  // Déclare le tag du custom element et la classe à utiliser pour le créer dans le DOM
  // Pas besoin d'exporter, juste d'être appelé une fois
  customElements.define("recette-item", RecetteItem);
  