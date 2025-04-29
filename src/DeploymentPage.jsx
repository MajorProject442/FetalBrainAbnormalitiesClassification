


import { UploadCloud, Loader } from "lucide-react";
import axios from 'axios';
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import Cookies from 'js-cookie';



export default function DeploymentPage() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [probability, setProbability] = useState(0);
  const [animatedProbability, setAnimatedProbability] = useState(0);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file));
      setPrediction("");
      setProbability(0);
      setAnimatedProbability(0);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // expected [0, 1]
      setPrediction(res.data.predicted_classes);
      setProbability(res.data.probabilities);
      Cookies.set('abnormality_name',res.data.predicted_classes)
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start+1 >= probability) {
        clearInterval(interval);
      } else {
        start++;
        setAnimatedProbability(start);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [probability]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50" style={{ backgroundImage: 'url("/assets/brain bg_.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-6 border"  style={{width:"500px",marginLeft:"300px"}}>
        <h1 className="text-2xl font-bold text-center">Fetal Brain Abnormalities classification</h1>

        <div
          onClick={handleImageClick}
          className="cursor-pointer border-2 border-dashed border-gray-300 rounded-xl h-60 w-full overflow-hidden relative group"
        >
          {image ? (
            <img
              src={image}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500 h-full">
              <UploadCloud className="w-10 h-10" />
              <p>Click Here to upload</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <button 
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
       style={{width:"120px",marginLeft:"145px"}} >
          {loading ? (
            <span className="flex items-center justify-center">
              <Loader className="animate-spin w-5 h-5 mr-2" /> Predicting...
            </span>
          ) : (
            "Predict"
          )}
        </button>

        {prediction && (
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Prediction:</span>{" "}
              <span className="text-xl font-bold">{prediction}</span>
            </p>

            <div className="w-full">
              <div className="flex justify-between mb-1 text-sm">
                <span>Probability</span>
                <span>{animatedProbability} %</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all"
                  style={{ width: `${animatedProbability}%` }}
                ></div>
              </div>
            </div>
   <Link to="/description" className="text-blue-600 hover:underline mt-2 block text-sm">
   More details
          </Link>
           
             
           
          </div>
        )}
      </div>
    </div>
  );
}
