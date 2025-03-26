import { loadGenres } from "../api";
import "../elements/genre-item";

const genreList = document.querySelector(".genres");
const listTitle = document.querySelector("#section-genres h4");

export const displayGenreList = async () => {
  genreList.innerHTML = "";
  const genres = await loadGenres();
  listTitle.innerHTML = `Genres de recettes (${genres.length})`;

  genres.forEach((genre) => {
    const genreItem = document.createElement("genre-item");
    genreItem.setAttribute("img_url", genre.thumbnail_url);
    genreItem.setAttribute("title", genre.title);
    genreItem.setAttribute("count", genre.count);
    genreItem.setAttribute("href", `genres-${genre.id}`)
    genreList.appendChild(genreItem);
  });
};
