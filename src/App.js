import React from 'react';
import {Component} from 'react';
import logo from './logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Home';
import Calendar from './Calender';
import ResultComponent from'./component/result';
import KeyPadComponent from './component/ui';

class App extends Component{


  constructor(){
    super();

    this.state = {
        result: ""
    }
}
calculate = () => {
  try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""
      })
  } catch (e) {
      this.setState({
          result: "error"
      })

  }
};

reset = () => {
  this.setState({
      result: ""
  })
};

render() {
    return (
        <div>
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <ResultComponent result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        </div>
    );
}
}

export default App;
