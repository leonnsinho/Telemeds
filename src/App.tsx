import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Psiquiatria from './pages/Psiquiatria';
import Psicologia from './pages/Psicologia';
import Endocrinologia from './pages/Endocrinologia';
import Agendamento from './pages/Agendamento';
import AgendamentoExterno from './pages/AgendamentoExterno';
import ComingSoon from './pages/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/agendamento-externo" element={<AgendamentoExterno />} />
            <Route path="/psiquiatria" element={<Psiquiatria />} />
            <Route path="/psico" element={<Psicologia />} />
            <Route path="/endo" element={<Endocrinologia />} />
            <Route path="/clinica-geral" element={<ComingSoon specialty="Clínica Geral" />} />
            <Route path="/medicina-da-familia" element={<ComingSoon specialty="Medicina da Família" />} />
            <Route path="/ginecologia" element={<ComingSoon specialty="Ginecologia" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;