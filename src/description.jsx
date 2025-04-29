


import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


const Description = () => {
  const name = Cookies.get('abnormality_name');

  const getDescription = (name) => {
    switch (name) {
      case ' anold-chiari-malformation':
        return `Arnold-Chiari Malformation is a structural defect where parts of the brain, particularly the cerebellum, extend into the spinal canal. This displacement can disrupt normal flow of cerebrospinal fluid, leading to pressure buildup and neurological symptoms. Common signs include headaches, dizziness, balance issues, and coordination difficulties. In severe cases, surgical intervention may be required.`;

      case ' arachnoid-cyst':
        return `Arachnoid cysts are fluid-filled sacs located between the brain or spinal cord and the arachnoid membrane. They are typically congenital and formed due to splitting or duplication of the arachnoid layer. These cysts are filled with cerebrospinal fluid and may remain unchanged throughout life.`;

      case ' cerebellah-hypoplasia':
        return `Cerebellar hypoplasia is a developmental condition where the cerebellum is underdeveloped or smaller than normal. It affects motor control, balance, and coordination, and may be associated with other brain abnormalities or genetic syndromes.`;

      case ' colphocephaly':
        return `Colpocephaly is a rare brain malformation characterized by abnormal enlargement of the occipital horns of the lateral ventricles. It is associated with improper development of white matter in the posterior brain. This anomaly is typically identified through neuroimaging.`;

      case ' encephalocele':
        return `Encephalocele is a neural tube defect where brain tissue and membranes herniate through an opening in the skull. This occurs due to improper closure of the neural tube during early fetal development. The protrusion is usually covered by skin or a thin membrane.`;

      case ' holoprosencephaly':
        return `Holoprosencephaly is a congenital brain anomaly where the forebrain fails to divide into two hemispheres. It arises from abnormal development of the embryonic prosencephalon. The severity of the condition varies depending on the extent of brain division failure.`;

      case ' hydracenphaly':
        return `Hydranencephaly is a condition where the cerebral hemispheres are absent and replaced by cerebrospinal fluid. It results from severe damage or disruption to the brain during early development. The skull remains intact, but much of the brain tissue is missing.`;

      case ' intracranial-hemorrdge':
        return `Intracranial hemorrhage is the accumulation of blood within the skull due to rupture of blood vessels. It can occur in various regions of the brain or its surrounding spaces. The bleeding can affect brain structure and pressure balance.`;

      case ' intracranial-tumor':
        return `An intracranial tumor is an abnormal mass of tissue within the skull, arising from brain cells or supporting tissues. Tumors can be located in any part of the brain and vary in growth rate. They may be primary (originating in the brain) or secondary (spread from elsewhere).`;

      case ' m-magna':
        return `Mega cisterna magna is a condition where the cisterna magna, a fluid-filled space near the cerebellum, is enlarged. It is typically a benign anatomical variant and often found incidentally. The cerebellum and other posterior fossa structures remain intact.`;

      case ' mild-ventriculomegaly':
        return `Mild ventriculomegaly refers to a slight increase in the size of the brain's lateral ventricles. It is generally defined as ventricular width measuring between 10–12 mm. This condition may appear as an isolated finding on prenatal imaging.`;

      case ' moderate-ventriculomegaly':
        return `Moderate ventriculomegaly involves more noticeable enlargement of the brain ventricles. It indicates a greater degree of cerebrospinal fluid accumulation within the ventricular system. Ventricular width typically ranges between 13–15 mm.`;

      case ' severe-ventriculomegaly':
        return `Severe ventriculomegaly describes significant dilation of the brain's ventricles, generally over 15 mm. It reflects substantial accumulation of cerebrospinal fluid. This condition may be associated with other structural brain anomalies.`;

      case ' normal':
        return `A normal classification indicates no structural or anatomical abnormalities detected in the brain scan. Brain size, shape, and symmetry appear within expected developmental limits. There is no evidence of cysts, malformations, or abnormal fluid levels.`;

      case ' polencephaly':
        return `Polencephaly is a rare congenital brain disorder where cyst-like cavities replace areas of cerebral white matter. It results from disturbances in brain tissue development or destruction. The condition leads to abnormal cortical and subcortical structure formation.`;

      case ' vein-of-galen':
        return `Vein of Galen malformation is a rare vascular anomaly involving abnormal connections between cerebral arteries and the vein of Galen. This results in dilation of the vein and altered cerebral blood flow. It forms during fetal development due to persistence of embryonic vessels.`;

      default:
        return `No matching abnormality found or the input is invalid.`;
    }
  };

  return (
    // <div style={{ backgroundImage: 'url("/assets/brain bg_.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    //   <div style={styles.card}>
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50" style={{ backgroundImage: 'url("/assets/brain bg_.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} >
    <div className="bg-white shadow-xl rounded-2xl p-6  "  style={{width:"600px",marginLeft:"350px"}}>
        <h1 style={styles.title}>
          {name}
        </h1>
        <p style={styles.description}>
          {getDescription(name)}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <Link to="/symptoms" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
            Symptoms
          </Link>
          <Link to="/treatment" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
            Treatment
          </Link>
          <Link to="/precautions" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
            Precautions
          </Link>
          <Link to="/contact-us" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
            Help?
          </Link>
          <Link to="/home" className="text-blue-600 hover:underline mt-2 block text-sm" style={linkStyle}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

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
    color: 'black',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
};

export default Description;
