import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Lazy load all pages to reduce initial JavaScript bundle
const Home = lazy(() => import('./pages/Home'));
const Psiquiatria = lazy(() => import('./pages/Psiquiatria'));
const Psicologia = lazy(() => import('./pages/Psicologia'));
const Endocrinologia = lazy(() => import('./pages/Endocrinologia'));
const Agendamento = lazy(() => import('./pages/Agendamento'));
const AgendamentoExterno = lazy(() => import('./pages/AgendamentoExterno'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

// Loading component for better UX
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;