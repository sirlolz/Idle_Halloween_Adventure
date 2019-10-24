import React from 'react'
import Items from '../components/Items'
class BlacksmithStore extends React.Component {
    state = {
        forSale: []
    }

    getItems = () => {
        fetch("http://localhost:3000/items").then(r => r.json()).then(d => this.setState({forSale:d}))
    }

    renderItems = () => {
        return this.state.forSale.map((item, key)=> {
           return <Items item={item} key={key} />
        })
    }

    componentWillMount () {
        this.getItems()
    }

    render(){
        return(
            <div>
                items here
                <div>
                {this.renderItems()}
                </div>
            </div>
        )
    }
}
export default BlacksmithStore