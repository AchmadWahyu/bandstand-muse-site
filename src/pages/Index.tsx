import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discography from "@/components/Discography";
import Shows from "@/components/Shows";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Discography />
      <Shows />
      <Footer />
    </main>
  );
};

export default Index;
