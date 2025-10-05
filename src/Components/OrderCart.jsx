import React, { useState } from "react";
import { TrackOrder } from "./TrackOrder";
// import "../App.css";

export const OrderCart = ({ cart, items, onAdd, onRemove }) => {

  const [showTracker, setShowTracker] = useState(false);

  const cartItems = items.filter((item) => cart[item.id]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id],
    0
  );

  const handleOrder = () => {
    setOrderPlaced(true);
    // setShowTracker(true);
  };

  return (
    <div className="order-cart">
      <h2>Your Order</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> — ₹{item.price} × {cart[item.id]} = ₹{item.price * cart[item.id]}
                <div>
                  <button onClick={() => onAdd(item.id)}>➕</button>
                  <button onClick={() => onRemove(item.id)}>➖</button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={handleOrder}>Place Order</button>

          {orderPlaced && (
            <div className="payment-section">
              <h4>Select Payment Method:</h4>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">-- Choose --</option>
                <option value="UPI">UPI</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Credit/Debit Card">Credit/Debit Card</option>
              </select>

              {paymentMethod && (
                <div className="bill-summary">
                  <h4>🧾 Bill Summary</h4>
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id}>
                        {item.name} × {cart[item.id]} = ₹{item.price * cart[item.id]}
                      </li>
                    ))}
                  </ul>
                  <strong>Grand Total: ₹{totalPrice}</strong>
                  <p>Payment Method: <strong>{paymentMethod}</strong></p>
                  <p>✅ Order Confirmed!</p>
                </div>
              )}
            </div>
          )}
        </>
      )}



        <div className={`track-order-section ${paymentMethod === "UPI"|| paymentMethod === "Cash on Delivery" || paymentMethod === "Credit/Debit Card" ? "visible" : ""}`}>
          <button onClick={() => setShowTracker(true)}>Track Order</button>
          {showTracker  && <TrackOrder 
            cartItems={cartItems}
            totalPrice={totalPrice}
            onClose={() => setShowTracker(false)} /> 
          }
        </div>
      
      </div>
  );
};