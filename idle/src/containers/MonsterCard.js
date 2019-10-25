import React from 'react'

import '../css/MonsterCard.css'

export default class MonsterCard extends React.Component {

    renderHP=()=>{
        return this.props.monster.hp > 0? this.props.monster.hp : `Monster defeated! You now have ${this.props.user.purse} gold`
        
    }

    render () {
        return ( 
          <>
                <div className="card">
                    <h3 id="name">{this.props.monster.name}</h3>
                    <img id="img" alt="uhoh" src={this.props.monster.img} />
                    <div id="hp">
                    </div>
                        <h4 >{this.renderHP()}</h4>
                 </div>
            </>
        )
    }
}