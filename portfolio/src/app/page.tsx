import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
// import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Experience />

        <Certifications />

        <Skills />

        <Projects />

        <Awards />
{/*
        <Publications />

        <Contact /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}