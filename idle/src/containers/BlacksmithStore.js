import React from 'react'
import Items from '../components/Items'
class BlacksmithStore extends React.Component {
    state = {
        forSale: []
    }

    getItems = () => {
        fetch("http://localhost:3000/items").then(r => r.json()).then(d => this.setState({items:d}))
    }

    // showForSale=()=>{
    //     return this.state.forSale.map((item,key)=>{
    //         return <ItemCard key={key} item={item}/>
    //     })
    // }
    // componentDidMount(){
    //     this.showForSale
    // }
        items: []
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