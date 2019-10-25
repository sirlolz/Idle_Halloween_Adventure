import React from 'react'

class SaveUser extends React.Component{

    handleSave=(currentUser)=>{
        let purse = currentUser.purse

        fetch("http://localhost:3000/users/"+ currentUser.id, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user:{purse}})
        })
        .then(resp => console.log(resp.json()))

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