export default function Recipy({ recipes }) {
  //console.log(recipes);
  return (
    <section>
      <div>
        {/* <img
          src={recipe.image}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
        /> */}
        <p>this is the recipe name {recipes.name}</p>
      </div>
    </section>
  );
}
