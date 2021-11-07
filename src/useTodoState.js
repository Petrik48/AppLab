import {useState} from "react";

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  const today = new Date();
  const date = [('0' + today.getDate()).slice(-2), ('0' + today.getMonth()).slice(-2), today.getFullYear()].join('-');
  const time = [today.getHours(), ('0' + today.getMinutes()).slice(-2), ('0' + today.getSeconds()).slice(-2)].join(':');
  const dateTime = date + ' ' + time;

  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, {
        id: Math.random().toString(36).substr(2, 9),
        text: todoText,
        date: dateTime,
        done: false,
      }]);
    },
    deleteTodo: (todoId) => {
      setTodos(todos.filter(todo => todo.id !== todoId))
    },
    markTodoAsDone: (id) => {
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo;
      }))
    },
    editTodo: (id, newText) => {
      setTodos(todos.map(todo => {
        if (todo.id === id && todo.text !== newText) {
          todo.text = newText;
          todo.date = dateTime;
        }
        return todo;
      }))
    }
  }
}