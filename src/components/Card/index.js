import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ava from '../../assets/ava.svg';
import './style.scss';

const Card = (props) => {
  return (
    <Draggable draggableId={props.task?.id} index={props.index}>
      {(provided) => (
        <div
          className="card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card__id">ID: {props.task.content.cardId}</div>
          <div className="card__time">{props.task.content.createdAt}</div>
          <div className="card__address">{props.task.content.address}</div>
          <div className="card__type">{props.task.content.type}</div>
          <div className="card__description">
            {props.task.content.description}
          </div>
          <div className="card__author">
            <p>Reported by:{props.task.content.author}</p>
            <img src={ava} alt="ava" />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
