import React from 'react'
import DeleteUser from './DeleteUser'
import SaveUser from './SaveUser'
import '../css/UserHome.css'
export default class UserView extends React.Component {
    render () {
        console.log(this.props.currentUser)
        return <div>
            <h2>Hello {this.props.currentUser.name}!</h2>
            <p>Current gold:{this.props.currentUser.purse}</p>
            <SaveUser currentUser={this.props.currentUser}/>
            <DeleteUser currentUser={this.props.currentUser}/>
        </div>
    }
}