import logo from './logo.svg';
import './App.css';
import StateComponent from "./State";
import Effect from "./Effect";
import Context from "./Context";

function App() {
  return (
    <div className="App">
     <StateComponent/>
        <hr/>
        <Effect/>
        <hr/>
        <Context/>
    </div>
  );
}

export default App;
