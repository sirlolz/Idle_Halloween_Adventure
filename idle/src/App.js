import React from 'react';
import '../src/css/App.css';
import Town from './containers/Town'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Warehouse from './containers/Warehouse';
import BlacksmithStore from './containers/BlacksmithStore';
import Stables from './containers/Stables';
import TavernInn from './containers/TavernInn';
class App extends React.Component {
  
  state = {
      loggedin: false,
      showtown: false
  }

  // handleSubmit=()=>{
  //   this.setState({
  //     loggedin: true
  //   })
  //   console.log("handlesubit")
  // }

  // handleClickTown=()=>{
  //   this.setState({
  //     showtown: true
  //   })
  //   console.log("showtown", this.state.showtown)
  // }

  render() {
    return (
      <Router>
      <div>
        <Town />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/warehouse" render={() => <Warehouse />} />
        <Route exact path="/blacksmithstore" render={() => <BlacksmithStore />} />
        <Route exact path="/stables" render={() => <Stables />} />
        <Route exact path="/taverninn" render={() => <TavernInn />} />

      </div>
    </Router>
    )
  }
      
  //   this.state.loggedin ?
      
      
  //     <Town/>
      
  //     :
  //     <form>
  //         <div className="login">
  //           <h1>Idle Halloween Adventure</h1>
  //           <div>
  //             <input 
  //             type="text" 
  //             placeholder="            Username" 
  //             onChange={this.handleChangeUsername}/>
  //             <input 
  //             type="text" 
  //             placeholder="            Password" 
  //             onChange={this.handleChangePassword}/>
  //           </div>
  //           <button type="button" onClick={()=>this.handleSubmit()}>Login</button>
            
  //         </div>
  //         <div className="citypic">
  //         <img 
  //     className="Enter"
  //     src='https://www.iconspng.com/images/rpg-map-symbols-city/rpg-map-symbols-city.jpg'  
  //     alt="city" />

  //         </div>
  //     </form>          
  //   )
  // }


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
