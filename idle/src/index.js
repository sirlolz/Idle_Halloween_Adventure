import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './App';
import Town from './containers/Town'
// import * as serviceWorker from './containers/serviceWorker';
import MonsterFight from "./components/MonsterFight"
import BlacksmithStore from './containers/BlacksmithStore' 
import Warehouse from './containers/Warehouse'
import Stables from './containers/Stables'
import TavernInn from './containers/TavernInn'
import Login from './components/Login'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            {/* <Link to="/">{<img src/>}</Link>     */}
            {/* <Route exact path="/" component={App} /> */}
            <Route path="/" component={Town} />

            <Route path="/blacksmithstore">
                        <BlacksmithStore />
                    </Route>
                    <Route path="/monsterFight"
                        render={(props) => {
                        console.log(props)
                        return <MonsterFight {...props} me={"me"} />
                    }}
                    />
                    <Route path="/stables">
                        <Stables/>
                    </Route>
                    <Route path="/town/taverninn">
                        <TavernInn />
                    </Route>
                    <Route path="/town/warehouse">
                        <Warehouse />
                    </Route>
            {/* <Route path="/home" component={App} /> */}
            
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();