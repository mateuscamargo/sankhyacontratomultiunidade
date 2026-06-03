import { useState } from 'react';
import './FilterSidebar.css';

export interface FilterSidebarProps {
  onFiltersChange: (filters: Record<string, string>) => void;
}

export function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState({
    parceiro: '',
    centroResultado: '',
    natureza: '',
    projeto: '',
    situacao: 'Ativo',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleClear = () => {
    const clearedFilters = {
      parceiro: '',
      centroResultado: '',
      natureza: '',
      projeto: '',
      situacao: 'Ativo',
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <button className="btn-filter">
          <span>⏺ Filtro</span>
        </button>
        <button className="btn-clear" onClick={handleClear}>
          ×
        </button>
      </div>

      <div className="filter-content">
        <div className="filter-group">
          <label htmlFor="parceiro">Parceiro</label>
          <input
            id="parceiro"
            type="text"
            placeholder="Buscar..."
            value={filters.parceiro}
            onChange={(e) => handleFilterChange('parceiro', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="centroResultado">Centro Resultado</label>
          <input
            id="centroResultado"
            type="text"
            placeholder="Buscar..."
            value={filters.centroResultado}
            onChange={(e) =>
              handleFilterChange('centroResultado', e.target.value)
            }
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="natureza">Natureza</label>
          <input
            id="natureza"
            type="text"
            placeholder="Buscar..."
            value={filters.natureza}
            onChange={(e) => handleFilterChange('natureza', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="projeto">Projeto</label>
          <input
            id="projeto"
            type="text"
            placeholder="Buscar..."
            value={filters.projeto}
            onChange={(e) => handleFilterChange('projeto', e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="situacao">Situação</label>
          <select
            id="situacao"
            value={filters.situacao}
            onChange={(e) => handleFilterChange('situacao', e.target.value)}
            className="filter-select"
          >
            <option value="">Todos</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="numeroContrato">Número do contrato</label>
          <input
            id="numeroContrato"
            type="text"
            placeholder="Buscar..."
            className="filter-input"
          />
        </div>
      </div>
    </div>
  );
}
