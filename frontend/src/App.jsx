import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import PrivateRoute from './guards/PrivateRoute'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
