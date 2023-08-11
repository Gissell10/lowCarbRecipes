import * as React from "react";
import { useState } from "react";
import { Typography, Container, TextField, Button } from "@mui/material";
import Recipesrespond from "./Recipesrespond";

export default function LookforRecipe() {
  const [query, setQuery] = useState(" ");
  const [recipes, setRecipes] = useState([]);

  const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0133a1c97cmsh1c643f36665c260p1bcc98jsnb87f73ef9c10",
      "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(url, options);
    const recipesData = await res.json();
    setRecipes(recipesData);
  }

  return (
    <section class="py-5 text-center container">
      <form onSubmit={handleSubmit} align="center">
        <TextField
          class="my-2"
          id="outlined-size-small"
          label="Let's cooking"
          size="small"
          value={query}
          placeholder="chicken soup"
          autoFocus
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="outlined"
          type="submit"
          class="btn btn-outline-secondary my-2"
        >
          Search
        </Button>
      </form>
      {recipes && recipes.length > 0 && <Recipesrespond recipes={recipes} />}
    </section>
  );
}
