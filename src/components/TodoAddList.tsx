import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./TodoAdd.css";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil-status";

let id = 0;
function getId() {
  return id++;
}

function TodoAddList() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isDone: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="TodoAdd">
      <input
        type="text"
        placeholder="할 일을 작성하세요"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit" onClick={addItem}>
        <MdAddCircleOutline />
      </button>
    </div>
  );
}

export default TodoAddList;
