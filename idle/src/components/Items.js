import React from 'react'
export default class Items extends React.Component {
    render () {
        return <div>
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.att}</p>
                <p>{this.props.item.hp}</p>
            </div>
    }
}