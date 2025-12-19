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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white via-green-50 via-yellow-50 to-red-50 text-text-primary">
        <Navbar />
        <main className="relative">
          {/* Colorful Background decorations */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ms-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-ms-green/10 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
            <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-ms-yellow/10 rounded-full blur-[100px] animate-pulse-slow delay-500"></div>
            <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-ms-red/8 rounded-full blur-[120px] animate-pulse-slow delay-200"></div>
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

        {/* Colorful Footer */}
        <footer className="relative z-10 py-8 px-6 text-center section-rainbow">
          <p className="text-text-secondary text-sm font-medium">
            © {new Date().getFullYear()} <span className="gradient-text font-bold">K S Vinayaka</span>. Built with React & TailwindCSS
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
