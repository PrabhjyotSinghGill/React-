import './App.css';
import Counters from "./components/counters";
import Navbar from './components/navbar';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Counters></Counters>
    </div>
  );
}

export default App;
