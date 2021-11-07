import {useState} from "react";

export default (initialValue) => {
  const [todoText, setTodoText] = useState(initialValue);

  return {
    todoText,
    onChange: event => {
      setTodoText(event.target.value);
    },
  }
}