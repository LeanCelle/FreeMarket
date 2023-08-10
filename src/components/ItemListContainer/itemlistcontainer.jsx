import React from "react";
import ItemList from "../ItemList/itemlist";

function ItemListContainer({ products, loading }) {

  return (
    <div>
      <ItemList products={products} loading={loading}/>
    </div>
  );
}

export default ItemListContainer;



