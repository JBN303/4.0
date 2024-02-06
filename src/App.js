import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Interface from "./components/Interface";
import Login from "./components/Doctor/Login";
import SignUp from "./components/Doctor/SignUp";
import DoctorPage from './components/Doctor/DoctorPage';
import Interfac from './components/Admin/Interfac'
import AdminLogin from "./components/Admin/AdminLogin";
import Psignup from "./components/Patient/Psignup";
import Plogin from "./components/Patient/Plogin";
import DoctorList from './components/Admin/DoctorList';
import Myappoinments from "./components/Doctor/Myappoinments";
import PatientView from "./components/Admin/PatientView";
import PatientProfile from "./components/Patient/PatientProfile";
import Patientinterface from "./components/Patientinterface";
import Psidebar from "./components/Patient/Psidebar";

function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interface/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/patient login' element={<Plogin/>}></Route>
      
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/patient register' element={<Psignup />}></Route>
      <Route path='/admin' element={<AdminLogin />}></Route>
      <Route path='/doctorview' element={<DoctorList />}></Route>
      <Route path="/doctor/:userId" element={<DoctorPage />} />
      <Route path='/admindashboard' element={<Interfac/>}></Route>
      <Route path='/Myapp' element={<Myappoinments/>}></Route>
      <Route path='/pview' element={<PatientView/>}></Route>
      <Route path='/patient/:id' element={<PatientProfile />} />
      <Route path="/pprofile" element={<Patientinterface/>}/>
      <Route path="/psidebar/:id" element={<Psidebar/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
