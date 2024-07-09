import Admin from "./pages/Admin";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OnlyLogin from "./auth/OnlyLogin";
import OnlyNotLogin from "./auth/OnlyNotLogin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/admin"
          element={
            <OnlyLogin>
              <Admin />
            </OnlyLogin>
          }
        />
        <Route
          path="/login"
          element={
            <OnlyNotLogin>
              <Login />
            </OnlyNotLogin>
          }
        />
        <Route
          path="/*"
          element={
            <NotFound/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
