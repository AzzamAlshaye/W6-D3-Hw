import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Links from "./components/Links";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Links />
      {/* <Footer /> */}
    </>
  );
}

export default App;
