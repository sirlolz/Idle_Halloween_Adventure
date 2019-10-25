import React from 'react'

import '../css/MonsterCard.css'

export default class MonsterCard extends React.Component {

    renderHP=()=>{
        return this.props.monster.hp > 0? `You slash ${this.props.monster.name} for 1 damage! ${this.props.monster.name} has ${this.props.monster.hp} remaining.` : `Monster defeated! You now have ${this.props.user.purse} gold`
        if (this.props.fightStarted === false){
            return `${this.props.monster.hp} HP`
        } else if (this.props.fightStarted === true){
            return (`You slash ${this.props.monster.name} for 1 point of damage! ${this.props.monster.name} has ${this.props.monster.hp} HP remaining. Total gold: ${this.props.user.purse}`)
        }
        // return this.props.monster.hp
    }

    render () {
        return ( 
            <>
                <div className="card">
                    <h3 id="name">{this.props.monster.name}</h3>
                    <img id="img" alt="uhoh" src={this.props.monster.img} />
                        <h4 id="hp"> {this.renderHP()}HP</h4>
                    </div>
                    <div >
                 </div>
            </>
        )
    }
}