import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Team />
        <Contact />
      </main>
    </>
  );
}
