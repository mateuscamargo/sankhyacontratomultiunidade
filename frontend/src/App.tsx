import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`main-container ${isHomePage ? 'home-page' : ''}`}>
      <div className={`app-content ${isHomePage ? 'home-content-full' : ''}`}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
