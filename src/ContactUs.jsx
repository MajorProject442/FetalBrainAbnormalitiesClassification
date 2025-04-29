

// import { useNavigate } from "react-router-dom";
// import imagePic from "./assets/image.png";

// const designers = [
//   { id: 1, name: "Jagadeswari", email: "n190658@rguktn.ac.in", logo: imagePic },
//   { id: 2, name: "Deepthi", email: "n191065@rguktn.ac.in", logo: imagePic },
//   { id: 3, name: "Jyothi", email: "n190031@rguktn.ac.in", logo: imagePic },
//   { id: 4, name: "Sri Vidya", email: "n190142@rguktn.ac.in", logo: imagePic }
// ];

// export default function ContactUsPage() {
//   const navigate = useNavigate();

//   const handleDesignerClick = (designer) => {
//     navigate(`/designer/${designer.id}`, { state: designer });
//   };

//   return (
//     <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
//     style={{ backgroundImage: 'url("/assets/hca.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       {/* Designed By Text */}
//       <h2 className="text-5xl font-extrabold mb-12 tracking-wide uppercase">Designed By</h2>

//       {/* Designer Grid - Full Page Width */}
//       <div className="w-full flex justify-center">
//         <div className="grid grid-cols-4 gap-12">
//           {designers.map((designer) => (
//             <div
//               key={designer.id}
//               className="flex flex-col items-center space-y-6 w-64 h-72 p-8 border rounded-xl shadow-2xl cursor-pointer hover:bg-gray-100"
//               onClick={() => handleDesignerClick(designer)}
//             >
//               <img src={designer.logo} alt={designer.name} className="w-28 h-28 rounded-full" />
//               <p className="font-bold text-2xl">{designer.name}</p>
//               {/* Email as a clickable hyperlink */}
//               <a
//                 href={`mailto:${designer.email}`}
//                 className="text-lg text-gray-600 hover:text-blue-500 hover:underline transition duration-200"
//               >
//                 {designer.email}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import imagePic from "./assets/image.png";

const designers = [
  { id: 1, name: "Jagadeswari", email: "n190658@rguktn.ac.in", logo: imagePic },
  { id: 2, name: "Deepthi", email: "n191065@rguktn.ac.in", logo: imagePic },
  { id: 3, name: "Jyothi", email: "n190031@rguktn.ac.in", logo: imagePic },
  { id: 4, name: "Sri Vidya", email: "n190142@rguktn.ac.in", logo: imagePic }
];

export default function ContactUsPage() {
  const navigate = useNavigate();

  const handleDesignerClick = (designer) => {
    navigate(`/designer/${designer.id}`, { state: designer });
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
      
      <h2 className="text-5xl font-extrabold mb-12 tracking-wide uppercase text-white">Contact Us</h2>

      {/* Designer Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-4 gap-12">
          {designers.map((designer) => (
            <div
              key={designer.id}
              className="bg-white flex flex-col items-center space-y-6 w-64 h-72 p-8 border rounded-xl shadow-2xl cursor-pointer hover:bg-gray-100"
              onClick={() => handleDesignerClick(designer)}
            >
              <img
                src={designer.logo}
                alt={`${designer.name}'s avatar`}
                className="w-28 h-28 rounded-full"
              />
              <p className="font-bold text-2xl">{designer.name}</p>
              <a
                href={`mailto:${designer.email}`}
                className="text-lg text-gray-600 hover:text-blue-500 hover:underline transition duration-200"
              >
                {designer.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
