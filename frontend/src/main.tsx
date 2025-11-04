import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa o CSS do Tailwind

// Componente do Cabeçalho (Header)
function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Campeonato de Trading</h1>
      <nav>
        <a href="#inicio" className="mx-2 hover:text-blue-400">Início</a>
        <a href="#ranking" className="mx-2 hover:text-blue-400">Ranking</a>
        <a href="#sobre" className="mx-2 hover:text-blue-400">Sobre</a>
        <a href="#regulamento" className="mx-2 hover:text-blue-400">Regulamento</a>
      </nav>
      <div>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 mr-2">Entrar</button>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">Participar Agora</button>
      </div>
    </header>
  );
}

// Componente da Página Principal
function App() {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Header />
      <main className="p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">O Campeonato Global de Trading Começou!</h2>
        <p className="text-lg text-gray-300">Mostre suas habilidades e concorra a prêmios incríveis.</p>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
