import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Campeonato de Trading</h1>
      <nav className="hidden md:flex">
        <a href="#inicio" className="mx-3 hover:text-blue-400 transition-colors">Início</a>
        <a href="#ranking" className="mx-3 hover:text-blue-400 transition-colors">Ranking</a>
        <a href="#sobre" className="mx-3 hover:text-blue-400 transition-colors">Sobre</a>
        <a href="#regulamento" className="mx-3 hover:text-blue-400 transition-colors">Regulamento</a>
      </nav>
      <div>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 mr-2 transition-colors">Entrar</button>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-colors">Participar Agora</button>
      </div>
    </header>
  );
}

export default Header;
