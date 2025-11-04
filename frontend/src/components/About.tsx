import React from 'react';

function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-6">Sobre o Campeonato</h3>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          O Campeonato Global de Trading da FP Markets é uma competição de alto nível para traders de todo o mundo.
          O objetivo é simples: alcançar o maior retorno sobre o investimento (ROI) durante o período da competição.
          A plataforma permite que você vincule suas contas MT4/MT5 e acompanhe seu desempenho em tempo real em um ranking global.
        </p>
      </div>
    </section>
  );
}

export default About;
