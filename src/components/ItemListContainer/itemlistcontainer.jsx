// ItemListContainer.js
import React from "react";
import ItemList from "../ItemList/itemlist";

function ItemListContainer({ products }) {

  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
}

export default ItemListContainer;



