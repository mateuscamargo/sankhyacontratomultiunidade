import { Sidebar } from '../sidebar/Sidebar';
import { Navbar } from '../navbar/Navbar';
import './MainLayout.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <Sidebar />

      <div className="content-area">
        <Navbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
