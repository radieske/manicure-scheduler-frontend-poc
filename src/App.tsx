import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Agendar from "./pages/Agendar"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
      </Routes>
    </>
  )
}

export default App
