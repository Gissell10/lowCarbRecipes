import * as React from "react";

export default function Recipesrespond({ recipes }) {
  console.log(recipes);
  return (
    <div className="album py-5 body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {recipes.map((recipe) => (
            <div className="col" key={recipe.id}>
              <div className="card shadow-sm">
                <img
                  src={recipe.image}
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                />
                <div className="card-body">
                  <p className="card-text">{recipe.name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-body-secondary">
                      <img src="/chef-hat.png" alt="" width="30%" height="30" />
                      {`${recipe.cookTime}min`}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
