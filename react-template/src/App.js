import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import {Header} from "./components/Header/Header";

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
      <React.Fragment>
          <Header onMenuBtnClick={this.handleMenuBtnClick}/>
          <Wrapper menuBtnState={this.state.menuBtn}/>
      </React.Fragment>)
    }
}

export default App;
