import React from 'react'
import Items from '../components/Items'
class BlacksmithStore extends React.Component {
    state = {
        items: []
    }
    getItems = () => {
        fetch("http://localhost:3000/items").then(r => r.json()).then(d => this.setState({items: d}))
    }

    renderItems = () => {
        return this.state.items.map((item, key)=> {
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
                {/* need to render each item individually use map */}
            </div>
        )
    }
}
export default BlacksmithStore