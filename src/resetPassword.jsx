import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from URL
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      console.log('No token found. Redirecting to forgot password page.');
      navigate('/forgot-password');
    } else {
      console.log('Token found:', token);
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost/php-practice/majorProjectBackend/resetPassword.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setTimeout(() => navigate('/login'), 3000); // Redirect after success
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/contact.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
      {token ? (
        <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0px 4px 15px rgba(0,0,0,0.2)', width: '450px' }}>
           <h2 
          style={{ 
            color: "black", 
            fontSize: "26px", 
            fontWeight: "bold", 
            marginBottom: "15px" 
          }}
        >
          Reset Password
        </h2>
          {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
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
                 Reset
               </motion.button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  );
};

export default ResetPassword;
