import { useState } from "react";
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [done, setDone] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Study React",
      context: "Let's study React!",
      done: false
    },
  ]);
  return (
    <div className="container">
      <div className="header">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        value={context}
        onChange={(event) => {
          setContext(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title, context: context, done: done }]);
        }}
      >
        To Do
      </button>

      <h1>Todo List</h1>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="todo-title" >
              {todo.title}
            </div>
            <div className="todo-context">
              {todo.context}
            </div>
            <button className="deleteButton">Delete</button>
            <button className="doneButton"
              onClick={() => {
                setDone(true)
                setTodos([...todos, { id: todo.id, title: todo.title, context: todo.context, done: done }]);
                // setTodos([...todos, { id: todos.id, done: done }]);
              }}
            >Done</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;