import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import {Header} from "./components/Header/Header";
import {FirebaseState} from "./context/firebase/FirebaseState";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuBtnClick = this.handleMenuBtnClick.bind(this);
        this.state = {
            menuBtn: true
        }
    }

    handleMenuBtnClick() {
        this.setState({
            menuBtn: !this.state.menuBtn
        });
    }

    render() {
      return (
      <FirebaseState>
          <Header onMenuBtnClick={this.handleMenuBtnClick}/>
          <Wrapper menuBtnState={this.state.menuBtn}/>
      </FirebaseState>)
    }
}

export default App;
