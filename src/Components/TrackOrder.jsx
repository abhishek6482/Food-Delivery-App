import React, { useState,useEffect } from "react";
import "../App.css";
export const TrackOrder = ({ onClose,cartItems, totalPrice}) => {
    const agent ={
        name: "Ravi ",
        phone: "XXXXXXXXX",
        vehicle: "Bike - XX-01-AB-1234"
    }

    const [status, setStatus] = useState("Preparing");
    const [eta, setEta] = useState(30); // in minutes

    useEffect(() => {
            const flow = ["Preparing", "Out for Delivery", "Delivered"];
            let index = 0;
            const interval = setInterval(() => {
            if (index < flow.length - 1) {
                index++;
                setStatus(flow[index]);
                setEta((prev) => Math.max(prev - 10, 0));
            } else {
                clearInterval(interval);
            }

            }, 10000);

            return () => clearInterval(interval);
        }, []);

    return (
        <div className="track-order-panel">
            <button className="close-button" onClick={onClose}>X</button>
            <h2>Track Your Order Panel</h2>
            <p><strong>Status:</strong> {status}</p>



            <div className="progress-bar">
                <div className={`step ${status === "Preparing" ? "active" : ""}`}>Preparing</div>
                <div className={`step ${status === "Out for Delivery" ? "active" : ""}`}>Out for Delivery</div>
                <div className={`step ${status === "Delivered" ? "active" : ""}`}>Delivered</div>
            </div>

            {status !== "Delivered" && <p><strong>Estimated Time of Arrival:</strong> {eta} mins</p>}

            {status === "Out for Delivery" && (
                <div className="agent-info">
                    <h3>Delivery Agent Info</h3>
                    <p><strong>Name:</strong> {agent.name}</p>
                    <p><strong>Phone:</strong> {agent.phone}</p>
                    <p><strong>Vehicle:</strong> {agent.vehicle}</p>
                </div>
            )}

            {status === "Delivered" && (
                <p style={{ color: "green", fontWeight: "bold" }}>✅ Your order has been delivered!</p>
            )}




                    <ul>
                        {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name}  = ₹{item.price}
                        </li>
                        ))}

                    </ul>

            <strong>Grand Total: ₹{totalPrice}</strong>


        </div>
    );
};