import "../api";
import { loadGenres } from "../api";
import "../elements/genre-item";

const genreList = document.querySelector(".genres");

export const displayGenreList = async () => {
  genreList.innerHTML = "";

  const genres = await loadGenres();

  genres.forEach((genre) => {
    const genreItem = document.createElement("genre-item");
    genreItem.setAttribute("img_url", genre.thumbnail_url);
    genreItem.setAttribute("title", genre.title);
    genreItem.setAttribute("count", genre.count);
    genreList.appendChild(genreItem);
  });
};
