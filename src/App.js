import './App.css';
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";


function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      
      <Todos/>
    </div>
  );
}

export default App;
