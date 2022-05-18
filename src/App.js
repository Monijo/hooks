import logo from './logo.svg';
import './App.css';
import StateComponent from "./State";
import Effect from "./Effect";
import Context from "./Context";
import RefComponent from "./Ref";
import ReducerComponent from "./ReducerComponent";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";
import DebugValue from "./DebugValue";
import Id from "./Id";

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
        <hr/>
        <Callback/>
         <hr/>
       <LayoutEffect/>
        <hr/>
        <ImperativeHandle/>
        <hr/>
        <DebugValue/>
        <hr/>
        <Id/>
    </div>
  );
}

export default App;
