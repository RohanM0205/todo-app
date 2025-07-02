import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <div className="mt-6 space-y-2">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default ToDoList;
