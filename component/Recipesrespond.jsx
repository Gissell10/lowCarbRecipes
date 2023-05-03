import * as React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

export default function Recipesrespond({ recipes }) {
  console.log(recipes);
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center">
        recipes related
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {recipes.map((recipe) => (
          <Card key={recipe.id} sx={{ maxWidth: "300px", margin: "10px" }}>
            <CardActionArea>
              <CardMedia component="img" height="200px" image={recipe.image} />
            </CardActionArea>
          </Card>
        ))}
      </div>
    </Container>
  );
}
