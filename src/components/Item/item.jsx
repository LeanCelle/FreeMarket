import { Link } from "react-router-dom";
import React from "react";

function Item({ product }) {
  const { id, img, name, price } = product;
  return (
    <>
    <hr className="hr"/>

    <div className="productItem">
      <div className="productItemOne">
        <img className="imgItem" src={img} alt={name} />
        </div>
      <div className="productItemTwo">
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
      </div>
      <div className="productItemThree">
        <Link to={`/producto/${id}`}><button className="verDetalle">Ver detalle</button></Link>
      </div>
    </div>



    </>
  );
}

export default Item;