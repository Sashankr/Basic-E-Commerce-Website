import React from "react";

const ProductComponent = () => {


  return (
    <div style={{marginTop: '5rem',padding:'2rem 5rem'}} className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div style={{height : '150px'}} className="image"></div>
          <div className="content">
            <div className="header">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
