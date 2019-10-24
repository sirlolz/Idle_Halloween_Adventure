import React from 'react'

export default class UserView extends React.Component {
    render () {
        console.log(this.props.currentUser)
        return <div>
            <h2>hello{this.props.currentUser.name}</h2>
            <p>your moola$$$$::{this.props.currentUser.purse}</p>
        </div>
    }

}