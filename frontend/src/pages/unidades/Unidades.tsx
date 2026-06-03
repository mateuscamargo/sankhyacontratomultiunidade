import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listarUnidades } from '../../services/contratoUnidadeService';
import type { ContratoUnidade } from '../../models/ContratoUnidade';

export function Unidades() {
  const { id } = useParams();

  const [unidades, setUnidades] = useState<ContratoUnidade[]>([]);

  async function carregar() {
    const dados = await listarUnidades(Number(id));
    setUnidades(dados);
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div>
      <h1>Unidades do contrato {id}</h1>

      {unidades.map((u) => (
        <div key={u.ID}>
          <p>Centro de Custo: {u.CODCENCUS}</p>
        </div>
      ))}
    </div>
  );
}
