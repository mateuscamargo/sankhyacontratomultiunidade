import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
          <h1 className="navbar-title">Contratos Multiunidades</h1>
        </div>
        <div className="navbar-right">
          <div className="user-info">
            <span className="user-name">Usuário</span>
            <button className="logout-btn">Sair</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link
            to="/"
            className="mobile-menu-item"
            onClick={() => setMenuOpen(false)}
          >
            <span className="icon">🏠</span>
            <span>Início</span>
          </Link>
          <Link
            to="/contratos"
            className="mobile-menu-item"
            onClick={() => setMenuOpen(false)}
          >
            <span className="icon">📋</span>
            <span>Contratos</span>
          </Link>
          <a
            href="#"
            className="mobile-menu-item"
            onClick={() => setMenuOpen(false)}
          >
            <span className="icon">⚙️</span>
            <span>Configurações</span>
          </a>
          <a
            href="#"
            className="mobile-menu-item"
            onClick={() => setMenuOpen(false)}
          >
            <span className="icon">👤</span>
            <span>Perfil</span>
          </a>
        </div>
      </div>
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
