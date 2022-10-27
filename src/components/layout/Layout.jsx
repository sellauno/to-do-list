import { useState } from "react";
import './style.css';
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";

function Layout() {
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
    return <Layout></Layout>
}

export default Layout