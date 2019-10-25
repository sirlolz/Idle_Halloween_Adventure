import React from 'react'
import '../css/Button.css'

class SaveUser extends React.Component{

    handleSave=(currentUser)=>{
        currentUser.items.push({name: "one", att: 1})
        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
           
            body: JSON.stringify({...currentUser})
        }).then(resp => console.log(resp.json()))

    }

    render(){
        return(
            <div>
                <button className="start-btn" onClick={()=>this.handleSave(this.props.currentUser)}>Save User</button>
            </div>
        )
    }
}

export default SaveUser