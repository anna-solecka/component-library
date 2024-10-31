import { createContext, ReactNode, useContext, useState } from "react";

interface Todo {
  todo: ReactNode;
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  todo: Todo[];
  onAddTodo: (newTodo: Todo) => void;
  onRemove: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const onAddTodo = (newTodo: Todo) => {
    setTodo([...todo, newTodo]);
  };

  const onRemove = (id: number) => {
    setTodo(todo.filter((a) => a.id !== id));
  };
  return (
    <TodoContext.Provider value={{ todo, onAddTodo, onRemove }}>
      {children}
    </TodoContext.Provider>
  );
};
