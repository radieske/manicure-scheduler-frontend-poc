import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Manicure Scheduler</h1>
      <Link
        to="/agendar"
        className="text-white bg-pink-500 px-6 py-2 rounded hover:bg-pink-600 transition"
      >
        Agendar horário
      </Link>
    </div>
  )
}

export default App
