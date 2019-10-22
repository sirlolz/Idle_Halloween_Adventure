import React from 'react'
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
    render(){
        
        return(
            <div>
                
            </div>
        )
    }
}
export default BlacksmithStore