import React from 'react'

class SaveUser extends React.Component{

    handleSave=(currentUser)=>{

        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({purse: currentUser.purse})
        }).then(response => response.json()).then(console.log)
        console.log(currentUser)
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.handleSave(this.props.currentUser)}>Save User</button>
            </div>
        )
    }
}

export default SaveUser