import React, { useState } from 'react';
import { func } from 'prop-types';

import { inputWrapper, inputStyle, buttonStyle } from './styles';

const InputTodos = ({ onAddTodo }) => {
  let [text, setText] = useState('');

  function onKeyHandler(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  function addTask() {
    onAddTodo(text);
    setText(text = '');
  }

  return (
    <div className={inputWrapper}>
      <input
        className={inputStyle}
        type="text" value={text} name="input-todos"
        placeholder="Masukan aktifitas baru.."
        onKeyPress={(e) => onKeyHandler(e)}
        onChange={(e) => setText(text = e.target.value )} />
      <button className={buttonStyle} onClick={() => addTask()}>Tambah</button>
    </div>
  );
};

InputTodos.propTypes = {
  onAddTodo: func.isRequired,
};

export default InputTodos;
