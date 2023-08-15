import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function RecipeDetails() {
  const router = useRouter();
  const [recipe, setRecipe] = useState();

  const url = `https://low-carb-recipes.p.rapidapi.com/search?`;
  const headers = {
    "X-RapidAPI-Key": `${process.env.RECIPE_API_KEY}`,
    "X-RapidAPI-Host": `${process.env.RECIPE_APP_AUTH_DOMAIN}`,
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://low-carb-recipes.p.rapidapi.com/recipes/"
      );
      const data = await response.json();
      setData(data);
    })();
  }, []);
  return data ? <pre>Recipe id: {router.query.recipeId}</pre> : null;
}
