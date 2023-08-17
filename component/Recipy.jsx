export default function Recipy({ recipe }) {
  console.log(recipe);
  return (
    <section>
      <div>
        {/* <img
          src={recipe.image}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
        /> */}
        <p>{recipe.name}</p>
      </div>
    </section>
  );
}
