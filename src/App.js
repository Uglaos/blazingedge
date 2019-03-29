import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
              super(props);

              this.state = {
                input: ''
              }
            }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Color />
          <p>{this.props.color1}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


class Color extends Component {
            constructor(props) {
              super(props);

              this.state = {
                color1: [],
                color2: [],
                colorBlack: "#000000",
                input: ''
              }
            }

            componentDidMount() {
              fetch('http://www.colr.org/json/color/random')
              .then(response => response.json())
              .then(data => this.setState({ color1: data.colors[0].hex }));

              setTimeout( () => {
                fetch('http://www.colr.org/json/color/random')
                .then(response => response.json())
                .then(data => this.setState({ color2: data.colors[0].hex }));
                      }, 2500);
                }

            handleChange(event) {
              this.setState({
              input: event.target.value
                });
            }

            render() {
              return(
                <div>
                  <button>Click me</button><br/>
                  <input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
                  <p>{this.state.color1}</p>
                  <p>{this.state.color2}</p>
                </div>
                )
            }
          }

export default App;
