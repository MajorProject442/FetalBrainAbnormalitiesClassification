import profilePic from "./assets/about icon1.png"; // Replace with actual path
import { Brain, Microscope, Code } from "lucide-react";

const FetalBrainProject = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
    style={{ backgroundImage: 'url("/assets/contact.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Image Section */}
      <div className="  flex flex-col items-center text-center md:text-left w-full md:w-1/2">
        <img
          src={profilePic}
          alt="Fetal Brain Abnormalities"
          className="w-40 md:w-56 h-40 md:h-56 rounded-full shadow-lg border-4 border-blue-500 object-cover"
        />
        <h2 className=" text-white text-2xl md:text-3xl font-extrabold text-gray-800 mt-4">
          Fetal Brain Abnormalities
        </h2>
        <p className="text-white text-md text-gray-600 mt-1">Medical Imaging Analysis</p>
      </div>

      {/* Project Info Section */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold text-gray-800">
          Project Overview
        </h2>
        <p className="text-white text-md text-gray-600 leading-relaxed">
          This project focuses on detecting fetal brain abnormalities using deep
          learning techniques applied to medical imaging data.
        </p>

        {/* Key Features */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Microscope className="text-blue-500 w-5 h-5" />
            <p className=" text-white text-md text-gray-700 font-semibold">
              Medical Image Processing
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Brain className="text-blue-500 w-5 h-5" />
            <p className="text-white text-md text-gray-700 font-semibold">
              Deep Learning for Classification
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Code className="text-blue-500 w-5 h-5" />
            <p className="text-white text-md text-gray-700 font-semibold">
              Python | TensorFlow | CNN
            </p>
          </div>
        </div>

        <p className="text-white text-md text-gray-600 leading-relaxed">
          Utilizing Convolutional Neural Networks (CNNs) to accurately classify
          fetal brain scans and assist in early diagnosis.
        </p>
      </div>
    </div>
  );
};

export default FetalBrainProject;
