import React from "react";
import { TrackOrder } from "./TrackOrder";
import { useNavigate } from "react-router-dom";
import heroImage from "./Hero.jpg";
import "../App.css";

export const Home = () => {
  const [showTracker, setShowTracker] = React.useState(false);

  const navigate = useNavigate();

    const featuredItems = [
        { name: "Paneer Tikka",     image: "https://ts2.mm.bing.net/th?id=OIP.sXZi2Y3OP4lODLbCw8ydHQHaLO&pid=15.1",
        },
        { name: "Butter Naan",     image: "https://ts4.mm.bing.net/th?id=OIP._08aGu4NwiHITQEfep1B2wHaLO&pid=15.1",
        },
        { name: "Lassi",         image: "https://ts4.mm.bing.net/th?id=OIP.m4VjZJmSxk2by1kvum2xzQHaLO&pid=15.1",
        },
        ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img className="hero-img" src={heroImage} alt="Delicious Food" />
        <h2 className="hero-text">Order Now & Savor the Taste!</h2>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner">
        🎉 Use code <strong>DABHA10</strong> for 10% off your first order!
      </div>

      {/* Category Links */}
      <div className="category-links">
        <button onClick={() => navigate("/menu?filter=veg")}>🥗 Veg Specials</button>
        <button onClick={() => navigate("/menu?filter=spicy")}>🌶️ Spicy Picks</button>
        <button onClick={() => navigate("/menu")}>🍽️ Full Menu</button>
      </div>

      {/* Featured Dishes */}
      <div className="featured-section">
        <h3>🔥 Featured Dishes</h3>
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <div key={index} className="featured-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h3>❤️ What Our Customers Say</h3>
        <blockquote>"Best butter naan in town!" – Priya</blockquote>
        <blockquote>"Fast delivery and great taste!" – Aman</blockquote>
      </div>

      {/* How It Works */}
      <div className="how-it-works">
        <h3>📦 How It Works</h3>
        <ol>
          <li>Browse the menu</li>
          <li>Add items to cart</li>
          <li>Choose payment method</li>
          <li>Track your order</li>
        </ol>
      </div>

      {/* CTA Buttons */}
      <div className="cta-buttons">
        <button onClick={() => navigate("/menu")}>Explore Menu</button>
        {/* <button onClick={() => navigate("/trackorder")}>Track Order</button> */}
        {/* <button onClick={() => setShowTracker(true)}>Track Order</button> */}
      </div>

      {/* {showTracker && <TrackOrder onClose={() => setShowTracker(false)} />} */}
    </div>
  );
};