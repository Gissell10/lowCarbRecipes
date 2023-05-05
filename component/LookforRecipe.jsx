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
      "X-RapidAPI-Key": "vnajb;jdbjap'ojbfpsj;lvknsjnbkjvcn",
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(url, options);
    const recipesData = await res.json();
    setRecipes(recipesData);
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Low Carb Recipes
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-size-small"
          label="Recipe name"
          size="small"
          value={query}
          placeholder="chicken soup"
          autoFocus
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
      {recipes && recipes.length > 0 && <Recipesrespond recipes={recipes} />}
    </Container>
  );
}
