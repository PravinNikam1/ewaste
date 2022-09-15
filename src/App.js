import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/About/Blog";
import Process from "./components/About/Process";
import Team from "./components/About/Team";
import AdminLogin from "./components/Admin/AdminLogin";
import DonarLogin from "./components/Donar/DonarLogin";
import Register from "./components/Donar/Register";
import Contact from "./components/Contact/Contact";
import ForgotPasswordDonar from "./components/Donar/ForgotPasswordDonar";
import ForgotPasswordAdmin from "./components/Admin/ForgotPasswordAdmin";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar />

        <div style={{height:"115px"}}></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="process" element={<Process />} />
          <Route path="team" element={<Team />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donarlogin" element={<DonarLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassworddonar" element={<ForgotPasswordDonar />} />
          <Route path="forgotpasswordadmin" element={<ForgotPasswordAdmin />} />
        </Routes>
    
    </div>
  );
}

export default App;
