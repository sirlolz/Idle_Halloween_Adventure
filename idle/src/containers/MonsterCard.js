import React from 'react'
import { Link } from 'react-router-dom'
import '../css/MonsterCard.css'

export default class MonsterCard extends React.Component {
    state = {

    }
    render () {
        return ( 
            <Link to="/monsterfight" onClick={() => this.props.onMonsterClick(this.props.monster)}>
                <div className="card">
                    <h3 id="name">{this.props.monster.name}</h3>
                    <img id="img" alt="uhoh" src={this.props.monster.img} />
                 </div>
            </Link> 
        )
    }
}