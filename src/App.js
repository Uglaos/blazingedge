import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.inputValue}</p>
          <Color input={this.state.inputValue} handleChange={this.handleChange}/>

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
      colorBlack: "000000",
      currentColor: ""
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if(this.state.currentColor === this.state.colorBlack) {

      let random = Math.floor(Math.random() * 10) + 1;
      if(random <= 5) {
        this.setState({
        currentColor: this.state.color1
          });
        } 
      else {
        this.setState({
        currentColor: this.state.color2
          });
        }
    } 
    else {
      this.setState({
      currentColor: this.state.colorBlack
        });
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


  render() {
    return(
      <div>
        <button onClick={this.changeColor}>Click me to change color</button><br/>
        <span className="dot" style={{backgroundColor: '#' + this.state.currentColor}}></span><br/>
        <input
          placeholder="Type to show text"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
      </div>
      )
  }
  }

export default App;
