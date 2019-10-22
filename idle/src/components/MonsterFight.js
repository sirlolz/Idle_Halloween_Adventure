import React from 'react'
import MonsterCard from "../containers/MonsterCard.js"
export default class MonsterFight extends React.Component {
    state = {
        monster: this.props.location.state.monster
    }
    render () {
        return (
        <div>
            {this.state.monster.name} HP:{this.state.monster.hp}
        </div>
        )
    }
}