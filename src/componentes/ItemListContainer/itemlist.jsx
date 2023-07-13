import { useEffect, useState } from "react";
import { getProducts } from "../../../mock/data";

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <div>
        <h3>Vehiculos</h3>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Descripción: {product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemList;
