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
        return this.state.monster.map( (monster, index)=>{
            return <MonsterCard key={index} monster={monster} onMonsterClick={this.props.onMonsterClick}/>
        })
    }


    componentDidMount() {
        this.getMonster()
    }
    render () {
        return (
            <>
                <h3>welcome to the stables</h3>
                <p>jump on a horse and fighting the <b><em>EVIL</em></b> in this world</p>
                <div className="monsterList">
                    <div >{this.MonsterTravelButton()}</div>
                </div>
            </>)
    }
}
export default Stables