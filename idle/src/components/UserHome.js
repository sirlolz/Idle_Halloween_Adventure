import React from 'react'
import DeleteUser from './DeleteUser'
import SaveUser from './SaveUser'

export default class UserView extends React.Component {
    render () {
        console.log(this.props.currentUser)
        return <div>
            <h2>Hello {this.props.currentUser.name}!</h2>
            <DeleteUser currentUser={this.props.currentUser}/>
            <SaveUser currentUser={this.props.currentUser}/>
            <p>your moola$$$$::{this.props.currentUser.purse} gold</p>
        </div>
    }
}