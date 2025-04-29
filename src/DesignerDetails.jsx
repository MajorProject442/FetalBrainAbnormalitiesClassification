
// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// export default function DesignerDetails() {
//   const location = useLocation();
//   const designer = location.state || {};

  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: designer.email || "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setResponseMessage("");

//     if (!formData.name || !formData.message) {
//       setErrors({
//         name: !formData.name ? "Name is required" : "",
//         message: !formData.message ? "Message is required" : "",
//       });
//       return;
//     }

//     setLoading(true);

//     try {
//       console.log("Sending request to backend...");

//       const response = await fetch("http://localhost/php-practice/majorProjectBackend/send.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

      

//       const result = await response.json();
//       console.log("Response JSON:", result);

//       if (result.success) {
//         setSubmitted(true);
//         setResponseMessage("Message sent successfully!");
//       } else {
//         setResponseMessage("Failed to send message. Try again later.");
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setResponseMessage(" Error occurred. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
   
   
//     <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
//     style={{ backgroundImage: 'url("/assets/hca.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="bg-gray-50 p-6 rounded-lg shadow-md" 
//         style={{
         
//           backgroundColor: "white",
//           padding: "50px", // Increased padding
//           borderRadius: "12px",
//           boxShadow: "0px 6px 20px rgba(63, 59, 59, 0.29)",
//           width: "700px", // Increased width
//         }}
//       >
//       <h2 className="text-xl font-semibold mb-4">Contact {designer.name}</h2>
//       {responseMessage && <p className={submitted ? "text-green-600" : "text-red-600"}>{responseMessage}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-semibold">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-300"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         <div>
//           <label className="block font-semibold">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             readOnly
//             className="w-full border px-3 py-2 rounded bg-gray-200"
//           />
//         </div>

//         <div>
//           <label className="block font-semibold">Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-300"
//             rows="4"
//           ></textarea>
//           {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import Cookies from 'js-cookie';
// export default function DesignerDetails() {
//   const location = useLocation();
//   const designer = location.state || {};

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     consultedDoctor: "",
//     disease: "",
//     message: "",
//     awarenessDate: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");

//   const diseases = [
//     "anold-chiari-malformation", "arachnoid-cyst", "cerebellah-hypoplasia",
//     "colphocephaly", "encephalocele", "holoprosencephaly", "hydracenphaly",
//     "intracranial-hemorrdge", "intracranial-tumor", "m-magna", "mild-ventriculomegaly",
//     "moderate-ventriculomegaly", "normal", "polencephaly",
//     "severe-ventriculomegaly", "vein-of-galen"
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors({});
//     setResponseMessage("");

//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.mobile) newErrors.mobile = "Mobile number is required";
//     if (!formData.consultedDoctor) newErrors.consultedDoctor = "Please select an option";
//     if (!formData.disease) newErrors.disease = "Please select a disease";
//     if (!formData.message) newErrors.message = "Message is required";
//     if (!formData.awarenessDate) newErrors.awarenessDate = "Please select a date";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setSubmitted(true);
//     setResponseMessage("Query submitted successfully!");
//     console.log("Form Data Submitted:", { ...formData, designerEmail: designer.email });
//   };

//   return (
//     <div
//     className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
//     style={{
//       backgroundImage: 'url("/assets/contact.jpeg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}
//   >
//   <div className="bg-white shadow-xl rounded-2xl p-4 space-y-6 border "  style={{width:"700px"}} >
//     <h2 className="text-2xl font-bold mb-6 text-center">Ask Your Query</h2>

//     {responseMessage && (
//       <p className="text-green-600 text-center mb-4">{responseMessage}</p>
//     )}

//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block font-medium">Your Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />
//         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//       </div>

//       <div>
//         <label className="block font-medium">Your Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//       </div>

//       <div>
//         <label className="block font-medium">Mobile Number:</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         />
//         {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
//       </div>

//       <div>
//         <label className="block font-medium mb-1">Consulted Doctor Before?</label>
//         <div className="flex gap-6">
//           <label>
//             <input
//               type="radio"
//               name="consultedDoctor"
//               value="Yes"
//               checked={formData.consultedDoctor === "Yes"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             Yes
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="consultedDoctor"
//               value="No"
//               checked={formData.consultedDoctor === "No"}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             No
//           </label>
//         </div>
//         {errors.consultedDoctor && <p className="text-red-500 text-sm">{errors.consultedDoctor}</p>}
//       </div>

//       <div>
//         <label className="block font-medium">Select Disease:</label>
//         <select
//           name="disease"
//           value={formData.disease}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//         >
//           <option value="">-- Choose a Disease --</option>
//           {diseases.map((disease) => (
//             <option key={disease} value={disease}>
//               {disease.replace(/-/g, " ")}
//             </option>
//           ))}
//         </select>
//         {errors.disease && <p className="text-red-500 text-sm">{errors.disease}</p>}
//       </div>

//       <div>
//         <label className="block font-medium">When did you get to know this the first time?</label>
//         <input
//           type="date"
//           name="awarenessDate"
//           value={formData.awarenessDate}
//           onChange={handleChange}
//           max={new Date().toISOString().split("T")[0]}
//           className="w-full border px-3 py-2 rounded"
//         />
//         {errors.awarenessDate && (
//           <p className="text-red-500 text-sm">{errors.awarenessDate}</p>
//         )}
//       </div>

//       <div>
//         <label className="block font-medium">Your Query:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           className="w-full border px-3 py-2 rounded"
//         ></textarea>
//         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         Submit Query
//       </button>
//     </form>
  
// </div>
// </div>
//   );
// }
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function DesignerDetails() {
  const location = useLocation();
  const designer = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    consultedDoctor: "",
    disease: "",
    message: "",
    awarenessDate: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const diseases = [
    "anold-chiari-malformation", "arachnoid-cyst", "cerebellah-hypoplasia",
    "colphocephaly", "encephalocele", "holoprosencephaly", "hydracenphaly",
    "intracranial-hemorrdge", "intracranial-tumor", "m-magna", "mild-ventriculomegaly",
    "moderate-ventriculomegaly", "normal", "polencephaly",
    "severe-ventriculomegaly", "vein-of-galen"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setResponseMessage("");

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.consultedDoctor) newErrors.consultedDoctor = "Please select an option";
    if (!formData.disease) newErrors.disease = "Please select a disease";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.awarenessDate) newErrors.awarenessDate = "Please select a date";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      console.log("Sending request to backend...");

      const response = await fetch("http://localhost/php-practice/majorProjectBackend/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response JSON:", result);

      if (result.success) {
        setSubmitted(true);
        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
      style={{
        backgroundImage: 'url("/assets/contact.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-4 space-y-6 border" style={{ width: "700px" }}>
        <h2 className="text-2xl font-bold mb-6 text-center">Ask Your Query</h2>

        {responseMessage && (
          <p className="text-green-600 text-center mb-4">{responseMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium">Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium">Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Consulted Doctor Before?</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="consultedDoctor"
                  value="Yes"
                  checked={formData.consultedDoctor === "Yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="consultedDoctor"
                  value="No"
                  checked={formData.consultedDoctor === "No"}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
            {errors.consultedDoctor && <p className="text-red-500 text-sm">{errors.consultedDoctor}</p>}
          </div>

          <div>
            <label className="block font-medium">Select Disease:</label>
            <select
              name="disease"
              value={formData.disease}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">-- Choose a Disease --</option>
              {diseases.map((disease) => (
                <option key={disease} value={disease}>
                  {disease.replace(/-/g, " ")}
                </option>
              ))}
            </select>
            {errors.disease && <p className="text-red-500 text-sm">{errors.disease}</p>}
          </div>

          <div>
            <label className="block font-medium">When did you get to know this the first time?</label>
            <input
              type="date"
              name="awarenessDate"
              value={formData.awarenessDate}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.awarenessDate && (
              <p className="text-red-500 text-sm">{errors.awarenessDate}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Your Query:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border px-3 py-2 rounded"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
}
