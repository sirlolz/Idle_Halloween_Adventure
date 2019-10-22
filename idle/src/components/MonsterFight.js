import React from 'react'
export default class MonsterFight extends React.Component {
    // state = {
        // monsterHp: this.props.monster.hp
    // }
    render () {
        return (<div>{this.props.location.state.monster.name}</div>)
    }
}