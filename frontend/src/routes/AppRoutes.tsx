import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Contratos } from '../pages/contratos/Contratos';
import { ContratoDetail } from '../pages/contratos/ContratoDetail';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contratos" element={<Contratos />} />
      <Route path="/contratos/:id" element={<ContratoDetail />} />
    </Routes>
  );
}
