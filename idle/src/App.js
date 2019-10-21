import React from 'react';
// import logo from './logo.svg';
import '../src/css/App.css';
import Town from './containers/Town'
class App extends React.Component {
  state={
    showtown: false
  }
  handleClick=()=>{
    console.log("town")
    this.setState({
      showtown: true
    })
  }
  returnTown=()=>{
    return this.state.showtown ? <Town />
    : 
    <img 
    className="Enter"
    onClick={this.handleClick}
    src='https://www.iconspng.com/images/rpg-map-symbols-city/rpg-map-symbols-city.jpg'  
    alt="logo" />
  }
  render(){
    return (
    <div>
      {/* <p>
          Welcome to Idle Halloween Adventure
        </p> */}
        {this.returnTown()}
        
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );}
  
}

export default App;
