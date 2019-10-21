import React from 'react'
export default class MonsterCard extends React.Component {
    render () {
        return <div>
                <h3>{this.props.monster.name}</h3>
                <p>{this.props.monster.hp}</p>
                <button> travel to {this.props.monster.name}'s lair</button>
            </div>
    }
}