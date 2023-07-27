import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/itemlistcontainer";
import { getProducts } from "../mock/data";

const Categories = () => {
    
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
        getProducts().then((res) => {
          if(id) {
            const filteredProducts = res.filter((product) => product.category === id);
            setProducts(filteredProducts);
          } else {
            setProducts(res)
          }
        })

        .finally(() => setLoading(false))

      }, [id]);
      

  return (
    <>

    <h1 className="h1Pages">{id}</h1>

    <ItemListContainer products={products} loading={loading}/>

    </>
  )
}

export default Categories