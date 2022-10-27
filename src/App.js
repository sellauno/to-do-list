import { useState } from "react";
import './App.css';
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";

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
      <Form todos={todos} setTitle={setTitle} setContext={setContext} setTodos={setTodos} context={context} title={title} isDone={isDone}></Form>

      <h1>Todo List</h1>
      <List todos={todos}setIsDone={setIsDone} setTodos={setTodos}></List>
    </div>
  );
}

export default App;