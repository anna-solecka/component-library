import { FC, useState } from "react";
import "./todo.scss";
import { useTodo } from "./TodoContext";

const ToDo: FC = () => {
  const { todo, onAddTodo, onRemove } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="todo">
      <h2>To Do List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newTodo === "") return;
          onAddTodo({
            id: Date.now(),
            todo: newTodo,
            text: newTodo,
            completed: false,
          });
          setNewTodo("");
        }}
      >
        <input
          type="text"
          id="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.todo}{" "}
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
