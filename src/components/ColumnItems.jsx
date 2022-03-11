//Componente referente as colunas!
import React, { useState } from 'react'

import produce from 'immer';

import BoardContext from '../libs/context';
//Arquivo de dados estático para Testes
import { loadLists } from '../libs/tasks';
import { ColumnsItem } from '../styles/utils'
import List from './List'

const data = loadLists();

export default () => {

  const [lists, setLists] = useState(data);
  const [show, onShow] = useState(false)

  //Função para abrir ou fechar modal de Adicionar Tarefa
  const showOrHidden = () => {
    onShow(!show)
  }

  //Função para Mover ym cards
  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
      
    }))
  }

  //Função para Remover um cards
  function remove(fromList, from){
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
    }))
  }

  //Função para Adicionar um Card
  function add(title, desc,tag){
    
    setLists(produce(lists, draft => {
      const dragged = {
        id: 1,
        title: `${title}`,
        content: `${desc}`,
        tags: [`${tag}`],
      }
      draft[0].cards.splice(0, 0, dragged);
    }))
    }

  return (
    <BoardContext.Provider value={{ lists, move,remove, add }}>
      <ColumnsItem>
      {lists.map((list, index) => <List key={list.title} index={index} data={list} showOrHidden={showOrHidden} 
      show={show} />)}
      </ColumnsItem>
    </BoardContext.Provider>
  );
}