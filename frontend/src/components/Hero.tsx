import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="h-screen flex items-center justify-center bg-gray-800 text-white text-center -mt-16">
      <div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          O Campeonato Global de Trading
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Mostre suas habilidades e concorra a prêmios incríveis.
        </p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition-transform transform hover:scale-105">
          Inscreva-se Já
        </button>
      </div>
    </section>
  );
}

export default Hero;
