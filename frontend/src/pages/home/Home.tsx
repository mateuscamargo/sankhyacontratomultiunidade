import './Home.css';

export default function Home() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao sistema de contratos multiunidade</p>

      <div style={cardContainer}>
        <div style={card}>
          <h3>Contratos</h3>
          <p>Gerencie todos os contratos cadastrados</p>
        </div>

        <div style={card}>
          <h3>Unidades</h3>
          <p>Console das unidades vinculadas</p>
        </div>
      </div>
    </div>
  );
}

const cardContainer: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
};

const card: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '6px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  width: '250px',
};
