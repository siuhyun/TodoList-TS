import { RecoilRoot } from "recoil";
import TodoObject from "./components/TodoObject.js";

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoObject />
      </RecoilRoot>
    </div>
  );
};

export default App;
