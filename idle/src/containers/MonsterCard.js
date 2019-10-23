import React from 'react'
import { Link } from 'react-router-dom'
export default class MonsterCard extends React.Component {
    state = {

    }
    render () {
        return ( 
       
            <div>
                <h3>I am {this.props.monster.name}</h3>
                <Link to={{pathname: "/monsterfight", state: {monster: this.props.monster}}}>
                    <button> <b>come battle me</b></button>
                </Link>
            </div>

   
            )
    }
}