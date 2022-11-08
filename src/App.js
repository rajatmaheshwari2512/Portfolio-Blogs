import { useEffect } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "aos/dist/aos.css";

import { HomePage } from "./Components/HomePage/HomePage";
import { BlogPage } from "./Components/BlogPage/BlogPage";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:link" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
