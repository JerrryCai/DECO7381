import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/about";
import Home from "./pages/home";
import Signup from "./pages/signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
