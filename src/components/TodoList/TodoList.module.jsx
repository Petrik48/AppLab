import React from 'react';
import styles from './todoList.scss';
import Todo from "./Todo/Todo";

const TodoListModule = ({todos, deleteTodo, markTodoAsDone, editTodo}) => {
  const todoListElements = todos.map((todo, index) => {
    return <Todo key={index}
                 id={todo.id}
                 value={todo.text}
                 date={todo.date}
                 done={todo.done}
                 deleteTodo={deleteTodo}
                 markTodoAsDone={markTodoAsDone}
                 editTodo={editTodo}
    />
  })

  return (
    <div className={styles.todoList}>
      {todoListElements}
    </div>
  )
}

export default TodoListModule;
        