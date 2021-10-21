import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions';
import { useDispatch,useSelector } from "react-redux";

const ProductListing = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state)

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
      // console.log(response.data);
      dispatch(setProducts(response.data))
  };
  console.log('Products',products);
  useEffect(()=>{
    fetchProducts();
  },[])
  
  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
