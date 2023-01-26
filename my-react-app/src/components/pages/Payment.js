import React from "react"
import "./Payment.css"
import { useCallback } from "react";
import useRazorpay from "react-razorpay";


import axios from "axios";

function App() {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }


        const options = {
            key: "rzp_test_0LPQOEgOMMO0Rp", // Enter the Key ID generated from the Dashboard
            amount: "200",
            currency: "INR",
            name: "Rajneesh Kushwaha",
            description: "Test Transaction",
            "handler":function (response)
            {
                alert("Your Transaction id is : "+ response.razorpay_payment_id);
                alert("payment successful");
                
            },
            prefill: {
                name: "Rajneesh Kushwaha",
                email: "rajneeshupsc32@gmail.com",
                contact: "9301175121",
            },
            notes: {
                address: "MANIT BHOPAL DEAN",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        
    }

    return (
        <div className="App">
            <header className="App-header">
                <img  className="App-logo" alt="logo" />
                <p>BOOK MANIT HOSTEL ROOMS NOW</p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹5000
                </button>
            </header>
        </div>
    );
}

export default App;
