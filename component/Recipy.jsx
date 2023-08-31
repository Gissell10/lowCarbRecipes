export default function Recipy({ recipe }) {
  console.log(recipe);
  return (
    <section>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ objectFit: "cover", width: "600px", height: "600px" }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50px, 50px, 50px",
          columnGap: "30px",
          justifyContent: "center",
        }}
      >
        <span>Ingredients</span>
        <span>Briefly</span>
      </div>
      <div style={{ width: "100px" }}>
        <p>nnnnnnn</p>
      </div>
    </section>
  );
}
