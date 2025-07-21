import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import
import './index.css';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="team" element={<Team />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
