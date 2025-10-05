import React from "react";
import { useState } from 'react';
import {SearchResults }from "./SearchResults";


import "../App.css";

export const Menuitems = ({ item, cart, onAddToCart,onRemoveFromCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = item.filter(filteritem =>
    filteritem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (

    <>  

    <input
      type="text"
      placeholder="Search food..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />


        <div
      style={{
        maxHeight: "auto", // or any value you prefer
        overflowY: "auto",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        marginTop: "20px",
      }}
    >    {searchTerm && (
            <SearchResults results={filteredItems} />
        )}</div>
    
   





    <ul>
      {item.map((foodItem) => (
        <li key={foodItem.id}>
          <h3>{foodItem.name}</h3>
          <p>{foodItem.description}</p>
          <p>Price: ₹{foodItem.price}</p>
          <p>Category: {foodItem.category}</p>
          <p>Tags: {foodItem.tags.join(", ")}</p>
          <img src={foodItem.image} alt={foodItem.name} />

           <button onClick={() => onAddToCart(foodItem.id)}>
            ➕  
          </button>
          <button onClick={() => onRemoveFromCart(foodItem.id)} >
            ➖
          </button>{cart[foodItem.id] > 0 && <span> {cart[foodItem.id]} in cart</span>}
        </li>
      ))}
    </ul>



    </>
  );
};
