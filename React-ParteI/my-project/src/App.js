import React from 'react';

import Tabela from './components/Tabela';

const autores =  [
  {
    nome: 'Paulo',
    livro: 'React',
    preco: '1000'
  },
  {
    nome: 'Daniel',
    livro: 'Java',
    preco: '99'
  },
  {
    nome: 'Marcos',
    livro: 'Design',
    preco: '150'
  },
  {
    nome: 'Bruno',
    livro: 'DevOps',
    preco: '100'
  }
];

function App() {
  return (
    <Tabela autores={autores} />
  );
}

export default App;
