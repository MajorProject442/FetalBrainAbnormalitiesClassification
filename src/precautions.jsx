import React from 'react'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
const Precautions = () => {
  const abnormalityPrecautions = {
    'anold-chiari-malformation': ['folic', 'folate', 'diabetes'],
    'arachnoid-cyst': ['folic', 'folate', 'diabetes'],
    'colphocephaly': ['folic', 'alcohol', 'brain'],
    'encephalocele': ['folic', 'diabetes', 'overheating'],
    'holoprosencephaly': ['folic', 'folate', 'diabetes'],
    'hydracenphaly': ['folic', 'diabetes', 'alcohol'],
    'intracranial-tumor': ['folate', 'fetalscan', 'pcare'],
    'm-magna': ['folate', 'fetalscan', 'hygiene'],
    'moderate-ventriculomegaly': ['folate', 'pcare', 'hygiene'],
    'severe-ventriculomegaly': ['folate', 'fetalscan', 'hygiene'],
    'polencephaly': ['folate', 'pcare', 'hygiene'],
    'vein-of-galen': ['folate', 'fetalscan', 'hygiene'],
    'intracranial-hemorrdge': ['vitamink', 'bp', 'seat'],
    'cerebellah-hypoplasia': ['diabetes', 'alcohol', 'omega'],
    'mild-ventriculomegaly':['pcare','hygiene','suggest']
  };
  
   const name=Cookies.get('abnormality_name')
  

  const getDescription = (name) => {
    switch (name?.trim()) {
      case 'anold-chiari-malformation':
        return `• Take folic acid (400–800 mcg daily)\n• Control diabetes and weight\n• Avoid harmful drugs and alcohol\n• Eat a healthy, folate-rich diet\n• Seek genetic counseling if needed`;
  
      case 'arachnoid-cyst':
        return `• Continue folic acid\n• Prevent infections (CMV, toxoplasmosis)\n• Use safe medications only\n• Eat antioxidant-rich foods\n• Control diabetes and hypertension\n• Consider genetic counseling`;
  
      case 'cerebellah-hypoplasia':
        return `• Take folic acid daily\n• Avoid infections (CMV, rubella)\n• Maintain sugar levels\n• Avoid alcohol and harmful drugs\n• Eat omega-3 and vitamin-rich diet\n• Get genetic counseling if needed`;
  
      case 'colphocephaly':
        return `• Daily folic acid\n• Avoid infections (CMV, Zika)\n• Avoid alcohol/drugs\n• Eat a brain-healthy diet\n• Manage chronic conditions\n• Seek genetic advice if anomalies exist`;
  
      case 'encephalocele':
        return `• Start folic acid early\n• Avoid infections (CMV, Zika)\n• Avoid overheating (fevers, hot tubs)\n• Follow a brain-nourishing diet\n• Control diabetes/obesity\n• Avoid harmful substances`;
  
      case 'holoprosencephaly':
        return `• Take folic acid (400–800 mcg)\n• Prevent TORCH infections\n• Control diabetes\n• Avoid teratogens (alcohol, risky meds)\n• Maintain a nutrient-rich diet\n• Get genetic counseling`;
  
      case 'hydracenphaly':
        return `• Avoid infections (CMV, rubella)\n• Take folic acid\n• Avoid alcohol, drugs, toxins\n• Manage hypertension, diabetes\n• Get regular prenatal checkups`;
  
      case 'intracranial-hemorrdge':
        return `• Prevent trauma (use seat belts)\n• Treat infections (CMV, toxo)\n• Control blood pressure\n• Manage clotting issues\n• Avoid blood thinners unless advised\n• Eat vitamin K-rich foods`;
  
      case 'intracranial-tumor':
        return `• Regular fetal scans\n• Prevent infections (CMV)\n• Control maternal health\n• Maintain good nutrition\n• Plan delivery at specialized center`;
  
      case 'm-magna':
        return `• Prevent infections (CMV, toxo)\n• Eat a folate-rich diet\n• Regular monitoring for complications`;
  
      case 'mild-ventriculomegaly':
        return `• Prevent infections (CMV, toxo)\n• Consider genetic counseling if needed\n• Maintain a healthy pregnancy\n• Offer emotional support`;
  
      case 'moderate-ventriculomegaly':
        return `• Prevent infections (CMV, Zika)\n• Genetic counseling if anomalies exist\n• Maintain a nutritious diet\n• Support parental mental health\n• Attend all follow-ups`;
  
      case 'severe-ventriculomegaly':
        return `• Prevent infections (CMV, toxo)\n• Genetic counseling advised\n• Eat a nutrient-rich diet\n• Get regular scans and support`;
  
      case 'polencephaly':
        return `• Avoid infections (CMV, rubella)\n• Genetic counseling for families at risk\n• Support mental health\n• Eat a folate-rich diet`;
  
      case 'vein-of-galen':
        return `• Prevent infections (CMV, toxo)\n• Monitor maternal/fetal heart health\n• Eat a healthy, balanced diet\n• Attend regular prenatal visits`;
  
      default:
        return 'No precaution data available.';
    }
  };


  
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50" style={{ backgroundImage: 'url("/assets/brain.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-xl rounded-2xl p-4 md space-y-3 border"  style={{width:"900px",height:"600px",marginTop:"10px"}}>
        <h3 style={styles.title}>
          Precautions of {name}
        </h3>
        <p style={{ whiteSpace: 'pre-wrap',
  textAlign: 'left',
  fontSize: '20px', 
  lineHeight: '1.6', 
  margin: '1rem auto',
  maxWidth: '1000px'}}>

          {getDescription(name)}
        </p>
        <div className="flex justify-between gap-4">
        <img
          src={`/assets/${abnormalityPrecautions[name.trim()][0]}.jpg`}
          alt="Precautions"
          className="w-64 h-64 object-cover rounded-md"
        />
        <img
          src={`/assets/${abnormalityPrecautions[name.trim()][1]}.jpg`}
          alt="No Smoking and Drinking"
          className="w-64 h-64 object-cover rounded-md"
        />
        <img
          src={`/assets/${abnormalityPrecautions[name.trim()][2]}.jpg`}
          alt="Omega 3 Foods"
          className="w-64 h-64 object-cover rounded-md"
        />
      </div>
      <Link to="/description" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
           Go Back
          </Link>
      </div>
      {/* {name && abnormalityPrecautions[name.trim()] && (
  <div style={styles.imageContainer}>
    <img src={`/assets/${abnormalityPrecautions[name.trim()][0]}.jpg`} alt="Image 1" style={styles.image} />
    <img src={`/assets/${abnormalityPrecautions[name.trim()][1]}.jpg`} alt="Image 2" style={styles.image} />
    <img src={`/assets/${abnormalityPrecautions[name.trim()][2]}.jpg`} alt="Image 3" style={styles.image} />
  </div>
)} */}
 

    </div>
  )
}
const linkStyle = {
  fontSize: '1.1rem',
  color: '#1e40af',
  textDecoration: 'none',
  fontWeight: '600',
};
const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe9db',
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: '#fff7f4',
    padding: '40px',
    borderRadius: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    textAlign: 'center',
    maxWidth: '600px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a3c7c',
    marginBottom: '20px',
  },
  highlight: {
    fontWeight: '700',
  },
  description: {
    fontSize: '1.1rem',
    color: '#334155',
    lineHeight: '1.6',
    marginBottom: '30px',
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px', // adds spacing between images
      marginTop: '20px',
    },
    image: {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },

   
  }
  
}

export default Precautions
