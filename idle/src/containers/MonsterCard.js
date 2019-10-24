import React from 'react'
import { Link } from 'react-router-dom'
import '../css/MonsterCard.css'

export default class MonsterCard extends React.Component {
    state = {

    }
    render () {
        return ( 
            
            <div className="card">
                <div>
                    <h3 id="name">{this.props.monster.name}</h3>
                
                    <Link to="/monsterfight" onClick={() => this.props.onMonsterClick(this.props.monster)}>
                    <div id="button"><button> <b>Fight</b></button></div>
                    </Link> 
                </div>
                
            </div>

   
            )
    }
}