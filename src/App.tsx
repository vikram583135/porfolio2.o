import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-text-primary">
        <Navbar />
        <AIChatbot />
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
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/cv" element={<ResumePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 px-6 bg-surface-alt border-t border-outline">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 text-sm text-text-secondary">
              <Link to="/" className="hover:text-g-blue transition-colors">Home</Link>
              <Link to="/about" className="hover:text-g-blue transition-colors">About</Link>
              <Link to="/projects" className="hover:text-g-blue transition-colors">Projects</Link>
              <Link to="/resume" className="text-g-blue font-semibold hover:underline flex items-center gap-1">
                <span>Resume</span>
                <span className="w-1.5 h-1.5 rounded-full bg-g-blue"></span>
              </Link>
              <Link to="/blog" className="hover:text-g-blue transition-colors">Blog</Link>
              <Link to="/contact" className="hover:text-g-blue transition-colors">Contact</Link>
            </div>
            <p className="text-text-secondary text-xs sm:text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-text-primary">K S Vinayaka</span> • Built with React & TailwindCSS
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
