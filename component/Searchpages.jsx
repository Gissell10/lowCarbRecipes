import { useState } from "react";
import Recipesrespond from "./Recipesrespond";
import LookforRecipe from "./LookforRecipe";

export default function Searchpages() {
  const [query, setQuery] = useState(" ");
  const [recipes, setRecipes] = useState([]);

  const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${query}`;
  const headers = {
    "X-RapidAPI-Key": "0133a1c97cmsh1c643f36665c260p1bcc98jsnb87f73ef9c10",
    "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
  };
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(url, { method: "GET", headers });
      const recipesData = await res.json();
      seRecipes(recipesData);
    } catch (error) {
      console.error("error feching recipes:", error);
    }
  }

  return (
    <>
      <LookforRecipe
        query={query}
        setQuery={setQuery}
        onSubmit={handleSubmit}
      />

      {recipes && recipes.length > 0 && <Recipesrespond recipes={recipes} />}
    </>
  );
}
