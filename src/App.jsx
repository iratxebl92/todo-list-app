
import { TodoApp } from "./TodoApp/screen/TodoApp";
import { TodoProvider } from "./core/context/TodoProvider";


function App() {
  return (
    <TodoProvider>

        <TodoApp />
  
    </TodoProvider>
  );
}

export default App;
