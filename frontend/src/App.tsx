import { BrowserRouter, useLocation } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const showSidebar = !isHomePage;

  return (
    <div className={`main-container ${isHomePage ? 'home-page' : ''}`}>
      {showSidebar && <Sidebar />}
      <div className={`app-content ${isHomePage ? 'home-content-full' : ''}`}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppContent />
      <Footer />
    </BrowserRouter>
  );
}
