import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Cursor from "@/components/Cursor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />

        <Experience />

        <Certifications />

        <Skills />

        <Projects />

        <Awards />

        <Contact />
{/*
        <Publications />
*/}
      </main>

      <Footer />
    </>
  );
}