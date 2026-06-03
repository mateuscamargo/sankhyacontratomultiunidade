import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Contratos } from '../pages/contratos/Contratos';
import { Unidades } from '../pages/unidades/Unidades';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/contratos/:id" element={<Unidades />} />
      </Routes>
    </BrowserRouter>
  );
}
