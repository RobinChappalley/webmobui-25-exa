import { loadInspirationRecipes } from "../api";

const inspiImage = document.querySelector(".card--recipe-details img");
const inspiTitle = document.querySelector(".card--recipe-details h4");
const inspiDetails = document.querySelector(".card--recipe-details p");
const nextButton = document.querySelector(".button--next");
const previousButton = document.querySelector(".button--previous");
const getRecipes = async () => {
  return await loadInspirationRecipes();
};

let currentRecipe = 0;
const recipes = getRecipes().then((response) => response.json);

// const recipesTable = loadInspirationRecipes.then();
// console.table(await getRecipes());
// console.table(recipes);

export const displayRecipe = async () => {
  inspiImage = await recipes[currentRecipe].preview_url;
  inspiTitle = await recipes[currentRecipe].title;
  inspiDetails = await recipes[currentRecipe].inspiDetails;
};

nextButton.addEventListener("click", () => {
  currentRecipe++;
});

previousButton.addEventListener("click", () => {
  currentRecipe--;
});
