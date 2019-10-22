import React from 'react'
import MonsterCard from "../components/MonsterCard"
class Stables extends React.Component {
  
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
                <p>might as well play a cli app instead of jumping on the horse and fighting the <b><em>EVIL</em></b> in this world</p>
                <div>{this.MonsterTravelButton()}</div>
            </div>)
    }
}
export default Stables