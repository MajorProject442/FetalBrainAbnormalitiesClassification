import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    Cookies.set("user",name);

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost/php-practice/majorProjectBackend/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Signup Successful! Please log in.");
        navigate("/login");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/login.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div 
        style={{
          marginTop:"10px",
          textAlign: "center",
          backgroundColor: "white",
          padding: "30px", // Increased padding
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
          Create an Account
        </h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "white",
              color: "black",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
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
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "white",
              color: "black",
            }}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
      Sign up
    </motion.button>
        </form>

        {message && <p style={{ color: "#FF6347", marginTop: "10px" }}>{message}</p>}

        <p 
          style={{
            color: "black",
            marginTop: "15px",
            fontSize: "16px",
          }}
        >
          Already have an account?  
          <span 
            style={{ color: "#000080", cursor: "pointer", fontWeight: "bold" }} 
            onClick={() => navigate("/login")}
          >
            {" "}Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;