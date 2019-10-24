import React from 'react'
import FightView from '../components/FightView'
export default class MonsterFight extends React.Component {
    state = {...this.props.monster}

    //this needs to fetch the users info
    fetchUserInfo = () => {
        this.setState({att: 2})
    }


    //on click of fight button decreases monster hp stored in state by users att
    handleClick = () => {
        this.interval = setInterval(()=>{
            console.log(this.state)
            this.setState({
                hp: (this.state.hp - this.state.att)
            })
        },1000)
        
    }

    //resets monster hp
    //clears fight interval
    //needs to update user on the backend with loot
    resetUpdateFight = () => {
        this.setState({hp:this.props.monster.hp})
    }

    render() {
        return (
            <div>
                <FightView monster={this.state}/>
                    <button onClick={()=>{this.handleClick()}}>start fight</button>
            </div>
        )
    }
}