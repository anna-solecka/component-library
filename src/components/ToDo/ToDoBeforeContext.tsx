import { useState } from "react";
import "./todo.scss";

const ToDo = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todo, setTodo] = useState<{ id: number; todo: string }[]>([]);
  console.log(newTodo);
  const onAddTodo = (e: React.FormEvent) => {
    if (newTodo !== "") {
      e.preventDefault();
      setTodo([...todo, { id: Date.now(), todo: newTodo }]);
      setNewTodo("");
    } else {
      e.preventDefault();
    }
  };

  const onRemove = (id: number) => {
    setTodo(todo.filter((a) => a.id !== id));
  };
  return (
    <>
      <h2>To Do List</h2>
      <form onSubmit={onAddTodo}>
        <input
          type="text"
          id="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={onAddTodo}>Add</button>
      </form>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.todo}{" "}
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
