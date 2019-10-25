import React from 'react'
import { Redirect } from 'react-router-dom'
import '../css/Button.css'
class DeleteUser extends React.Component{
    
    state = {
        deleted: false
    }

    handleDelete=(currentUser)=>{

        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: currentUser.id})
        }).then(this.setState({
            deleted: true
        }))
        console.log(currentUser)
    }
    
    render(){
        if(this.state.deleted === true){
            return <Redirect to="/login"/>
        }
        return(
            <div>
                <button className="start-btn" onClick={()=>this.handleDelete(this.props.currentUser)}>Delete User</button>
            </div>
        )
    }

}

export default DeleteUser