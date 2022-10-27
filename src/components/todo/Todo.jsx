import './style.css';

function Button(props) {
    if (!props.todo.isDone) {
        return <button className="doneButton"
            onClick={() => {
                props.setTodos(
                    props.todos.map((todo => {
                        if (todo.id === props.todo.id) {
                            return { ...todo, isDone: true }
                        }
                        return todo
                    }))
                )
            }}
        >Done</button>
    } else {
        return <button className="doneButton"
            onClick={() => {
                props.setTodos(
                    props.todos.map((todo => {
                        if (todo.id === props.todo.id) {
                            return { ...todo, isDone: false }
                        }
                        return todo
                    }))
                )
            }}
        >Cancel</button>
    }
}

function Todo(props) {
    const deleteTodo = (id) => {
        props.setTodos(current =>
            current.filter(todo => {
                return todo.id !== id;
            }),
        );
    };
    return <div className="todo" key={props.key}>
        <div className="todo-title" >
            {props.todo.title}
        </div>
        <div className="todo-context">
            {props.todo.context}
        </div>
        <button className="deleteButton" onClick={() => deleteTodo(props.todo.id)}>Delete</button>
        <Button todos={props.todos} todo={props.todo} setIsDone={props.setIsDone} setTodos={props.setTodos} ></Button>
    </div>
}

export default Todo