import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  const apps = [
    {
      id: 'contratos',
      title: 'Contratos',
      icon: '📋',
      description: 'Gerencie contratos multiunidades',
      link: '/contratos',
      color: '#1976d2',
    },
    {
      id: 'unidades',
      title: 'Unidades',
      icon: '🏢',
      description: 'Consulte unidades dos contratos',
      link: '#',
      color: '#388e3c',
    },
    {
      id: 'relatorios',
      title: 'Relatórios',
      icon: '📊',
      description: 'Gere relatórios e análises',
      link: '#',
      color: '#f57c00',
    },
    {
      id: 'configuracoes',
      title: 'Configurações',
      icon: '⚙️',
      description: 'Personalize o sistema',
      link: '#',
      color: '#7b1fa2',
    },
  ];

  return (
    <div className="home-container">
      <div className="desktop-background" />

      <div className="desktop-content">
        <div className="desktop-greeting">
          <h1>Bom dia, SUP</h1>
          <p>Bem-vindo ao Sistema de Contratos TRC</p>
        </div>

        <div className="cards-grid">
          {apps.map((app) => (
            <Link
              key={app.id}
              to={app.link}
              className="app-card"
              style={{ '--card-color': app.color } as React.CSSProperties}
            >
              <div className="card-icon">{app.icon}</div>
              <div className="card-content">
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
              <div className="card-hover">Abrir →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
