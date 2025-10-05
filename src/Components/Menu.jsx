import React from "react";
import { Data } from "./Data";
import { Menuitems } from "./Menuitems";
import { OrderCart } from "./OrderCart";
import "../App.css";

export const Menu = () => {
  const [showCart, setShowCart] = React.useState(false);

  const [item, setItem] = React.useState(Data);

  const [cart, setCart] = React.useState({}); // Track item quantities by ID

  const handleAddToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (id) => {
      setCart((prevCart) => {
        const newCart = { ...prevCart };
        if (newCart[id]) {
          newCart[id] -= 1;
          if (newCart[id] === 0) {
            delete newCart[id];
          }
        }
        console.log("Updated cart:", newCart);
        return newCart;
      });
    };

  return (
    <div className="menu-container">
      <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        🛒
        {Object.keys(cart).length > 0 && (
          <span className="cart-count">{Object.values(cart).reduce((a, b) => a + b, 0)}</span>
        )}
      </div>




    <div className="menu-item">
      <Menuitems item={item} cart={cart} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
    </div>


    {showCart && (
        <OrderCart
          cart={cart}
          items={item}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>

  );
};