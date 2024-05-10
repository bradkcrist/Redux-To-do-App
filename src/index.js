import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { toggleTodo, addTodo, updateTodo, deleteTodo } from "./actions";
import "./index.scss";
import { createStore } from "redux";
import todos from "./reducers";

const store = createStore(todos);

console.log("Initial State", store.getState());
console.log("Initial State", store.getState());

store.dispatch(addTodo("Make my Redux App"));
console.log("State after adding first todo", store.getState());

store.dispatch(addTodo("Show me my Redux code"));
console.log("State after adding second todo", store.getState());

store.dispatch(addTodo("Check my Redux code"));
console.log("State after adding third todo", store.getState());

store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());

store.dispatch(toggleTodo(1));
console.log("State after toggling second todo", store.getState());

store.dispatch(updateTodo("Edit the first action", 1));
console.log("State after editing 1st todo", store.getState());

store.dispatch(deleteTodo(2));
console.log("State after deleting the 3rd todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
