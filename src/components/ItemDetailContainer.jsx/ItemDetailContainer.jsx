import { useState, useEffect } from "react";
import { getProducts } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/loading";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      getProducts()
      .then((res) => setProduct(res))
      .catch((error) => console.log(error))
    }, []);
  
    return (
      <>
      {product.length === 0 ? (
        <Loading/>
      ) : (
        product.map((product) => <ItemDetail key={product.id} product={product} />)
      )}
      </>
    );
}

export default ItemDetailContainer