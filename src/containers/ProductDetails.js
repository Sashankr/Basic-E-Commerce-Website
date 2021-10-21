import React, { useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  console.log(productId);

  const product = useSelector((state) => state.product);

  const getProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") getProductDetails();

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
          <div class="tag is-primary category">{category}</div>
          <button class="button is-link mt-5">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
