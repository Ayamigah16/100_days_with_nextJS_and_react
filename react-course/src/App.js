import Todo from "./Todo"
import "./index.css";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React"/>
      <Todo text="Master React"/>
      <Todo text="Become An Expert"/>
      <Todo text="Do Hard Things"/>
    </div>
  );
}

export default App;
