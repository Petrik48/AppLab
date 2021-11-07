import React from "react";
import styles from './App.scss';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoListModule from "./components/TodoList/TodoList.module";
import useTodoState from "./useTodoState";

const App = (props) => {
  const {todos, addTodo, deleteTodo, markTodoAsDone, editTodo} = useTodoState([]);

  return (
    <div className="app">
      <TodoForm
        saveTodo={(todoText) => {
          if (todoText.length > 0 && todos.filter((todo => todo.text === todoText)).length === 0) {
            addTodo(todoText);
          }
        }} />
      <TodoListModule todos={todos} deleteTodo={deleteTodo} markTodoAsDone={markTodoAsDone} editTodo={editTodo}/>
    </div>
  );
}

export default App;
