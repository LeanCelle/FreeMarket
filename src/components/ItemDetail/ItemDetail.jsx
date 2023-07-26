import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { carrito } from "../../../mock/data";

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    // Busco el producto que coincida con el ID en product
    if (product.id === id) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
  }, [id, product]);

  if (!selectedProduct) {
    return null;
  }

  // Agrego producto al carrito
  function agregarAlCarrito() {
    const productoExistente = carrito.find((item) => item.id === selectedProduct.id);

    if (productoExistente) {

      productoExistente.cantidad++;
    } else {

      const producto = { ...selectedProduct, cantidad: 1 };
      carrito.push(producto);
    }
  }

  const { img, name, description, price, stock } = selectedProduct;
  const lines = description.split("\n");
  return (
    <>
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
          <ItemCount initial={1} stock={stock} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
      <h4 className="titleDescription">Descripción</h4>
      {lines.map((line, index) => (
        <p className="detailDescription" key={index}>
          {line}
        </p>
      ))}
    </>
  );
};

export default ItemDetail;



