import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  removeSelectedProducts,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  const product = useSelector((state) => state.product);
  
  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));

    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  const { category, description, image, price, rating, title } = product;

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="product-detail-wrapper">
        <img
          loading="lazy"
          className="product-detail-image"
          src={image}
          alt={title}
        />
        <div className="product-additional-details">
          <h3 className="subtitle">{description}</h3>
          <p className="price is-size-3	is-family-monospace	">Price: $ {price}</p>
          <h2>Reviews</h2>
          <p className="rating">
            {rating?.rate} / 5 &#40;{rating?.count}&#41;{" "}
          </p>
          <div className="tag is-primary category">{category}</div>
          <button className="button is-link mt-5">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
