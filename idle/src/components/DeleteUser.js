import React from 'react'

class DeleteUser extends React.Component{
    
    handleDelete=(currentUser)=>{
        
        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id: currentUser.id})
        })
        console.log(currentUser)
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.handleDelete(this.props.currentUser)}>Delete User</button>
            </div>
        )
    }

}

export default DeleteUser