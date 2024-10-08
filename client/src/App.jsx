import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/login/Register";
import axios from "axios";

axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:id" element={<Single />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
