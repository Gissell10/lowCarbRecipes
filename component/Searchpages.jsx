import { useState } from "react";
import Recipesrespond from "./Recipesrespond";
import LookforRecipe from "./LookforRecipe";
import Hero from "./Hero";

export default function Searchpages() {
  const [recipes, setRecipes] = useState([]);

  const url = `https://low-carb-recipes.p.rapidapi.com/search?`;
  const headers = {
    "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RECIPE_API_KEY}`,
    "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_RECIPE_APP_AUTH_DOMAIN}`,
  };
  async function handleSubmit(query) {
    try {
      const response = await fetch(`${url}name=${query}`, {
        method: "GET",
        headers,
      });
      const recipesData = await response.json();
      setRecipes(recipesData);
    } catch (error) {
      console.error("error feching recipes:", error);
    }
  }

  return (
    <>
      <Hero />
      <LookforRecipe onSubmit={handleSubmit} />

      {recipes && recipes.length > 0 && <Recipesrespond recipes={recipes} />}
    </>
  );
}
