import { useState } from "react";
import Recipesrespond from "./Recipesrespond";
import LookforRecipe from "./LookforRecipe";
import Hero from "./Hero";

export default function Searchpages() {
  const [recipes, setRecipes] = useState([]);

  const url = `https://low-carb-recipes.p.rapidapi.com/search?`;
  const headers = {
    "X-RapidAPI-Key": "0133a1c97cmsh1c643f36665c260p1bcc98jsnb87f73ef9c10",
    "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
  };
  async function handleSubmit(query) {
    try {
      const res = await fetch(`${url}name=${query}`, {
        method: "GET",
        headers,
      });
      const recipesData = await res.json();
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
