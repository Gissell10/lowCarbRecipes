import LookforRecipe from "./LookforRecipe";

export default function Hero() {
  return (
    <section className="py-5 text-center container">
      <div className="px-4 pt-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/icn_cooking.svg"
          alt="icon"
        ></img>
        <h1 className="display-5 fw-bold">Recipy </h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">
            Welcome to Heatly, a Low Carb Recipies app
          </p>
          <LookforRecipe></LookforRecipe>
        </div>
      </div>
    </section>
  );
}
