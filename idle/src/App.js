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
import MonsterFight from './components/MonsterFight'
class App extends React.Component {

  state = {
      loggedin: false,
      showtown: false,
      currentMonster: {}
  }

  onMonsterClick = monster =>{
    this.setState({currentMonster:{...monster}})
  }

  render() {
    return (
      <Router>
        <div>
        
        <Town />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/warehouse" render={() => <Warehouse />} />
        <Route exact path="/blacksmithstore" render={() => <BlacksmithStore />} />
        <Route exact path="/stables" render={() => <Stables monster={this.state.currentMonster} onMonsterClick={this.onMonsterClick}/>} />
        <Route exact path="/taverninn" render={() => <TavernInn />} />
        <Route exact path="/monsterfight" render={() => <MonsterFight monster={this.state.currentMonster}/>} />
      </div>
      
      
    </Router>
    )
  }
}
export default App;
