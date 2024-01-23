'use client'
import React, { useState } from 'react';

const AddToCart = () => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) {
      console.log("removed from cart");
    } else {
      console.log("added to cart");
    }
    setIsAdded(!isAdded); // Toggle the state
  };

  return (
    <div>
      <button onClick={handleAddToCart}>
        {isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
