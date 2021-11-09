import './App.css';
import Counter from './components/counter';
import Movies from "./components/movies";
import Counters from "./components/counters";

function App() {
  return (
    <div className="app">
      {/* Header */}
      {/*<Counter></Counter>*/}
      <Counters></Counters>
    </div>
  );
}

export default App;
