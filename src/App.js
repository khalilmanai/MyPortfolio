import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
export default App;
