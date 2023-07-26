import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/itemlistcontainer";
import { getProducts } from "../../mock/data";

function DeportesyFitness() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      // Filtrar los productos según la categoría "Vehiculos"
      const filteredProducts = res.filter((product) => product.category === "Deportes y Fitness");
      setProducts(filteredProducts);
    });
  }, []);

  return (
    <>
    <h1 className="h1Pages">Deportes y Fitness</h1>
    <ItemListContainer products={products} />
    </>
  );
}

export default DeportesyFitness;