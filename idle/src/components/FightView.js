import React from 'react'

export default class FightView extends React.Component{
    render() {
        console.log(this.props)
        return <div>{this.props.monster.name}</div>
    }
}