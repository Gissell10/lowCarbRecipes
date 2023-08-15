import { TextField } from "@mui/material";
import { useState } from "react";

export default function LookforRecipe({ onSubmit }) {
  const [query, setQuery] = useState(" ");
  return (
    <section className="py-5 text-center container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(query);
        }}
        align="center"
      >
        <TextField
          className="my-2"
          id="outlined-size-small"
          label="Let's cooking"
          size="small"
          value={query}
          placeholder="chicken soup"
          autoFocus
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          variant="outlined"
          type="submit"
          className="btn btn-outline-secondary my-2"
        >
          Search
        </button>
      </form>
    </section>
  );
}
