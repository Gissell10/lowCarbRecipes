import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Recipy from "../../component/Recipy";

export default function RecipeDetails() {
  const router = useRouter();

  const [recipe, setRecipe] = useState();

  const url = `https://low-carb-recipes.p.rapidapi.com/recipes/`;
  const headers = {
    "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RECIPE_API_KEY}`,
    "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_RECIPE_APP_AUTH_DOMAIN}`,
  };

  useEffect(() => {
    (async () => {
      if (!router.query.recipeId) return;
      const response = await fetch(`${url}${router.query.recipeId}`, {
        method: "GET",
        headers,
      });
      const recipe = await response.json();
      setRecipe(recipe);
    })();
  }, [router.query.recipeId]);
  return recipe ? <Recipy recipe={recipe} /> : null;
}
