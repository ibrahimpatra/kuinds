import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FAQs } from "./components/FAQs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFAB";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetail";
import { BlogAdmin } from "./components/BlogAdmin";
import { BlogEditor } from "./components/BlogEditor";
import { AdminLogin } from "./components/AdminLogin";
import { Toaster } from "./components/ui/sonner";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }
  
  return isAdmin ? children : <Navigate to="/admin/login" />;
};

// Home Page Component
const HomePage = () => {
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
    <>
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
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<><Navbar /><BlogList /><Footer /></>} />
            <Route path="/blog/:slug" element={<><Navbar /><BlogDetail /><Footer /></>} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/blog" 
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/blog/new" 
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/blog/edit/:id" 
              element={
                <ProtectedRoute>
                  <BlogEditor />
                </ProtectedRoute>
              } 
            />

            {/* Hidden admin login trigger - triple click on logo */}
            <Route path="/secret-admin-login" element={<Navigate to="/admin/login" />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
