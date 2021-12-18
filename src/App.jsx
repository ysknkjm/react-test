import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodoList } from "./components/IncompleteTodoList";
import { CompleteTodoList } from "./components/CompleteTodoList";

export const App = () => {
  const [todoName, setTodoName] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoName === "") return;
    const newTodos = [...incompleteTodos, todoName];
    setIncompleteTodos(newTodos);
    setTodoName("");
  };

  const handleCompleteTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const handleRestoreTodo = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoName={todoName}
        onChange={handleTodoName}
        onClick={handleAddTodo}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです。TODOを消化してください。
        </p>
      )}
      <IncompleteTodoList
        todos={incompleteTodos}
        onComplete={handleCompleteTodo}
        onDelete={handleDeleteTodo}
      />
      <CompleteTodoList todos={completeTodos} onClick={handleRestoreTodo} />
    </>
  );
};
