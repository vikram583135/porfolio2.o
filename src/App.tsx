import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-text-primary">
        <Navbar />
        <main className="relative">
          {/* Subtle Google-style background accents */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-g-blue/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-g-green/5 rounded-full blur-[100px]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 px-6 bg-surface-alt border-t border-outline">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-text-primary">K S Vinayaka</span> • Built with React & TailwindCSS
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
