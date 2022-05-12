import logo from './logo.svg';
import './App.css';
import StateComponent from "./State";
import Effect from "./Effect";
import Context from "./Context";
import RefComponent from "./Ref";
import ReducerComponent from "./ReducerComponent";
import Memo from "./Memo";

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
        <hr/>
        <ReducerComponent/>
        <hr/>
        <Memo/>
    </div>
  );
}

export default App;
