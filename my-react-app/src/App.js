import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import UserLogin from "./components/auth/UserLogin";
import Registration from "./components/auth/Registration";

import LoginReg from "./components/auth/LoginReg";
import Payment from "./components/pages/Payment";
import Announcements_student from "./components/pages/Announcements_student";
import ResetPassword from "./components/pages/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
import Footer from "./components/pages/Footer";
import AdminLogin from "./components/pages/AdminLogin";
import Complaints from "./components/pages/Complaints";
import Announcement from "./components/pages/Announcement";
import { db } from './components/pages/firebaseConfig'
import { MDBContainer } from "mdb-react-ui-kit";
import { AuthProvider } from "./components/pages/UserAuthContext";

import { UserAuthContextProvider } from "./components/pages/UserAuthContext";

function App() {
  return (
    <>
    <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<UserLogin />} />

            <Route path="/signUp" element={<Registration />} />
            

            <Route path="/reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserAuthContextProvider>
     </>
   
  );
}
export default App;

