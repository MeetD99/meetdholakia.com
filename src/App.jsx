import { useEffect, useState } from "react";
import Preloader from "./components/PreLoader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  useEffect(()=>{
    window.addEventListener("blur", () => {
      document.title = "Come Back :(";
      document.querySelector('link[rel="icon"]').href = '/sad.png'
    });
    window.addEventListener("focus", () => {
      document.title = "Meet Dholakia | Portfolio";
      document.querySelector('link[rel="icon"]').href = '/logo.png'
    })

    console.log(document.querySelector('link[rel="icon"]'))
  }, [])
  const [loading, setLoading] = useState(true);

  return loading ? <Preloader onComplete={() => setLoading(false)} /> : <MainContent />;
};

const MainContent = () => (
  <>   
    <CustomCursor />
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  
  </>
  
);

export default App;
