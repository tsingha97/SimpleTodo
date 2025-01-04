import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const todoDelete = () => {
    deleteTodo(todoDetails.id)
  }

  return (
    <li>
      <div className="todo-card">
        <p>{todoDetails.title}</p>
        <button type="button" onClick={todoDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
