import React from 'react'
import MonsterCard from './MonsterCard'
import '../css/MonsterFight.css'

export default class MonsterFight extends React.Component {
    state = {
        monster:{...this.props.monster},
        // user: {...this.props.user}       //dont think we need user in state
        fightStarted: false
    }

    //on click of fight button decreases monster.hp by user.att stored in state
    handleClick = () => {
        if (this.interval){
            clearInterval(this.interval)
        }
        this.setState({
            monster: {...this.props.monster},
            fightStarted: true
        });
        this.interval = setInterval(() => {
            if (this.state.monster.hp <= 0){
                this.resetUpdateFight();
                this.props.onFightWin(this.state.monster.loot);
            }
            this.setState(prev => {
                return{...prev, monster:{...prev.monster,hp: prev.monster.hp - this.props.user.att}}})}, 1000)
            
    }

    //resets monster hp
    //clears fight interval
    //needs to update user on the backend with loot
    resetUpdateFight = () => {
        // clearInterval(this.interval)
        this.setState({monster: {...this.props.monster}});
    }

    // clear interval twice incase user leaves page before monster is defeated
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    fightLog=()=>{
        if (this.state.fightStarted === false){
            return `${this.props.monster.hp} HP`
        } else if (this.state.fightStarted === true){
            return (`You slash ${this.props.monster.name} for 1 point of damage! ${this.props.monster.name} has ${this.props.monster.hp} HP remaining. Total gold: ${this.props.user.purse}`)
        }
    }


    render() {
        console.log()
            return (
                <div id="monstercardinmonsterfight">
                    <header>Let's get ready to rumble!</header>
                    <h2>{this.props.user.name} VS {this.props.monster.name}</h2> 
                <MonsterCard fightStarted={this.state.fightStarted} user={this.props.user} monster={this.state.monster}/>
                    <button className="start-btn" onClick={()=>{this.handleClick()}}>START</button>
                    {/* <textarea rows="4" cols="50">{this.fightLog()}</textarea> */}
                </div>
            )
        }
}

    // return this.props.monster.hp > 0? `You slash ${this.props.monster.name} for 1 damage! ${this.props.monster.name} has ${this.props.monster.hp} remaining.` : `Monster defeated! You now have ${this.props.user.purse} gold`
    // if (this.props.fightStarted === false){
    //     return `${this.props.monster.hp} HP`
    // } else if (this.props.fightStarted === true){
    //     return (`You slash ${this.props.monster.name} for 1 point of damage! ${this.props.monster.name} has ${this.props.monster.hp} HP remaining. Total gold: ${this.props.user.purse}`)
    // }