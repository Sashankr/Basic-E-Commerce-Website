import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state);
  const renderList = products.allProducts.products.map((product, index) => {
    const { id, title, image, price, category } = product;

    return (
      <div key={index} className="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <span class="tag is-primary subtitle is-6 mt-3">{category}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
