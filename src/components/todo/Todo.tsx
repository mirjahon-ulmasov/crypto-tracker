// import { Checkbox } from "antd";
// import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { useHistory } from "react-router-dom";
import { ITodo } from "../../types";

import trash from "../../assets/images/trash.svg";
import { ChangeEvent } from "react";

interface TodoProps {
  todo: ITodo;
  onRemove(id: string): void;
  onToggle(id: string): void;
}

const Todo: React.FC<TodoProps> = ({ todo, onRemove, onToggle }) => {
  const history = useHistory();

  function changeHandler(e: ChangeEvent<HTMLDivElement>) {
    onToggle(todo.id);
  }

  return (
    <div className="todo-item">
      <div
        onChange={changeHandler}
        className={todo.completed ? "todo-title completed" : "todo-title"}
      >
        {todo.title}
        <button
          onClick={() => {
            history.push(`/todos/${todo.id}`);
          }}
        >
          GO
        </button>
      </div>
      <img
        src={trash}
        alt="Trash Icon"
        onClick={() => {
          onRemove(todo.id);
        }}
      />
    </div>
  );
};

export default Todo;
