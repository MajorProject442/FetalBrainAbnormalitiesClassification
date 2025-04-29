
// import React from 'react';

// const CircularProgress = ({ percentage = 0, size = 120, strokeWidth = 10 }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (percentage / 100) * circumference;

//   return (
//     <svg width={size} height={size} classrc/components/StylishProbabilityCircle.jsx



// import React, { useEffect, useState } from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const StylishProbabilityCircle = ({ probability }) => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     let timeout;
//     if (value < probability) {
//       timeout = setTimeout(() => setValue(value + 1), 10);
//     }
//     return () => clearTimeout(timeout);
//   }, [value, probability]);

//   return (
//     <div style={{ width: "40vw", maxWidth: "200px", height: "40vw", maxHeight: "200px" }}>
//       <CircularProgressbar
//         value={value}
//         text={${value}%}
//         styles={buildStyles({
//           pathTransitionDuration: 0.5,
//           textSize: "18px",
//           pathColor: url(#gradient),
//           textColor: "#111",
//           trailColor: "#eee",
//           backgroundColor: "#f8f9fa",
//         })}
//       />
//       {/* Gradient Definition */}
//       <svg style={{ height: 0 }}>
//         <defs>
//           <linearGradient id="gradient">
//             <stop offset="0%" stopColor="#00c6ff" />
//             <stop offset="100%" stopColor="#0072ff" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default StylishProbabilityCircle;sName="rotate-[-90deg]">
//       {/* Background Circle */}
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         stroke="#e0e0e0"
//         strokeWidth={strokeWidth}
//         fill="none"
//       />
//       {/* Progress Circle */}
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         stroke="aqua"
//         strokeWidth={strokeWidth}
//         fill="none"
//         strokeDasharray={circumference}
//         strokeDashoffset={offset}
//         strokeLinecap="round"
//       />
//       {/* Percentage Text */}
//       <text
//         x="50%"
//         y="50%"
//         dominantBaseline="middle"
//         textAnchor="middle"
//         fontSize="16"
//         fill="#333"
//         transform="rotate(90, 60, 60)" // to counter svg rotation
//       >
//         {percentage.toFixed(0)}%
//       </text>
//     </svg>
//   );
// };

// export default CircularProgress;




import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

const StylishProbabilityCircle = ({ probability }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let timeout;
    if (value < probability) {
      timeout = setTimeout(() => setValue(value + 1), 10);
    }
    return () => clearTimeout(timeout);
  }, [value, probability]);

  return (
    <div style={{ width: "40vw", maxWidth: "200px", height: "40vw", maxHeight: "200px" }}>
      <CircularProgressbar
        value={value}
        // text={${value}%}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          textSize: "18px",
        //   pathColor: url(#gradient),
          textColor: "#111",
          trailColor: "#eee",
          backgroundColor: "#f8f9fa",
        })}
      />
      {/* Gradient Definition */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0072ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default StylishProbabilityCircle;