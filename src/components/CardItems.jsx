//Componente Para os card de Tarefas

import React,{useRef, useContext} from 'react'
import { useDrag, useDrop } from 'react-dnd'

import BoardContext from '../libs/context'

import * as Utils from '../styles/utils'



export default props => {
  const ref = useRef();
  const { move, remove } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index: props.index ,listIndex : props.listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = props.listIndex;

      const draggedIndex = item.index;
      const targetIndex = props.index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }
      
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }
    
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  const remover = (x, y) => {
    remove(x, y)
  }

  

  dragRef(dropRef(ref));

  return (
    <Utils.CardItem ref={ref} isDragging={isDragging}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">{props.data.tags.map((tags, index) =>
          <Utils.TagItem
            key={tags}
            color={props.data.tags[index]}
          />)}
        </div>
        <i className="fa fa-trash" onClick={() => remover(props.listIndex, props.index)}></i>
      </div>

      <Utils.TitleItem>{props.data.title}</Utils.TitleItem>
      <Utils.InputDescItem
        className="form-control"
        value={props.data.content} />

    </Utils.CardItem>
  )
}