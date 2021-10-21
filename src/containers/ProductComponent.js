import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state);
  const renderList = products.allProducts.products.map((product, index) => {
    const { id, title, image, price, category } = product;

    return (
      <div key={index} className="column is-one-quarter">
        <Link to={`products/${id}`}>
          <div className="card">
            <div className="card-image">
              <figure className="">
                <img src={image} alt={title} />
              </figure>
            </div>
            <div className="">
              <div className="content">
                <div className="header mt-3">{title}</div>
                <div className="product-price-category">
                  <div className="meta price">$ {price}</div>
                  <div className="tag is-primary subtitle is-6 mt-3">
                    {category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
