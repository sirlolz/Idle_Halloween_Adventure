import React from 'react'
import '../css/Login.css'
class Login extends React.Component {
    state = {
        loggedin: false
    }
    render() {
        return (
            <div className="login">
                <form>
                <h1>Welcome to Idle Halloween Adventure</h1>
                <input 
                type="text" 
                placeholder="            Username" 
                onChange={this.handleChangeUsername}/>
                <input 
                type="text" 
                placeholder="            Password" 
                onChange={this.handleChangePassword}/>
                <button type="button" onClick={()=>this.handleSubmit()}>Login</button>
                </form>
            </div>
            
            
        )
    }
}
export default Login