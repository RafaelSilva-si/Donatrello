//Colunas referente a listagem dos cards
import React, { useContext } from 'react';

import Card from './CardItems';
import ModalAdd from './ModalAdd'
import * as Utils from '../styles/utils';


import BoardContext from '../libs/context'

export default ({ data, index: listIndex, showOrHidden, show }) => {
  const { add } = useContext(BoardContext);

  return (
    <Utils.ContainerCard done={data.done}>
      <header>
        <Utils.TitleItem>{data.title}</Utils.TitleItem>
        {data.creatable && (
          <icon className="fa fa-plus" onClick={() => showOrHidden()}></icon>
        )}
      </header>
      <ModalAdd
        onSubmit={(desc, title, tag) => add(desc, title, tag)}
        show={show}
        close={showOrHidden} />
      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
      </ul>
    </Utils.ContainerCard >
  );
}