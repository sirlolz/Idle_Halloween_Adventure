import React from 'react'
export default class MonsterCard extends React.Component {
    render () {
        return <div>
                <h3>{this.props.monster.name}</h3>
                <p>{this.props.monster.hp}</p>
                <button> travel to <b>{this.props.monster.name}</b>'s lair</button>
            </div>
    }
}