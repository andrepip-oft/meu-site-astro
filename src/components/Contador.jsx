import { useState } from 'react';

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div style={{ padding: '1rem', border: '2px solid #7c3aed', borderRadius: '8px', margin: '1rem 0' }}>
      <p>Cliques: <strong>{contagem}</strong></p>
      <button 
        onClick={() => setContagem(contagem + 1)}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Incrementar
      </button>
    </div>
  );
}
