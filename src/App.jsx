import Admin from "./pages/Admin";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OnlyLogin from "./auth/OnlyLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<OnlyLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
