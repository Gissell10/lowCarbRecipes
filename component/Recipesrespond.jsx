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
  ExpandMoreIcon,
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
              <Typography gutterBottom variant="h5" component="div">
                {recipe.name}
              </Typography>
              <Typography variant="subtitle2">
                cooking time: {recipe.cookTime}
              </Typography>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Look at the recipe</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
  );
}
