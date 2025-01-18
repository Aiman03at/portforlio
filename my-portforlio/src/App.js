
import Header from './components/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <About />
      <Projects />
      <Skills />
      
      <Contact />
    </main>
  );

}