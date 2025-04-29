import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const Symptoms = () => {
  const name=Cookies.get('abnormality_name')
  const getDescription = (name) => {
    switch (name?.trim()) {
      case 'anold-chiari-malformation':
        return `• Balance and coordination difficulties\n• Headaches, especially after coughing or straining\n• Swallowing problems and feeding issues\n• Breathing irregularities in infants\n• Possible developmental delays`;
  
      case 'arachnoid-cyst':
        return `• Often asymptomatic during pregnancy\n• If large, may cause pressure symptoms\n• Seizures or hydrocephalus postnatally\n• Delays in developmental milestones`;
  
      case 'cerebellah-hypoplasia':
        return `• Poor muscle coordination (ataxia)\n• Delayed motor development\n• Speech and cognitive delays\n• Swallowing difficulties\n• In severe cases, seizures or abnormal eye movements`;
  
      case 'colphocephaly':
        return `• Partial or complete vision loss\n• Developmental and intellectual delays\n• Seizures or spasticity\n• Poor motor coordination\n• Possible learning disabilities`;
  
      case 'encephalocele':
        return `• Visible sac on the head (contains brain tissue)\n• Neurological deficits depending on location\n• Hydrocephalus\n• Seizures and developmental delays\n• Vision and motor impairment`;
  
      case 'holoprosencephaly':
        return `• Facial abnormalities (cleft lip/palate, single nostril)\n• Severe developmental delay\n• Seizures and feeding problems\n• Poor muscle tone\n• Endocrine abnormalities`;
  
      case 'hydracenphaly':
        return `• Absent or minimal cerebral hemispheres\n• Irritability and seizures\n• Abnormal muscle tone (stiff or floppy limbs)\n• Enlarged head (hydrocephalus)\n• Severe intellectual disability`;
  
      case 'intracranial-hemorrdge':
        return `• May be asymptomatic prenatally\n• Enlarged brain ventricles (hydrocephalus)\n• Seizures postnatally\n• Poor feeding and lethargy\n• Weak cry and abnormal reflexes`;
  
      case 'intracranial-tumor':
        return `• Mass may compress brain structures\n• Increased head size or hydrocephalus\n• Poor fetal growth if severe\n• Neurological signs depending on tumor location`;
  
      case 'm-magna':
        return `• Typically no symptoms (benign finding)\n• Rarely causes hydrocephalus or motor issues\n• Occasionally linked to other brain malformations`;
  
      case 'mild-ventriculomegaly':
        return `• Usually asymptomatic in isolation\n• May be linked to minor developmental delays\n• Rare risk of hydrocephalus if progression occurs`;
  
      case 'moderate-ventriculomegaly':
        return `• Enlarged brain ventricles visible on imaging\n• May indicate underlying anomalies\n• Possible developmental delays postnatally`;
  
      case 'severe-ventriculomegaly':
        return `• Markedly enlarged ventricles\n• Higher risk of motor and cognitive impairments\n• May be associated with brain structural defects\n• Possible seizures or vision problems`;
  
      case 'polencephaly':
        return `• Muscle stiffness or floppiness\n• Delayed milestones and intellectual disability\n• Seizures and speech delay\n• May present with cerebral palsy-like features`;
  
      case 'vein-of-galen':
        return `• Enlarged blood vessel seen on imaging\n• Heart failure symptoms in utero or newborn\n• Enlarged head (hydrocephalus)\n• Seizures and developmental delays\n• Bulging fontanelle or prominent scalp veins`;
  
      default:
        return 'No symptom data available.';
    }
  };
  
// const getDescription=(name)=>
// {
//   switch (name?.trim()) {
//     case 'anold-chiari-malformation':
//       return `Detected mainly through prenatal imaging like ultrasound or fetal MRI:
// Abnormal shape of the cerebellum (part of the brain at the back), often described as a banana sign on ultrasound.
//  Downward displacement of the cerebellum and brainstem into the spinal canal.
//  Associated findings: myelomeningocele (a type of spina bifida), excess fluid in the brain (hydrocephalus).
//  Small or misshapen posterior fossa (the space at the back of the skull).
//  Sometimes reduced fetal movement if associated with severe spinal cord issues.`;

//     case 'arachnoid-cyst':
//       return `(Detected mainly through prenatal imaging like ultrasound or fetal MRI):
//  Presence of a fluid-filled sac (cyst) between the brain or spinal cord and the arachnoid membrane (one of the brain coverings).
//  Seen as a clear, non-solid, smooth cyst on fetal ultrasound or MRI.
//  May displace nearby brain structures (depending on size and location).
//  Sometimes mild enlargement of the ventricles (ventriculomegaly) if the cyst blocks cerebrospinal fluid flow.
//  Usually asymptomatic inside the womb unless the cyst is very large or causing pressure effects.`;

//     case 'cerebellah-hypoplasia':
//       return `(Detected mainly through prenatal ultrasound or fetal MRI):
// Underdeveloped or small cerebellum seen in imaging (especially the vermis, the central part of the cerebellum).
// Abnormal shape or size of the posterior fossa (space at the back of the brain).
// May appear with enlarged fourth ventricle (fluid space near the cerebellum).
// Possible associated findings: Dandy-Walker malformation, ventriculomegaly, or other brain malformations.
//  Sometimes reduced fetal movement if cerebellar hypoplasia is severe and affecting coordination pathways.
//  May be isolated or part of a genetic syndrome.`;

//     case 'colphocephaly':
//       return `(Detected mainly through prenatal ultrasound or fetal MRI):
//  Abnormal brain development with prominent occipital horns of the lateral ventricles.
//  Enlarged posterior part of the lateral ventricles giving a "tear- drop" shape.
//  May appear with corpus callosum abnormalities or microcephaly.
//  Sometimes confused with hydrocephalus but lacks significant head enlargement.
//  Can be isolated or associated with genetic conditions.`;

//     case 'encephalocele':
//       return `(Detected via prenatal ultrasound or fetal MRI, usually in second trimester):
//  Visible sac-like protrusion of brain tissue and/or meninges (membranes covering the brain) through an opening in the skull.
//  Most commonly located at the back of the head (occipital area), but can also be at the front (frontal encephalocele).
//  Possible associated signs: Hydrocephalus (fluid build-up in the brain), Microcephaly (small head), Other brain anomalies like corpus callosum abnormalities.
//  Amniotic fluid leakage may sometimes occur if encephalocele is large.
//  May be isolated or associated with genetic syndromes (like Meckel-Gruber syndrome).`;

//     case 'holoprosencephaly':
//       return `(Detected through prenatal ultrasound or fetal MRI, usually between 18–24 weeks gestation):
//  Incomplete or failed separation of the two halves of the fetal brain (forebrain) into right and left hemispheres.
//  Types detected based on severity: Alobar (most severe): Single brain ventricle, no separation. Semilobar: Partial separation. Lobar: Milder, more brain structure differentiation.
//  Facial abnormalities often seen: Cyclopia (one eye) or closely spaced eyes (hypotelorism), Cleft lip/palate, Flat nose or single nostril (proboscis).
//  Ventriculomegaly (enlarged brain ventricles) or microcephaly may be noticed.
//  Sometimes associated with chromosomal abnormalities (like Trisomy 13).`;

//     case 'hydracenphaly':
//       return `(Usually detected by detailed prenatal ultrasound or fetal MRI around mid to late second trimester):
//  Absence of large parts of the cerebral hemispheres — replaced by cerebrospinal fluid (CSF).
// Normal appearance of brainstem and cerebellum (so basic reflexes may still develop).
//  Ultrasound findings: Huge fluid-filled cavities in place of brain tissue. Thin rim of brain tissue at the periphery. Severe ventriculomegaly (enlarged brain ventricles).
//  Normal skull size initially (unlike anencephaly), but may become enlarged later (macrocephaly) due to CSF build-up.
//  No significant associated facial abnormalities (unlike holoprosencephaly).`;

//     case 'intracranial-hemorrdge':
//       return `(Detected usually through prenatal ultrasound or fetal MRI, often in the second or third trimester):
// - Bleeding inside the fetal brain — can occur within ventricles (intraventricular), brain tissue (intraparenchymal), subarachnoid, or subdural spaces.
// - Ultrasound findings: Echoes inside brain ventricles or brain tissue (indicating blood clots). Enlarged ventricles (ventriculomegaly) due to blood blocking CSF flow. Brain swelling (edema) or destruction of brain tissue (porencephalic cysts may form later).
// - Signs on Doppler studies: Altered blood flow in brain arteries (MCA — middle cerebral artery).
// - Reduced fetal movements may sometimes be noticed by the mother (if severe damage affects brain motor centers).`;

//     case 'intracranial-tumor':
//       return `(Detected mostly by prenatal ultrasound, fetal MRI, usually in the late second or third trimester):
// - Visible Mass in Fetal Brain: Solid, cystic, or mixed appearance seen during routine ultrasound.
// - Macrocephaly (enlarged fetal head): Due to tumor mass effect or obstruction of cerebrospinal fluid (causing hydrocephalus).
// - Polyhydramnios (excess amniotic fluid): Tumors can impair fetal swallowing reflex, leading to buildup of amniotic fluid.
// - Altered Fetal Movements (rare): If tumor affects motor centers, decreased fetal movements may be observed.
// - Signs of Fetal Heart Failure (in very large tumors): Due to high vascularity tumors (like choroid plexus papilloma), causing increased blood load.`;

//     case 'm-magna':
//       return `(Detected During Pregnancy)
// - Enlarged Posterior Fossa: The posterior fossa (the back part of the brain that houses the cerebellum) appears enlarged.
// - Cerebellar Abnormalities: Cerebellar hypoplasia (underdevelopment) or abnormal formation of the cerebellum may be noted, with parts of the cerebellum not forming normally.
// - Ventriculomegaly: Enlargement of the ventricles in the brain can be seen due to the abnormal development of brain structures.
// - Hydrocephalus: Fluid buildup around the brain can cause the skull to enlarge and lead to hydrocephalus, which may be detected through ultrasound or MRI.
// - Associated Anomalies: Some cases may be linked with other neurological and structural abnormalities, though this is less common in the variant form.`;

//     case 'mild-ventriculomegaly':
//       return `(Found during routine anomaly scan, usually between 18–22 weeks of gestation):
// - Mild Enlargement of Lateral Ventricles (10–15 mm): Normal ventricular width is <10 mm. In mild ventriculomegaly, the width measures between 10–15 mm.
// - Usually Isolated: In many cases, there are no other brain abnormalities detected.
// - Potential Associations (in some cases): Chromosomal abnormalities (e.g., Down syndrome). Infections (e.g., cytomegalovirus - CMV). Minor structural brain changes (rare).
// - May or May Not Progress: Sometimes remains stable; sometimes resolves on its own; occasionally worsens leading to hydrocephalus.`;

//     case 'moderate-ventriculomegaly':
//       return `(Usually noticed during mid-pregnancy anomaly scan, 18–22 weeks gestation):
// - Moderate Enlargement of Lateral Ventricles (15–20 mm): Normal is <10 mm; mild is 10–15 mm; moderate is 15–20 mm.
// - May Be Isolated or Associated with Other Brain Anomalies: Sometimes linked to conditions like agenesis of the corpus callosum, neural tube defects, or chromosomal abnormalities (e.g., trisomy 21, trisomy 18).
// - Signs on Ultrasound: "Dangling choroid plexus" sign (the choroid plexus appears to droop because of increased ventricular size).
// - Risk of Progression: Some cases may progress to severe ventriculomegaly or hydrocephalus during pregnancy.
// - Potential Impact: Depending on cause and associated anomalies, may be linked to developmental delays after birth — but outcome can still be good if truly isolated.`;

//     case 'severe-ventriculomegaly':
//       return `(Usually identified through a routine anomaly scan, often at 18–22 weeks of gestation):
// - Severe Enlargement of Lateral Ventricles (more than 20 mm): This is a significant enlargement of the lateral ventricles in the brain, which can be detected through ultrasound and confirmed with fetal MRI.
// - Brain Structure Changes: Severe ventriculomegaly often accompanies other brain malformations such as hydrocephalus, corpus callosum agenesis, or cerebral atrophy.
// - Increased Pressure: The enlarged ventricles indicate increased cerebrospinal fluid (CSF) accumulation, which can put pressure on surrounding brain tissue.
// - Potentially Visible Head Size: The head size may appear larger than usual due to the enlarged ventricles, though this can depend on the severity of the condition.`;

//     case 'normal':
//       return `This scan appears to be within normal limits with no detectable abnormalities.`;

//     case 'polencephaly':
//       return `(Detected During Pregnancy)
// - Abnormal Number of Brain Structures: Polencephaly is characterized by the presence of an excessive number of cerebral hemispheres or brain lobes, resulting in an abnormally formed brain.
// - The condition may result in more than two cerebral hemispheres or other structural anomalies in the brain.
// - Severe Brain Malformation: It may present with multiple heads or duplicated brain structures, which is an extreme form of encephalization.
// - Detected via Advanced Imaging: Typically diagnosed through fetal MRI or highly specialized ultrasound, as it is often not apparent on routine ultrasound.`;

//     case 'vein-of-galen':
//       return `Abnormal Blood Flow in Brain:
// - Vein of Galen malformation (VOGM) is a rare condition in which abnormal blood vessels form around the vein of Galen, a large vein in the brain. These blood vessels do not drain properly, leading to increased blood flow.
// - Increased Head Size (Hydrocephalus): The abnormal vessels can lead to hydrocephalus (fluid accumulation in the brain) due to impaired drainage, which may be detected through ultrasound or fetal MRI. The fetal head may appear enlarged as a result of this buildup.
// - Heart Failure in Severe Cases: If the malformation is severe, it can cause high-output heart failure in the fetus, which may be evident through fetal echocardiography.
// - Brain Development Issues: The condition may affect the normal development of brain structures, and signs like delayed brain maturation can be detected through imaging.`;

//     default:
//       return 'No symptom data available.';
//   }
// };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50" style={{ backgroundImage: 'url("/assets/brain bg_.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' } }>
    <div className="bg-white shadow-xl rounded-2xl p-6  "  style={{width:"550px",marginLeft:"350px"}}>
     
        <h3 style={styles.title}>
         Symptoms of {name}
        </h3>
        <p style={{  whiteSpace: 'pre-wrap',
  textAlign: 'left',
  fontSize: '20px', // adjust as needed
  lineHeight: '1.6', // improves readability
  margin: '1rem auto', // centers in parent container
  maxWidth: '600px',
}}>
          {getDescription(name)}
          
        </p>
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
    maxWidth: '700px',
    width:'600px'
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
  }
  
}

export default Symptoms
