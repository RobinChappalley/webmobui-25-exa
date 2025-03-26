import { loadInspirationRecipes } from "../api";

const inspiImage = document.querySelector(".card--recipe-details img");
const inspiTitle = document.querySelector(".card--recipe-details h4");
const inspiDetails = document.querySelector(".card--recipe-details p");
const getRecipes = async () => {
  return await loadInspirationRecipes();
};

let currentRecipe = 0;
const recipes = getRecipes().then((response) => response.json);

// const recipesTable = loadInspirationRecipes.then();
// console.table(await getRecipes());
// console.table(recipes);

export const displayRecipe = () => {
//   inspiImage = recipes[currentRecipe].preview_url;
};
