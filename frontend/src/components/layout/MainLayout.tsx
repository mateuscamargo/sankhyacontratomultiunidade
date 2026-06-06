import { useLocation } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';
import { Sidebar } from '../sidebar/Sidebar';
import './MainLayout.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hideSidebar = isHome || location.pathname.startsWith('/contratos');

  return (
    <div className={`app ${hideSidebar ? 'no-sidebar' : ''}`}>
      {!hideSidebar && <Sidebar />}

      <div className={`content-area ${hideSidebar ? 'no-sidebar' : ''}`}>
        <Navbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
