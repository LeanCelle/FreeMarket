import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { GeneralContext } from '../../Context/Provider';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const { addItemToCart } = useContext(GeneralContext);

  
  useEffect(() => {
    // Busco el producto que coincida con el ID en product
    if (product.id === id) {
      setSelectedProduct(product);
    }
  }, [id, product]);

  if (!selectedProduct) {
    return null;
  }


  const { img, name, description, price, stock } = selectedProduct;
  const lines = description.split('\n');

  const handleAddToCart = (quantity) => {

    const productWithQuantity = { ...selectedProduct, cantidad: quantity };
    addItemToCart(productWithQuantity);
  };

  return (
    <>
    <div className="bodyDetailContainer">
    <div className="detailContainer">
        <div className="detailContainerOne">
          <img className="detailImg" src={img} alt={name} />
        </div>
        <div className="detailContainerTwo">
          <h3 className="detailName">{name}</h3>
          <p className="detailPrice">Precio: ${price}</p>
          <p className="detailStock">
            <em>Stock: {stock}</em>
          </p>
          <ItemCount initial={1} stock={stock} onAddToCart={handleAddToCart} />
        </div>
      </div>
      <h4 className="titleDescription">Descripción</h4>
      {lines.map((line, index) => (
        <p className="detailDescription" key={index}>
          {line}
        </p>
      ))}
    </div>
    </>
  );
};

export default ItemDetail;




