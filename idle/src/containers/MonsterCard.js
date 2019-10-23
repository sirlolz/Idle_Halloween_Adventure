import React from 'react'
import { Link } from 'react-router-dom'
export default class MonsterCard extends React.Component {
    state = {

    }
    render () {
        return ( 
       
            <div>
                <h3>take your horse to {this.props.monster.name}'s lair</h3>
                <Link to="/monsterfight" onClick={() => this.props.onMonsterClick(this.props.monster)}>
                    <button> <b>lets go</b></button>
                </Link>
            </div>

   
            )
    }
}