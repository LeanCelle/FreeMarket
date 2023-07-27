// ItemList.js
import React from "react";
import Item from "../Item/item";
import Loading from "../Loading/loading";

function ItemList({ products, loading }) {

  return (
    <>
    <div>
      {loading ? (
        <Loading/>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
    </>
  );
}

export default ItemList;









