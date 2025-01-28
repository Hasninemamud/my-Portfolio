import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <Exprience/>
      <Projects />
      <Skills />
      <Contact />
      
    </div>
  );
}