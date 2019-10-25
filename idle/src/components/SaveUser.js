import React from 'react'

class SaveUser extends React.Component{

    handleSave=(currentUser)=>{
        currentUser.items.push({name: "one", att: 1})
        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({...currentUser})
        }).then(resp => console.log(resp.json()))

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