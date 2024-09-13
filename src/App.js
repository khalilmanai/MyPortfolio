import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

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
    </div>
  );
}
export default App;
