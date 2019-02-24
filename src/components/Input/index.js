import React, { useState } from 'react';
import { func } from 'prop-types';

import { inputWrapper, inputStyle, buttonStyle } from './styles';

const InputTodos = ({ onAddTodo }) => {
  let [text, setText] = useState('');

  return (
    <div className={inputWrapper}>
      <input
        className={inputStyle}
        type="text" value={text} name="input-todos"
        placeholder="Masukan aktifitas baru.."
        onChange={(e) => setText(text = e.target.value )} />
      <button className={buttonStyle} onClick={() => {
        onAddTodo(text);
        setText(text = '');
      }}>Tambah</button>
    </div>
  );
};

InputTodos.propTypes = {
  onAddTodo: func.isRequired,
};

export default InputTodos;
