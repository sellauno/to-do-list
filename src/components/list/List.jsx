import Todo from "../todo/Todo";

function List(props){
    return <div className="todos-container">
    <div className="working-list">
      <h2>Working</h2>
      {props.todos.filter(todo => todo.isDone === false).map((todo) => (
        <><Todo todos={props.todos} todo={todo} key={todo.id} setIsDone={props.setIsDone} setTodos={props.setTodos}></Todo>
        </>
      ))}
    </div>
    <div className="working-list">
      <h2>Complete</h2>
      {props.todos.filter(todo => todo.isDone === true).map((todo) => (
        <><Todo todos={props.todos} todo={todo} key={todo.id} setIsDone={props.setIsDone} setTodos={props.setTodos}></Todo>
        </>
      ))}
    </div>
  </div>
}

export default List