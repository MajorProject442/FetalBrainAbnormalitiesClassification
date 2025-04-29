

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Help() {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/contact.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <motion.div
        className="bg-white py-4 px-6 rounded-lg shadow-xl max-w-lg text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold mb-2 text-blue-600">Help & Guide</h1>
        <p className="text-gray-600 mb-2">
          Welcome to our application for detecting fetal brain abnormalities using Deep Learning (ResNet50).
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-600">Navigation</h2>
        <p className="text-gray-600 mb-2">Use the navigation bar to access different sections:</p>
        <ul className="text-left text-gray-600 mb-2">
          <li><strong>Home:</strong> Overview and image of fetal brain abnormality.</li>
          <li><strong>About:</strong> Learn about fetal brain abnormalities and our AI model.</li>
          <li><strong>Contact:</strong> Meet the developers behind this project.</li>
          <li><strong>Login/Signup:</strong> Create an account or log in to upload images.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-600">How to Use</h2>
        <ul className="text-left text-gray-600 mb-2">
          <li>1. <strong>Sign up or Log in</strong> to access the prediction tool.</li>
          <li>2. <strong>Upload an ultrasound image</strong> of the fetal brain.</li>
          <li>3. The system will analyze the image using <strong>ResNet50</strong>.</li>
          <li>4. <strong>Receive a prediction</strong> indicating whether the fetus has a brain abnormality.</li>
          <li>5. View detailed <strong>analysis and visualization</strong> of the results.</li>
        </ul>

        <motion.button
          className="mt-4 w-full px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home")}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
