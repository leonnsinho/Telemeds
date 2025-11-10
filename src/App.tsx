import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Psiquiatria from './pages/Psiquiatria';
import Psicologia from './pages/Psicologia';
import Endocrinologia from './pages/Endocrinologia';
import Medicina from './pages/Medicina';
import Ginecologia from './pages/Ginecologia';
import Agendamento from './pages/Agendamento';
import AgendamentoExterno from './pages/AgendamentoExterno';
import ComingSoon from './pages/ComingSoon';
import PoliticasPrivacidade from './pages/PoliticasPrivacidade';
import PoliticasCookies from './pages/PoliticasCookies';
import TermosUso from './pages/TermosUso';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/agendamento-externo" element={<AgendamentoExterno />} />
            <Route path="/psiquiatra" element={<Psiquiatria />} />
            <Route path="/psico" element={<Psicologia />} />
            <Route path="/endocrinologia" element={<Endocrinologia />} />
            <Route path="/medicina" element={<Medicina />} />
            <Route path="/ginecologia" element={<Ginecologia />} />
            <Route path="/politicas-privacidade" element={<PoliticasPrivacidade />} />
          <Route path="/politicas-cookies" element={<PoliticasCookies />} />
          <Route path="/termos-uso" element={<TermosUso />} />
            <Route path="/clinica-geral" element={<ComingSoon specialty="Clínica Geral" />} />
            <Route path="/medicina-da-familia" element={<ComingSoon specialty="Medicina da Família" />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;