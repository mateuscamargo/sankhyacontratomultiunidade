import { useEffect, useState } from 'react';
import { listarContratos } from '../../services/contratoService';
import { Link } from 'react-router-dom';
import type { Contrato } from '../../models/Contrato';

export function Contratos() {
  const [contratos, setContratos] = useState<Contrato[]>([]);

  async function carregar() {
    const dados = await listarContratos();
    setContratos(dados);
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div>
      <h1>Contratos</h1>

      {contratos.map((c) => (
        <div key={c.NUMCONTRATO}>
          <p>Contrato: {c.NUMCONTRATO}</p>
          <p>Parceiro: {c.CODPARC}</p>

          <Link to={`/contratos/${c.NUMCONTRATO}`}>Ver unidades</Link>
        </div>
      ))}
    </div>
  );
}
