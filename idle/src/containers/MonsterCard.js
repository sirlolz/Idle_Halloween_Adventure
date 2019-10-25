import React from 'react'

import '../css/MonsterCard.css'

export default class MonsterCard extends React.Component {

    render () {
        return ( 
                <div className="card">
                    <h3 id="name">{this.props.monster.name}</h3>
                    <img id="img" alt="uhoh" src={this.props.monster.img} />
                    <p>{this.props.monster.hp}</p>
                 </div>
        )
    }
}