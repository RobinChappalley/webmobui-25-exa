import { displaySection, activateLink } from "./helpers.js";
import "./sections/genres.js";
import "./sections/recettes.js";
import "./sections/inspiration.js";
import { displayGenreList } from "./sections/genres.js";
import { displayReciepesList } from "./sections/recettes.js";
import { displayRecipe } from "./sections/inspiration.js";
import { displayFavoritesGenres } from "./sections/favorites.js";

const routeur = () => {
  const hash = window.location.hash || "#genres";
  const hashs = hash.split("-");

  // Colorie le lien
  activateLink(hashs[0]);

  switch (hashs[0]) {
    case "#genres":
      if (hashs[1]) {
        displaySection("recipes");
        displayReciepesList(hashs[1]);
      } else {
        displaySection("genres");
        displayGenreList();
      }
      break;

    case "#inspiration":
      displaySection("inspiration");
      displayRecipe();

      break;

    case "#liked":
      displaySection("genres");
      displayFavoritesGenres()
      break;
  }
};

// On veut être averti des changements
window.addEventListener("hashchange", routeur);


navigator.serviceWorker.register('worker.js')
// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur();
