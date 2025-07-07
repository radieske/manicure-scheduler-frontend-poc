import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Bem-vindo</h1>
      <p className="text-center mb-4">Agende seu horário facilmente</p>
      <Link to="/agendar">
        <button className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Ir para agendamento
        </button>
      </Link>
    </div>
  </div>
  );
}