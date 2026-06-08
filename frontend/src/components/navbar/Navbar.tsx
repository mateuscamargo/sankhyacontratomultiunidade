import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [menuResults, setMenuResults] = useState<any[]>([]);
  const [allContracts, setAllContracts] = useState<any[] | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    function onResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  async function loadAllContracts() {
    if (allContracts) return allContracts;
    const res = await api.get('/contratos');
    setAllContracts(res.data || []);
    return res.data || [];
  }

  async function handleSearchChange(value: string) {
    setQuery(value);
    if (value.trim().length === 0) {
      setResults([]);
      setMenuResults([]);
      setShowDropdown(false);
      return;
    }

    // menu items (static menu of the app)
    const menuItems = [
      {
        id: 'contratos',
        label: 'Contratos',
        icon: '📋',
        route: '/contratos',
        description: 'Contratos e Serviços » Arquivos',
        popular: true,
      },
    ];

    const matchedMenu = menuItems.filter((m) => m.label.toLowerCase().includes(value.toLowerCase()));
    setMenuResults(matchedMenu);

    const list = await loadAllContracts();
    const filtered = list.filter((c: any) => {
      const text = `${c.numContrato} ${c.nomeParc}`.toLowerCase();
      return text.includes(value.toLowerCase());
    });
    setResults(filtered.slice(0, 10));
    setShowDropdown(true);
  }

  function goToContract(numContrato: number) {
    setShowDropdown(false);
    setQuery('');
    navigate(`/contratos/${numContrato}`);
  }

  function goToRoute(route: string) {
    setShowDropdown(false);
    setQuery('');
    navigate(route);
  }

  return (
    <>
      <nav className="navbar topbar">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </button>

          <div className="brand">
            <Link to="/" className="brand-logo" onClick={() => setMenuOpen(false)}>Sankhya</Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="search" ref={dropdownRef}>
            <input
              className="search-input"
              placeholder="Pesquisar"
              value={query}
              onChange={(e) => void handleSearchChange(e.target.value)}
              onFocus={() => { if (results.length || menuResults.length) setShowDropdown(true); }}
            />
            <button
              className="search-btn"
              onClick={async () => {
                await handleSearchChange(query);
              }}
            >
              Pesquisar
            </button>

            {showDropdown && (
              <div className="search-dropdown">
                {menuResults.length > 0 && (
                  <div className="menu-section">
                    <div className="section-title">Mais utilizada</div>
                    {menuResults.map((m) => (
                      <div key={m.id} className="search-item menu-item" onClick={() => goToRoute(m.route)}>
                        <div className="menu-icon">{m.icon}</div>
                        <div className="menu-body">
                          <div className="menu-title">{m.label}</div>
                          <div className="menu-desc">{m.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {results.length > 0 ? (
                  results.map((r) => (
                    <div key={r.numContrato} className="search-item" onClick={() => goToContract(r.numContrato)}>
                      <div className="s-left">{r.numContrato}</div>
                      <div className="s-right">{r.nomeParc}</div>
                    </div>
                  ))
                ) : (
                  menuResults.length === 0 && (
                    <div className="search-empty">Nenhum resultado</div>
                  )
                )}
              </div>
            )}
          </div>

          <button className="icon-btn" title="Ajuda">?</button>
          <button className="icon-btn" title="Notificações">🔔</button>
          <div className="avatar" title="Usuário">MC</div>
        </div>
      </nav>

      {/* Desktop App Launcher (opens when menuOpen and not small screen) */}
      {!isSmallScreen && menuOpen && (
        <div className="app-launcher" role="dialog" aria-label="App Launcher">
          <div className="app-launcher-inner">
            <div className="app-launcher-grid">
              {[
                { id: 'contratos', label: 'Contratos', icon: '📋', route: '/contratos' },
              ].map((a) => (
                <div
                  key={a.id}
                  className="app-item"
                  onClick={() => {
                    setMenuOpen(false);
                    if (a.route) navigate(a.route);
                  }}
                >
                  <div className="app-icon">{a.icon}</div>
                  <div className="app-label">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Mobile Menu overlay for small screens (renders only on small viewports) */}
      {isSmallScreen && (
        <>
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
              <Link to="/" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
                <span className="icon">🏠</span>
                <span>Início</span>
              </Link>
              <Link to="/contratos" className="mobile-menu-item" onClick={() => setMenuOpen(false)}>
                <span className="icon">📋</span>
                <span>Contratos</span>
              </Link>
            </div>
          </div>
          {menuOpen && <div className="mobile-menu-overlay open" onClick={() => setMenuOpen(false)} />}
        </>
      )}
    </>
  );
}
