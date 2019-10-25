import React from 'react'
import MonsterCard from './MonsterCard'
export default class MonsterFight extends React.Component {
    state = {
        monster:{...this.props.monster},
        // user: {...this.props.user}       //dont think we need user in state
        fightStarted: false
    }

    //on click of fight button decreases monster.hp by user.att stored in state
    handleClick = () => {
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


    render() {
        console.log()
            return (
                <div>
                <MonsterCard fightStarted={this.state.fightStarted} user={this.props.user} monster={this.state.monster}/>
                    <button onClick={()=>{this.handleClick()}}>start fight</button>
                </div>
            )
        }
    }