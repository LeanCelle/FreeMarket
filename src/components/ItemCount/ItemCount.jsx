import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAddToCart }) => {
  const [count, setCount] = useState(initial);

  const reduce = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAddToCart(count);
    }
  };

  return (
    <>
      <div>
        <button className="btn btn-dark reduce" onClick={reduce}>-</button>
        <span className="btn">{count}</span>
        <button className="btn btn-dark add" onClick={add}>+</button>
      </div>
      <button className="btn btn-dark comprar" disabled={count === 0 || stock === 0} onClick={handleAddToCart}>Agregar</button>
    </>
  );
};

export default ItemCount;





