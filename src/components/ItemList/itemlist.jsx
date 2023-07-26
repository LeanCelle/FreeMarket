// ItemList.js
import React from "react";
import Item from "../Item/item";
import Loading from "../Loading/loading";

function ItemList({ products }) {

  return (
    <>
    <div>
      {products.length === 0 ? (
        <Loading/>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
    </>
  );
}

export default ItemList;









