import React from 'react';
import styles from './todoForm.module.scss';
import useInputState from "./useInputState";

const TodoForm = ({saveTodo}) => {
  const {value, reset, onChange} = useInputState();

  return (
    <form className={styles.todoForm}
          onSubmit={(event) => {
            event.preventDefault();

            saveTodo(value);
            reset();
          }}
    >
      <input type="text"
             placeholder='Add todo'
             value={value}
             onChange={onChange} />
    </form>
  )
}

export default TodoForm;
        