import React, { useState } from 'react';

import List from './components/List';
import Input from './components/Input';
import { AppWrapper } from './styles';

const AppContainer = () => {
  let [todos, setList] = useState([
    {
      text: 'Learn hooks',
      isChecked: true,
    },
    {
      text: 'Implement Hooks on Real Project',
      isChecked: false,
    },
  ]);

  function updateTodos(id, isCheck) {
    const newState = todos;
    const updateState = newState.map((todo, index) => {
      if (index === id) {
        return {
          ...todo,
          isChecked: isCheck,
        }
      }

      return todo;
    })

    setList(todos = updateState);
  }

  function addNewTodo(todo) {
    const newTodo = [
      ...todos,
      {
        text: todo,
        isChecked: false,
      },
    ]

    setList(todos = newTodo);
  };

  const renderFragment = todos.map((todo, index) => {
    return <List key={index} id={index} text={todo.text} isChecked={todo.isChecked} onCheck={updateTodos} />;
  });

  return (
    <AppWrapper>
      {renderFragment}
      <Input onAddTodo={addNewTodo}/>
    </AppWrapper>
  );
};

export default AppContainer;
