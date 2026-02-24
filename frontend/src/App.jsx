import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <ToastContainer/>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
    </>
  );
};

export default App;
