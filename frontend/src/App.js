import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FAQs } from "./components/FAQs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFAB";
import { Toaster } from "./components/ui/sonner";

function App() {
  useEffect(() => {
    // SEO: Update page title and meta description
    document.title = "Kuwait India Driving School | Best Driving Lessons in Kuwait | Learn to Drive";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kuwait India Driving School offers professional driving lessons in Kuwait. Expert instructors teaching in English, Hindi, Malayalam, Tamil & Arabic. Pass your driving test on first try! Call +965 55998579');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Kuwait India Driving School offers professional driving lessons in Kuwait. Expert instructors teaching in English, Hindi, Malayalam, Tamil & Arabic. Pass your driving test on first try! Call +965 55998579';
      document.head.appendChild(meta);
    }

    // SEO: Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'driving school kuwait, indian driving school kuwait, kuwait driving lessons, learn to drive kuwait, driving instructor kuwait, kuwait driving test, driving school mahboula, driving school salmiya, hindi driving instructor kuwait, malayalam driving instructor, tamil driving instructor';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <Toaster />
    </div>
  );
}

export default App;
