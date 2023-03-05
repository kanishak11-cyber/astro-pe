import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import Hero from "./Hero";
import { useState } from "react";
import Footer from "./Footer";
import CryptoJS from "crypto-js";

export default function InstructionsComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a random order ID
    const orderId = Math.random().toString(36).substr(2, 9);

    // Generate a payment link using the crypto payment gateway
    const apiKey = "341c8933-eec6-4a3f-922b-4616f75d47c0"; // Replace with your actual API key
    const apiSecret = "api-secret"; // Replace with your actual API secret
    const nonce = Date.now().toString();
    const message = `orderId=${orderId}&amount=${amount}&nonce=${nonce}`;
    const signature = CryptoJS.HmacSHA256(message, apiSecret).toString(
      CryptoJS.enc.Hex
    );
    const paymentLink = `https://payment-gateway.com/api/v1/payments?apiKey=${apiKey}&orderId=${orderId}&amount=${amount}&nonce=${nonce}&signature=${signature}&cryptoAddress=${cryptoAddress}`;

    // Redirect the user to the payment page
    window.location.href = paymentLink;
  };
  const router = useRouter();
  const axios = require("axios");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.commerce.coinbase.com/invoices",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div
      className={`${styles.container} white-glassmorphism gradient-bg-welcome`}
    >
      {/* <Hero /> */}
      <h1>Generate Invoice</h1>
      <form className="flex flex-col gap-x-2 gap-y-4" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Name:
          <input
            className="bg-transparent border px-1 py-2 rounded-md border:from-pink-500 to-purple-700"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Email:
          <input
            className="bg-transparent border px-1 py-2 rounded-md border:from-pink-500 to-purple-700"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Amount:
          <input
            className="bg-transparent border px-1 py-2 rounded-md border:from-pink-500 to-purple-700"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Crypto address:
          <input
            className="bg-transparent border px-1 py-2 rounded-md border:from-pink-500 to-purple-700"
            type="text"
            value={cryptoAddress}
            onChange={(event) => setCryptoAddress(event.target.value)}
          />
        </label>
        <button className="eth-card border white-glassmorphism " type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
}
