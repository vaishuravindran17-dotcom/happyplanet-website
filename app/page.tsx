import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Events from "@/components/Events";
import Retreats from "@/components/Retreats";
import Activities from "@/components/Activities";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Events />
        <Retreats />
        <Activities />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
