import React from 'react';
import '../src/css/App.css';
import Town from './containers/Town'
class App extends React.Component {
  
  state = {
      loggedin: false,
      showtown: false
  }

  handleSubmit=()=>{
    this.setState({
      loggedin: true
    })
    console.log("handlesubit")
  }

  handleClickTown=()=>{
    this.setState({
      showtown: true
    })
    console.log("showtown", this.state.showtown)
  }

  render() {
    return ( 
      
      this.state.loggedin ?
      
      
      <Town/>
      :
      <form>
          <div className="login">
            <h1>Welcome to Idle Halloween Adventure</h1>
            <input 
            type="text" 
            placeholder="            Username" 
            onChange={this.handleChangeUsername}/>
            <input 
            type="text" 
            placeholder="            Password" 
            onChange={this.handleChangePassword}/>
            <button type="button" onClick={()=>this.handleSubmit()}>Login</button>
            
          </div>
          <img 
      className="Enter"
      src='https://www.iconspng.com/images/rpg-map-symbols-city/rpg-map-symbols-city.jpg'  
      alt="city" />
      </form>          
    )
  }


  // returnTown=()=>{
  //   return this.state.loggedin ? <Town />
  //   : 
  //   <img 
  //   className="Enter"
  //   onClick={this.handleClick}
  //   src='https://www.iconspng.com/images/rpg-map-symbols-city/rpg-map-symbols-city.jpg'  
  //   alt="city" />
  // }
  // render(){
  //   return (
  //   <div>
  //       {this.returnTown()}
  //   </div>
  // );}
}
export default App;
