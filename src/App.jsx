import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import DeploymentPage from "./DeploymentPage";
import HomePage from "./HomePage";
import DesignerDetails from "./DesignerDetails";
import NotFound from "./NotFound";
import Help from "./help"
import Login from "./Login"
import Signup from "./Signup"
import ForgotPassword from "./ForgotPassword"
import ResetPassword  from "./resetPassword"
import Description from "./description";
import Symptoms from "./symptoms";
import Treatment from "./treatment";
import Precautions from "./precautions";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/deploy" element={<DeploymentPage />} />
            <Route path="/designer/:id" element={<DesignerDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/help" element={<Help/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/resetPassword" element={<ResetPassword/>}/>
            <Route path="/description" element={<Description/>}/>
            <Route path="/symptoms" element={<Symptoms/>}/>
            <Route path="/treatment" element={<Treatment/>}/>
            <Route path="/precautions" element={<Precautions/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
