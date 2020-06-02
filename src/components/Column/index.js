import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card';
import './style.scss';

const Column = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div
          className={`column ${
            snapshot.isDraggingOver ? 'column__active' : ''
          }`}
        >
          <div className={`column__title ${column.titleColor}`}>
            {column.title} ({tasks.length})
          </div>

          <div className="column__list">
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => {
                console.log('Task!!!!', task);
                return <Card key={task.id} task={task} index={index} />;
              })}

              {provided.placeholder}
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
