import { useState } from "react";
import './App.css';
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";

function App() {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Study React",
      context: "Let's study React!",
      isDone: false
    },
  ]);
  return (
    <div className="container">
      <Header></Header>
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
          setTodos([...todos, { id: todos.length + 1, title: title, context: context, isDone: isDone }]);
        }}
      >
        To Do
      </button>

      <h1>Todo List</h1>
      <div className="todos-container">
        <div className="working-list">
          <h2>Working</h2>
          {todos.filter(todo => todo.isDone === false).map((todo) => (
            <><Todo todos={todos} todo={todo} key={todo.id} setIsDone={setIsDone} setTodos={setTodos}></Todo>
            </>
          ))}
        </div>
        <div className="working-list">
          <h2>Complete</h2>
          {todos.filter(todo => todo.isDone === true).map((todo) => (
            <><Todo todos={todos} todo={todo} key={todo.id} setIsDone={setIsDone} setTodos={setTodos}></Todo>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;