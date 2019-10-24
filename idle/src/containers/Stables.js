import React from 'react'
import MonsterCard from "./MonsterCard"
import '../css/Stables.css'
class Stables extends React.Component {
  
    state = {
        monster: []
    }

    getMonster = () => {
        fetch("http://localhost:3000/monsters").then(response => response.json()).then(data => this.setState({monster: data}))
    }

    MonsterTravelButton = () => {
         return <div className="monsterList">{this.state.monster.map( (monster, index)=>{
            return <MonsterCard key={index} monster={monster} onMonsterClick={this.props.onMonsterClick}/>
        })} </div>
       
    }


    componentDidMount() {
        this.getMonster()
    }
    render () {
        return (
            <>
                <h2>Welcome to the stables.</h2>
                <p>Jump on a horse and fight the <b><em>EVIL</em></b> in this world. Current Wanted List:</p>
                
                    {this.MonsterTravelButton()}
               
            </>)
    }
}
export default Stables