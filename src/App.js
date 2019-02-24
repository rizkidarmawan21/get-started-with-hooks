import React, { useState } from 'react';

import List from './components/List';
import Input from './components/Input';
import { AppWrapper } from './styles';

const AppContainer = () => {
  let [task, setTask] = useState([
    {
      text: 'Learn hooks',
      isChecked: true,
    },
    {
      text: 'Implement Hooks on Real Project',
      isChecked: false,
    },
  ]);

  function updateTask(id, isCheck) {
    const newState = task;
    const updateState = newState.map((todo, index) => {
      if (index === id) {
        return {
          ...todo,
          isChecked: isCheck,
        };
      }

      return todo;
    });

    setTask((task = updateState));
  }

  function addNewTask(todo) {
    const newTodo = [
      ...task,
      {
        text: todo,
        isChecked: false,
      },
    ];

    setTask((task = newTodo));
  }

  function deleteTask(id) {
    const newTask = task.filter((todo, index) => {
      if (index === id) {
        return undefined;
      }

      return todo;
    });

    setTask((task = newTask));
  }

  const renderFragment = task.map((todo, index) => {
    return (
      <List
        key={index}
        id={index}
        text={todo.text}
        isChecked={todo.isChecked}
        onCheck={updateTask}
        onDelete={deleteTask}
      />
    );
  });

  return (
    <AppWrapper>
      {renderFragment.length === 0 ? 'Tidak ada Task' : renderFragment }
      <Input onAddTodo={addNewTask} />
    </AppWrapper>
  );
};

export default AppContainer;
