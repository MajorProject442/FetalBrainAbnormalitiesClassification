
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, User, LogOut, Info, Phone, HelpCircle, Upload } from "lucide-react";
import defaultProfilePic from "./assets/profile.png"
const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Retrieve stored user data
 
  const [user, setUser] = useState({
    username: Cookies.get("user"),
    email: Cookies.get("email"),
    profilePic: null  , // Load from localStorage
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("email");
    localStorage.removeItem("profilePic"); // Clear profile picture on logout
    setUser(null);
    setProfileOpen(false);
    navigate("/login");
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      localStorage.setItem("profilePic", imageUrl); // Save image URL in localStorage
      setUser((prev) => ({
        ...prev,
        profilePic: imageUrl,
      }));
    }
  };

  return (
  

    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/home.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            FetalScan
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/about" className="hover:underline flex items-center">
                <Info className="w-5 h-5 mr-1" /> About
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline flex items-center">
                <Phone className="w-5 h-5 mr-1" /> Contact Us
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:underline flex items-center">
                <HelpCircle className="w-5 h-5 mr-1" /> Help
              </Link>
            </li>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
              <span>Profile</span>
            </button>

            {profileOpen && user && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-lg p-4">
                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center">
                  <label htmlFor="profile-upload" className="cursor-pointer">
                    {user.profilePic ? (
                      <img src={user.profilePic} alt="Profile" className="w-16 h-16 rounded-full border" />
                    ) : (
                      <img src={defaultProfilePic} alt="Profile" className="w-16 h-16 rounded-full border" />
                      
                    )}
                  </label>
                  <input
                    id="profile-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfileUpload}
                    ref={fileInputRef}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 flex items-center text-blue-600 text-sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-1"  style={{color:"#000080"}}/> <span style={{color:"#000080"}}>Upload Photo</span>
                  </motion.button>
                </div>

                {/* User Details */}
                <div className="mt-3 text-center">
                  <p className="font-semibold">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                {/* Logout Button */}
                <button onClick={handleLogout} className="w-full text-left text-red-600 flex items-center mt-3 hover:bg-gray-100 p-2 rounded">
                  <LogOut className="w-5 h-5 mr-2" /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-white py-4 absolute top-14 left-0 w-full z-10">
          <ul className="text-center space-y-4">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center text-center px-4 pt-16">
        <div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#1E90FF" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white text-xl font-bold bg-blue-900 rounded-lg shadow-md transition duration-300"
            onClick={() => navigate("/deploy")}
          >
            Get Started
          </motion.button>
          <p className="text-gray-600 mt-4">
            Upload MRI scans and get instant analysis.
          </p>
        </div>
      </div>
    </div>
    
  );
};
export default HomePage;

