import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import { v4 as uuid } from "uuid";
import { ITodo } from "../types";

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  const removeHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleHandler = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Layout>
      <h1>список дел</h1>
      <TodoForm onAdd={addTodoHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </Layout>
  );
};

export default TodoPage;
