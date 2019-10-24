import React from 'react'
export default class MonsterFight extends React.Component {
    state = {
        hp: this.props.monster.hp,
        name: this.props.monster.name,
        att: 0,
        fightStarted: false,
        monsterDead: false
    }

    //this needs to fetch the users info
    fetchUserInfo = () => {
        this.setState({att: 2})
    }


    //on click of fight button decreases monster hp stored in state by users att
    handleClick = () => {
        this.setState({hp:this.props.monster.hp})
        this.interval = setInterval(()=>{
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

    //upon mounting get users info from backend
    componentDidMount() {
        this.fetchUserInfo()
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
                {   this.state.hp > 0 ?
                        <h2>{this.props.monster.name} has {this.state.hp} hp remaining!</h2>
                    :
                        clearInterval(this.interval)
                        
                }
                {this.state.name ?(
                    <button onClick={()=>{this.handleClick()}}>start fight</button>
                )
                :
                (
                    <p>looks like no one is here come back later</p>
                )
                }

            </div>
        )
    }
}