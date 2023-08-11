import * as React from "react";
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardActionArea,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export default function Recipesrespond({ recipes }) {
  console.log(recipes);
  return (
    <div class="album py-5 bg-body-tertiary">
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
          Popular Recipes
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
                <CardMedia
                  component="img"
                  height="200px"
                  image={recipe.image}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.name}
                </Typography>
                <Typography variant="subtitle2">
                  cooking time: {`${recipe.cookTime} min`}
                </Typography>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Look at the recipe</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ maxHeight: 200, overflow: "auto" }}
                  >
                    <Typography variant="body2" color="secudary">
                      {recipe.steps}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
