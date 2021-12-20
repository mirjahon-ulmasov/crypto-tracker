import { FC } from "react";
import { ITodo } from "../../types";
import Todo from "./Todo";

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: string): void;
  onRemove(id: string): void;
}

const TodoList: FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todo-list">
      {todos.map((el) => {
        return (
          <Todo key={el.id} todo={el} onRemove={onRemove} onToggle={onToggle} />
        );
      })}
    </div>
  );
};

export default TodoList;
