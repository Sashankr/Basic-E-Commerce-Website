import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from './ProductComponent';
import {fetchProducts} from '../redux/actions/productActions';
import { useDispatch,useSelector } from "react-redux";

const ProductListing = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  return (
    <div className="columns is-multiline is-mobile">
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
