import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
      <div className="text-center bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Bem-vindo ao Manicure Scheduler</h1>
        <p className="text-gray-600 mb-8">Agende seu horário com praticidade e rapidez</p>
        <Link
          to="/agendar"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-3 px-6 rounded-xl transition"
        >
          Agendar horário
        </Link>
      </div>
    </div>
  );
}
