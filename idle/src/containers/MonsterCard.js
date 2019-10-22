import React from 'react'
import MonsterFight from '../components/MonsterFight'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class MonsterCard extends React.Component {
    state = {

    }
    render () {
        return ( 
       
            <div>
                <Link to={{pathname: "/monsterfight", state: {monster: this.props.monster}}}>
                <h3>I am {this.props.monster.name}</h3>
                <p>HP:{this.props.monster.hp}</p>
                    <button> travel to <b>{this.props.monster.name}</b>'s lair</button>
                </Link>
            </div>

   
            )
    }
}