import React from 'react'
import MonsterCard from "../components/MonsterCard"
class Quests extends React.Component {

    state = {
        monster: []
    }

    getMonster = () => {
        fetch("http://localhost:3000/monsters").then(r => r.json()).then(d => this.setState({monster: d}))
    }

    MonsterTravelButton = () => {
        return this.state.monster.map( (monster, key)=>{
            return <MonsterCard key={key} monster={monster}/>
        })
    }


    componentWillMount() {
        this.getMonster()
    }
    render () {
        return (
            <div>
                <h3>welcome to the stables</h3>
                <div>{this.MonsterTravelButton()}</div>
            </div>)
    }
}
export default Quests