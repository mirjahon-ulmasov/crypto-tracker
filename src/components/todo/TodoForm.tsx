import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [todo, setTodo] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(todo);
      setTodo("");
    }
  };

  return (
    <div className="form">
      <label htmlFor="todo">Введите название дела:</label>
      <input
        id="todo"
        value={todo}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        placeholder="Введите название дела"
      />
    </div>
  );
}
