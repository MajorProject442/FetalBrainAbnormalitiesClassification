import React from 'react'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
const Treatment = () => {
  const name=Cookies.get('abnormality_name')
  
  const abnormalityTreatment = {
    'anold-chiari-malformation': ['monitory_issues', 'surgical decompression', 'physical'],
    'arachnoid-cyst': ['MRI', 'monitor cyst', 'postnetal'],
    'colphocephaly': ['pcare', 'physical', 'monitory_issues'],
    'encephalocele': ['nicu', 'pcare', 'hydrocephalus'],
    'holoprosencephaly': ['nicu', 'monitor_issues', 'tertiary_center'],
    'hydracenphaly': ['pcare', 'nicu', 'monitor_issues'],
    'intracranial-tumor': ['MRI', 'fetalscan', 'histopathology'],
    'm-magna': ['postnetal_neuro', 'fetalscan', 'monitor cyst'],
    'moderate-ventriculomegaly': ['fetalscan', 'hygiene','postnatal_neuro'],
    'severe-ventriculomegaly': ['nicu', 'fetalscan', 'hygiene'],
    'polencephaly': ['MRI', 'pcare', 'hygiene'],
    'vein-of-galen': ['MRI', 'fetalscan', 'monitor_issues'],
    'intracranial-hemorrdge': ['serial', 'hygiene', 'nicu'],
    'cerebellah-hypoplasia': ['pcare', 'physical', 'neurodevelopment'],
    'mild-ventriculomegaly':['fetalscan','serial','suggest']
  };
  const getDescription = (name) => {
    switch (name?.trim()) {
      case 'anold-chiari-malformation':
        return `• Monitor with prenatal imaging\n• Surgical decompression post-birth if severe\n• Manage symptoms (e.g., breathing, feeding issues)\n• Physical and occupational therapy\n• Neurologist follow-up`;
  
      case 'arachnoid-cyst':
        return `• Regular fetal MRI or ultrasound\n• Monitor cyst size and effects\n• Neurosurgical intervention if compressing brain\n• Postnatal follow-up with neurologist`;
  
      case 'cerebellah-hypoplasia':
        return `• Supportive care\n• Physical, occupational, speech therapy\n• Treat coexisting anomalies if any\n• Ongoing neurodevelopmental evaluation`;
  
      case 'colphocephaly':
        return `• No direct fetal treatment\n• Postnatal supportive care\n• Physical and occupational therapy\n• Monitor for seizures or motor issues`;
  
      case 'encephalocele':
        return `• Supportive care\n• NICU care immediately after delivery\n• Manage hydrocephalus if present\n• Long-term rehab and therapy`;
  
      case 'holoprosencephaly':
        return `• No prenatal cure\n• Plan delivery at tertiary care center\n• NICU support post-birth\n• Treat feeding, seizures, endocrine issues\n• Multidisciplinary team care`;
  
      case 'hydracenphaly':
        return `• Supportive care only\n• NICU stabilization\n• Manage seizures, hydrocephalus\n• Palliative care discussion with family`;
  
      case 'intracranial-hemorrdge':
        return `• Monitor via serial imaging\n• Control maternal risk factors (BP, infections)\n• NICU care after birth\n• Surgery if hydrocephalus develops`;
  
      case 'intracranial-tumor':
        return `• Monitor with MRI or ultrasound\n• Plan delivery at neurosurgical center\n• Postnatal tumor removal if operable\n• Histopathology to guide treatment`;
  
      case 'm-magna':
        return `• Monitor cyst size via imaging\n• Usually benign and self-resolving\n• Postnatal neuro follow-up if symptoms develop`;
  
      case 'mild-ventriculomegaly':
        return `• Serial ultrasounds to monitor\n• No intervention if stable and isolated\n• Follow-up for development post-birth`;
  
      case 'moderate-ventriculomegaly':
        return `• Closer fetal monitoring\n• Rule out infections/genetic causes\n• Postnatal neuro evaluation\n• Early intervention services if needed`;
  
      case 'severe-ventriculomegaly':
        return `• Regular scans and multidisciplinary care\n• Consider amniocentesis/genetic testing\n• NICU support at birth\n• Possible shunting postnatally`;
  
      case 'polencephaly':
        return `• No prenatal treatment\n• Postnatal MRI for confirmation\n• Symptomatic management\n• Rehab services for developmental delays`;
  
      case 'vein-of-galen':
        return `• Monitor via Doppler and fetal MRI\n• Plan delivery at specialized center\n• Postnatal embolization (interventional radiology)\n• Treat heart failure or hydrocephalus if present`;
  
      default:
        return 'No treatment data available.';
    }
  };
  
  
        
    
       
  return (
    
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50" style={{ backgroundImage: 'url("/assets/brain.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-xl rounded-2xl p-6 md space-y-6 border"  style={{width:"900px" ,height:"600px"}}>
        <h4 style={styles.title}>
        Treatment of {name}
        </h4>
        <p style={{  whiteSpace: 'pre-wrap',
  textAlign: 'left',
  fontSize: '20px', 
  lineHeight: '1.6', 
  margin: '1rem auto', 
  width: '1000px'}}>
        {getDescription(name)}
        </p>
        <div className="flex justify-between gap-4">
        <img
          src={`/assets/${abnormalityTreatment[name.trim()][0]}.jpg`}
          alt="Precautions"
          className="w-64 h-64 object-cover rounded-md"
        />
        <img
          src={`/assets/${abnormalityTreatment[name.trim()][1]}.jpg`}
          alt="No Smoking and Drinking"
          className="w-64 h-64 object-cover rounded-md"
        />
        <img
          src={`/assets/${abnormalityTreatment[name.trim()][2]}.jpg`}
          alt="Omega 3 Foods"
          className="w-64 h-64 object-cover rounded-md"
        />
      </div>
      <Link to="/description" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
           Go Back
          </Link>
      </div>
     
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
      justifyContent: 'space-between',
      marginTop: '20px',
      width: '80%', // Adjust this value as needed
    },
    image: {
      width: '30%',  // Each image will take up 30% of the container's width
      height: 'auto',
      objectFit: 'cover', // Ensures images cover the space without distortion
    },
  }
  
}

export default Treatment
