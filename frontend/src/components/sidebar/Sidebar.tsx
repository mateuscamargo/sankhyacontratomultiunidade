import { Link } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="nav-item">
          <span className="icon">🏠</span>
          <span>Início</span>
        </Link>
        <Link to="/contratos" className="nav-item">
          <span className="icon">📋</span>
          <span>Contratos</span>
        </Link>
        <a href="#" className="nav-item">
          <span className="icon">⚙️</span>
          <span>Configurações</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">👤</span>
          <span>Perfil</span>
        </a>
      </nav>
    </aside>
  );
}
