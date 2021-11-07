import React, {useState} from 'react';
import styles from './todo.module.scss';
import useTodoTextState from "./useTodoTextState";
import Fade from "react-reveal/Fade";

const Todo = ({id, value, date, done, deleteTodo, markTodoAsDone, editTodo}) => {
  const [editingTodo, setEditingTodo] = useState(false);
  const {todoText, onChange} = useTodoTextState(value);

  return (
    <Fade left opposite >
      <div className={`${styles.todo} ${done && styles.todoDone}`}>
        <div className={styles.todoInfo}>
          {
            !editingTodo
              ? <p className={styles.todoText} onDoubleClick={() => {
                setEditingTodo(true);
              }
              }>{value}</p>
              : <form onSubmit={(event) => {
                event.preventDefault();
                if (todoText) {
                  editTodo(id, todoText);
                  setEditingTodo(false);
                }
              }}>
                <input className={styles.todoEditInput} type="text" value={todoText} onChange={onChange} autoFocus />
              </form>
          }
          <span className={styles.todoDate}>{date}</span>
        </div>
        <div className={styles.todoButtons}>
          {
            done
              ? <button className={styles.todoEditButton} onClick={() => {
                markTodoAsDone(id)
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
                    fill="#333" />
                </svg>
              </button>
              : <button className={styles.todoEditButton} onClick={() => {
                markTodoAsDone(id)
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 7L16.59 5.59L10.25 11.93L11.66 13.34L18 7ZM22.24 5.59L11.66 16.17L7.48 12L6.07 13.41L11.66 19L23.66 7L22.24 5.59ZM0.410004 13.41L6 19L7.41 17.59L1.83 12L0.410004 13.41Z"
                    fill="#333" />
                </svg>
              </button>
          }
          <button className={styles.todoEditButton} onClick={() => {
            setEditingTodo(!editingTodo);
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                fill="#333" />
            </svg>
          </button>
          <button className={styles.todoDeleteButton} onClick={() => {
            deleteTodo(id)
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                    fill="#333" />
            </svg>
          </button>
        </div>
      </div>
    </Fade>
  )
}

export default Todo;
        