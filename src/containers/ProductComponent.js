import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const product = useSelector((state) => state.allProducts.products);
  const { id, title } = product[0];

  return (
    <div style={{marginTop: '5rem',padding:'2rem 5rem'}} className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div style={{height : '150px'}} className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
