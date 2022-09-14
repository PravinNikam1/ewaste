import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Blog from "./components/About/Blog";
import Process from "./components/About/Process";
import Team from './components/About/Team';
import AdminLogin from './components/Admin/AdminLogin';
import DonarLogin from './components/Donar/DonarLogin';
import Register from './components/Donar/Register';
import Contact from './components/Contact/Contact';



import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      <div classname="nb"><Navbar/></div>
     <div>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="blog" element={<Blog />}/>
      <Route path="process" element={<Process />}/>
      <Route path="team" element={<Team />}/>
      <Route path="admin" element={<AdminLogin />}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="donarlogin" element={<DonarLogin/>}/>
      <Route path="register" element={<Register/>}/>
      
    </Routes>
    </div>
    </div>
  );
}

export default App;
