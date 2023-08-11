import LookforRecipe from "./LookforRecipe";

export default function Hero() {
  return (
    <section class="py-5 text-center container">
      <div class="px-4 pt-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="/icn_cooking.svg"
          alt="icon"
        ></img>
        <h1 class="display-5 fw-bold">Recipy </h1>
        <div class="col-lg-8 mx-auto">
          <p class="lead mb-4">Welcome to Heatly, a Low Carb Recipies app</p>
          <LookforRecipe></LookforRecipe>
        </div>
      </div>
    </section>
  );
}
