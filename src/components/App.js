import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese.js'
import logo from '../logo.svg';
import './styles/App.css';
import CheeseList from './cheeseList.js'
class App extends Component {
  getCheeses(){
    this.props.dispatch(fetchCheeses());
  }
  render() {
    const cheeseArray = this.getCheeses()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CheeseList cheeseData={cheeseArray} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cheeses:state.cheeses,
  loading:state.loading,
  error:state.error,

})


export default connect(mapStateToProps)(App);
