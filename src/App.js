import logo from './logo.svg';
import './App.css';
import StateComponent from "./State";
import Effect from "./Effect";
import Context from "./Context";
import RefComponent from "./Ref";

function App() {
  return (
    <div className="App">
     <StateComponent/>
        <hr/>
        <Effect/>
        <hr/>
        <Context/>
        <hr/>
        <RefComponent/>
    </div>
  );
}

export default App;
