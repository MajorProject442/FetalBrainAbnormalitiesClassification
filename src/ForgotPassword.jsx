
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Fix: Define state for message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/php-practice/majorProjectBackend/forgot_password.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => null);

      if (data) {
        setMessage(data.message);
      } else {
        setMessage("Invalid response from server.");
      }
    } catch (error) {
      console.error("Forgot Password Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/login.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
   
    
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(63, 59, 59, 0.29)", // Soft glow
          width: "450px",
        }}
      >
        <h2 style={{ color: "black", fontSize: "26px", fontWeight: "bold", marginBottom: "15px" }}>
          Forget Password
        </h2>

        {!email && <p style={{ color: "black", fontSize: "14px", marginBottom: "15px" }}>
          Enter your email to receive a password reset link.
        </p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "white",
              color: "black",
            }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#000080" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
             
            }}
          >
            Send Reset Link
          </motion.button>
        </form>

        {message && (
          <p style={{ color: "red", marginTop: "15px" }}>
            {message}
          </p>
        )}

        <p
          style={{ color: "#000080", marginTop: "15px", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Back to Login
        </p>
      </div>
    </div>
    
  );
};

export default ForgotPassword;
