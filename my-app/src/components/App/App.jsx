import React, { Component } from 'react';
import { connect } from "react-redux";
import Incrementer from '../Incrementer/Incrementer'
import { Header } from 'my-private-package'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <p>count is: {this.props.count}</p>
          <Incrementer />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
