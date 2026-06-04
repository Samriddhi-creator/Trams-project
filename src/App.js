import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Services from './sections/services';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';

/**
 * App Component
 * Root component of the application.
 * Wraps the global Navbar, the main page sections (Hero, Showcase, Services, Testimonials, Newsletter),
 * and the global Footer within a parent layout container.
 */
function App() {
  return (
    <div className="app-container">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Content containing all section components */}
      <main>
        <Hero />
        <Showcase />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;