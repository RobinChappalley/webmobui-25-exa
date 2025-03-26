// URL de base du serveur
const BASE_URL = "https://webmobui-25-exa-backend-dbb26fcb95b3.herokuapp.com";

const loadJson = (url) => fetch(url).then((response) => response.json());

const loadGenres = () => loadJson(`${BASE_URL}/api/genres`);

const loadRecipes = (id) => loadJson(`${BASE_URL}/api/genres/${id}/recipes`);

// const loadSongs = (id) => loadJson(`${BASE_URL}/api/artists/${id}/songs`)

// const loadSearch = (query) => loadJson(`${BASE_URL}/api/songs/search/${query}`)

export { loadGenres, loadRecipes };
