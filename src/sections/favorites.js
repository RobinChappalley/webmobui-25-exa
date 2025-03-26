import "../lib/local-storage";
import { getItems, getItem, removeItem, setItem } from "../lib/local-storage";

const favoritesListe = document.querySelector(".genres");
const favoritesListeTitle = document.querySelector("#section-genres h4");

export const displayFavoritesGenres = () => {
  const genres = getItems();
  favoritesListe.innerHTML = "";
  favoritesListeTitle.innerHTML = `Likes (${getItems().length})`;
  genres.forEach((genre) => {
    const genreItem = document.createElement("genre-item");
    genreItem.setAttribute("img_url", genre.thumbnail_url);
    genreItem.setAttribute("title", genre.title);
    genreItem.setAttribute("count", genre.count);
    genreItem.setAttribute("href", `genres-${genre.id}`);
    genreItem.setAttribute("favorite", !!getItem(genre.id));

    genreItem.addEventListener("favorite_click", () => {
      if (getItem(genre.id)) {
        removeItem(genre.id);
        favoritesListe.removeChild(genreItem);
      } else {
        setItem(genre.id, genre);
      }
      genreItem.setAttribute("favorite", !!getItem(genre.id));
    });
    favoritesListe.appendChild(genreItem);
  });
};
