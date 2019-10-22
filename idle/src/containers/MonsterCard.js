import React from 'react'
import MonsterFight from '../components/MonsterFight'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class MonsterCard extends React.Component {
    state = {

    }
    render () {
        return ( 
       
            <div>
                <h3>{this.props.monster.name}</h3>
                <p>{this.props.monster.hp}</p>
                {/* <Link to="/monsterfight" monster={this.props.monster}>
                    <button> travel to <b>{this.props.monster.name}</b>'s lair</button>
                </Link> */}
                <Link to={{pathname: "/monsterfight", state: {monster: this.props.monster}}}>
                    <button> travel to <b>{this.props.monster.name}</b>'s lair</button>
                </Link>
            </div>

   
            )
    }
}