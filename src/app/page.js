import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <Experience />
          {/*<Projects />*/}
            <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </>
  );
}