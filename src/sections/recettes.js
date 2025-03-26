import { loadRecipes } from "../api";
import "../elements/recette-item";

const recipeList = document.querySelector(".recipes");
const recipeListTitle = document.querySelector("#section-recipes h4");

export const displayReciepesList = async (id) => {
  recipeList.innerHTML = "";
  const recipes = await loadRecipes(id);

  recipeListTitle.innerHTML = `Genres de recettes > ${recipes[0].genre.title} `;
  //   console.table(recipes)

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("recette-item");
    recipeItem.setAttribute("img_url", recipe.preview_url);
    recipeItem.setAttribute("name", recipe.name)
    recipeList.appendChild(recipeItem);
  });
};
