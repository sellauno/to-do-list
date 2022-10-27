import './style.css'
import React, { useId } from 'react'

function Form(props) {
    return <div className="form-input">
        <input
        type="text"
        className="input-field"
        value={props.title}
        onChange={(event) => {
            props.setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        className="input-field"
        value={props.context}
        onChange={(event) => {
            props.setContext(event.target.value);
        }}
      />
      <button
      className="button-add"
        onClick={() => {
            props.setTodos([...props.todos, { id: useId, title: props.title, context: props.context, isDone: props.isDone }]);
            props.setTitle('');
            props.setContext('');
        }}
      >
        Add
      </button>
    </div>
}

export default Form