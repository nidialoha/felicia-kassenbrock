import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Projects />
                <About />
                <Hobbies />
                <Contact />
              </main>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <footer className="bg-gray-50 py-6">
          <div className="container mx-auto px-6">
            <div className="text-center text-gray-600">
              © {new Date().getFullYear()} Felicia Kaßenbrock. Alle Rechte
              vorbehalten.
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <Link
                to="/impressum"
                className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
