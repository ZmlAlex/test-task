import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './style.scss';
import Column from '../Column';

const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: {
        cardId: 65434,
        createdAt: '',
        address: '1224 Honeysuckle Ln NW Atlanta, GA 30332',
        type: 'Kitchen',
        description:
          'The ice maker in the freezer doesn’t work. We’ve had it on for the past three days and no ice blabla blabla blabla blabla blabla blabla blabla blabla blabla',
        author: '',
      },
    },
    'task-2': {
      id: 'task-2',
      content: {
        cardId: 65432,
        createdAt: '',
        address: '551 Rosehill Dr. Suite 2A Atlanta, GA 30318',
        type: 'Room 3',
        description:
          'Can you please fix the A/C in this house? We are burning up in this house! We can’t stand it! blabla blabla blabla blabla blabla blabla blabla blabla',
        author: '',
      },
    },
    'task-3': {
      id: 'task-3',
      content: {
        cardId: 15434,
        createdAt: '',
        address: '9820 Bellemeade Ave. Atlanta, GA 30332',
        type: 'Other',
        description:
          'One of the members in this house keeps filling the sink with dirty dishes and won’t wash them. Please blabla blabla blabla blabla blabla blabla blabla ',
        author: '',
      },
    },
    'task-4': {
      id: 'task-4',
      content: {
        cardId: 65434,
        createdAt: '',
        address: '544 Peachtree Industrial Ln. Atlanta, GA 30301',
        type: 'Common Space',
        description:
          'There’s an issue with the sink. It won’t turn on and needs to be fixed ASAP. We need to cook out blabla v blabla blabla blabla blabla blabla ',
        author: '',
      },
    },
    'task-5': {
      id: 'task-5',
      content: {
        cardId: 56434,
        createdAt: '',
        address: '551 Rosehill Dr. Suite 2A Atlanta, GA 30318',
        type: 'Common Space',
        description:
          'Help! There are a trail of ants coming in from a cracked window. They are eating everything! blabla blabla blabla blabla blabla blabla blabla',
        author: '',
      },
    },
    'task-6': {
      id: 'task-6',
      content: {
        cardId: 25563,
        createdAt: '',
        address: '1224 Honeysuckle Lane NW  Atlanta, GA 30332',
        type: 'Other',
        description:
          'Help! There are a trail of ants coming in from a cracked window. They are eating everything! blabla  blabla blabla blabla blabla blabla',
        author: '',
      },
    },
    'task-7': {
      id: 'task-7',
      content: {
        cardId: 65434,
        createdAt: '',
        address: '544 Peachtree Industrial Ln. Atlanta, GA 30301',
        type: 'Common Space',
        description:
          'There’s an issue with the sink. It won’t turn on and needs to be fixed ASAP. We need to cook out blabla blabla blabla blabla blabla blabla ',
        author: '',
      },
    },
    'task-8': {
      id: 'task-8',
      content: {
        cardId: 56434,
        createdAt: '',
        address: '551 Rosehill Dr. Suite 2A Atlanta, GA 30318',
        type: 'Common Space',
        description:
          'Help! There are a trail of ants coming in from a cracked window. They are eating everything! blabla blabla blabla blabla blabla blabla blabla',
        author: '',
      },
    },
    'task-9': {
      id: 'task-9',
      content: {
        cardId: 25563,
        createdAt: '',
        address: '1224 Honeysuckle Lane NW  Atlanta, GA 30332',
        type: 'Other',
        description:
          'Help! There are a trail of ants coming in from a cracked window. They are eating everything! blabla blabla blabla blabla blabla blabla blabla',
        author: '',
      },
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Requests',
      titleColor: 'grey',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Open',
      titleColor: 'blue',
      taskIds: ['task-5', 'task-6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'In progress',
      titleColor: 'yellow',
      taskIds: ['task-7'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Hold',
      titleColor: 'red',
      taskIds: ['task-8'],
    },
    'column-5': {
      id: 'column-5',
      title: 'Complete',
      titleColor: 'green',
      taskIds: ['task-9'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};

const Board = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    // debugger;
    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        <div className="board">
          <div className="board__list">
            {data.columnOrder.map((columnId) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
