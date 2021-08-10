import Todo from "./Todo";
import List from "@material-ui/core/List";
function Todos({ todos, onDelete, onToggle }) {

  return (
    <List className="todos-ul">
      {todos.length === 0 && <h1>Hooray 🎉! No pending task</h1>}

      {todos.map((td, index) => {
        return (
          <Todo key={index} todo={td} onDelete={onDelete} onToggle={onToggle} />
        );
      })}
    </List>
  );
}

export default Todos;
