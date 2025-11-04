import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="bg-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
