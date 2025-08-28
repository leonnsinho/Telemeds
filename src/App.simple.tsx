import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Endocrinologia from './pages/Endocrinologia'
import Psicologia from './pages/Psicologia'
import Psiquiatria from './pages/Psiquiatria'
import Agendamento from './pages/Agendamento'
import AgendamentoExterno from './pages/AgendamentoExterno'
import ComingSoon from './pages/ComingSoon'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/endo" element={<Endocrinologia />} />
            <Route path="/endocrinologia" element={<Endocrinologia />} />
            <Route path="/psico" element={<Psicologia />} />
            <Route path="/psicologia" element={<Psicologia />} />
            <Route path="/clinica-medica" element={<Psiquiatria />} />
            <Route path="/psiquiatria" element={<Psiquiatria />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/agendamento-externo" element={<AgendamentoExterno />} />
            <Route path="/em-breve" element={<ComingSoon specialty="Especialidade" />} />
            <Route path="*" element={<ComingSoon specialty="Página" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
