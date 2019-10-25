import React from 'react';
import '../src/css/App.css';
import Town from './containers/Town'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Shack from './containers/Shack';
import BlacksmithStore from './containers/BlacksmithStore';
import Stables from './containers/Stables';
import TavernInn from './containers/TavernInn';
import MonsterFight from './containers/MonsterFight'
import Login from './components/Login'
import UserHome from './components/UserHome'
class App extends React.Component {

  state = {
      loggedin: false,
      showtown: false,
      currentMonster: {},
      currentUser: {}
  }

  onLogin = user => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers:{
          "Content-Type": "application/json",
                  "Accept": "application/json"
              },
              body: JSON.stringify({name: user})
  }).then(response => {return response.json()}).then(data => this.setState({currentUser:{...data}}))
  }

  //updates currentMonster in state when monsterCard is clicked in stables route
  onMonsterClick = monster =>{
    this.setState({currentMonster:{...monster}})
  }

  onFightWin = loot => {
    
    this.setState(prev => {return{...prev, currentUser:{...prev.currentUser, purse: prev.currentUser.purse += loot}}})
  }

  render() {
    return (
      <Router>
        <div>
        <Town />
        <Route exact path="/" render={() => <UserHome currentUser={this.state.currentUser}/>} />

        <Route exact path="/login" render={() => <Login onLogin={this.onLogin}/>} />

        <Route exact path="/shack" render={() => <Shack />} />

        <Route exact path="/blacksmithstore" render={() => <BlacksmithStore />} />

        <Route exact path="/stables" render={() =><Stables monster={this.state.currentMonster} onMonsterClick={this.onMonsterClick}/>} />

        <Route exact path="/taverninn" render={() => <TavernInn />} />

        <Route exact path="/monsterfight" render={() => <MonsterFight monster={this.state.currentMonster} user={this.state.currentUser} onFightWin={this.onFightWin}/>} />

        </div>
    </Router>
    )
  }
}
export default App;
