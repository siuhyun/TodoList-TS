import "./TodoObject.css";
import { useRecoilValue } from "recoil";
import { filterTodoState } from "../recoil-status";
import TodoAddList from "./TodoAddList";
import TodoList from "./TodoList";

const TodoObject: React.FC = () => {
  const todoList = useRecoilValue(filterTodoState);
  return (
    <div className="object">
      <h3>Recoil로 TodoList </h3>
      <TodoAddList />
      {todoList.map((todoItem) => (
        <TodoList item={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
};
export default TodoObject;
