export default function Recipy({ recipe }) {
  console.log(recipe);
  return (
    <section>
      <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </section>
  );
}
