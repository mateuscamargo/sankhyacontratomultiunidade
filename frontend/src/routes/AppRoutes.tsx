import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import { ContratoDetail } from '../pages/contratos/ContratoDetail';
import { Contratos } from '../pages/contratos/Contratos';
import Home from '../pages/home/Home';

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/contratos/:id" element={<ContratoDetail />} />
      </Routes>
    </MainLayout>
  );
}