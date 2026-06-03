import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <h2>Contratos</h2>
      <Link to="/">Home</Link>
      <Link to="/contratos">Contratos</Link>
    </nav>
  );
}
