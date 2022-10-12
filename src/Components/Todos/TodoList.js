import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <p class='mt-[3%] ml-[10%] text-[24px] text-[#fff]'>Welcome {localStorage.getItem("name")}</p>
    <div class='flex flex-col justify-start w-[520px] min-h-[600] bg-[#161a2b] text-center mx-[auto] mt-[128px] rounded-[10px] pb-[32px]'>
      <h1 class='mx-[0] my-[32px] text-[24px] text-[#fff]'>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <button onClick={logout} className="logout">
        LogOut
      </button>
      <button onClick={deleteAccount} className="delete">
        Delete
      </button>
    </div>
    </div>
  );
}

export default TodoList;
