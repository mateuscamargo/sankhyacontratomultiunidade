import '../layout/MainLayout.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-container">
      <div className="sidebar">{/* Sidebar */}</div>

      <div className="layout-main">
        <div className="navbar">{/* Navbar */}</div>

        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
}
