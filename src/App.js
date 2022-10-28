import { useEffect } from "react";
import AOS from "aos";

import "./App.css";
import "aos/dist/aos.css";

import { HomePage } from "./Components/HomePage/HomePage";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
