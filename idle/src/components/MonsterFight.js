import React from 'react'
export default class MonsterFight extends React.Component {
    state = {
        hp: this.props.monster.hp,
        name: this.props.monster.name
    }

    handleClick = () => {
        this.interval = setInterval(()=>{console.log(this.state)},1000)
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
                <h2>{this.state.hp}</h2>
                <button onClick={()=>{this.handleClick()}}>start fight</button>
            </div>
        )
    }
}