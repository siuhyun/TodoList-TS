import { atom, selector } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});
const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
const filterTodoState = selector({
  key: "filterTodoState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
export { todoListState, todoListFilterState, filterTodoState };
