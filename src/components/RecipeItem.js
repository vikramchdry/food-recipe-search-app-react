import React from "react";

const RecipeItem = props => {
    const { name, image, ingredientLines } = props;
    return (
        <div className="card py-2 text-center">
            <img src={image} className="img-fluid w-50 mx-auto rounded-circle" alt="" />
            <div className="card-body">
                <h5>{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                {ingredientLines.map((ingredient, i) => (
                    <li className="list-group-item" key={i}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeItem;