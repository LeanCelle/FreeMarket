import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onClick }) => {
  const [count, setCount] = useState(initial);
  const reduce = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {

    onClick();
  };

  return (
    <>
      <div>
        <button className="btn btn-dark" onClick={reduce}>
          -
        </button>
        <span className="btn ">{count}</span>
        <button className="btn btn-dark" onClick={add}>
          +
        </button>
      </div>
      <button className="btn btn-dark" disabled={count === 0 || stock === 0} onClick={handleAddToCart}>Comprar</button>
    </>
  );
};

export default ItemCount;