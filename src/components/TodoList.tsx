import "./TodoList.css";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil-status";
interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

// ! TODO:
const replaceItemAtIndex = (arr: T[], index: number, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoList = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const checkComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };
  const deletList = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="todoList">
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={checkComplete}
      />
      <button onClick={deletList}>X</button>
    </div>
  );
};

export default TodoList;
