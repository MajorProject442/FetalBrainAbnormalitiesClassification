
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
  e.preventDefault();

    try {
      const response = await fetch("http://localhost/php-practice/majorProjectBackend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        Cookies.set("email", email); 
        
        navigate("/home"); // Redirect to home/dashboard
      } else {
        alert(data.message); // Show error message from backend
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/login.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div 
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "50px", // Increased padding
          borderRadius: "12px",
          boxShadow: "0px 6px 20px rgba(63, 59, 59, 0.29)",
          width: "450px", // Increased width
        }}
      >
        <h2 
          style={{ 
            color: "black", 
            fontSize: "30px", // Increased font size
            fontWeight: "bold", 
            marginBottom: "20px" 
          }}
        >
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px", // Increased padding
              marginBottom: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px", // Increased font size
              backgroundColor: "white",
              color: "black",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px", // Increased padding
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px", // Increased font size
              backgroundColor: "white",
              color: "black",
            }}
          />

<motion.button 
      type="submit"
      whileHover={{ scale: 1.05, backgroundColor: "#007C91" }}
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
      Login
    </motion.button>
        </form>

        <p 
          style={{
            color: "#000080",
            marginTop: "20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/forgotpassword")}
        >
          Forgot Password?
        </p>

        <p 
          style={{
            color: "black",
            marginTop: "12px",
            fontSize: "16px",
          }}
        >
          Don't have an account?  
          <span 
            style={{ color: "#000080", cursor: "pointer", fontWeight: "bold" }} 
            onClick={() => navigate("/")}
          >
            {" "}Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
