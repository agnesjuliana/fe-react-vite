import React from "react";

const ProductCard = (props) => {
    const { title, brand, category, thumbnail, description } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
