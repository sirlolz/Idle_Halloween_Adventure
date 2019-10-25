import React from 'react'
import '../css/Login.css'
import { Redirect } from 'react-router-dom'
class Login extends React.Component {
    state = {
        value: '',
        redirect: false
    };

    handleChange = event => {
        this.setState({value: event.target.value});
      }
    
    handleClick = event =>{
        event.preventDefault()
        this.props.onLogin(this.state.value)
        this.setState({redirect: true})
    }
    render() {
        if (this.state.redirect === true){
            return <Redirect to="/" />
        }
        return (
            <form>
                <div >
                <h1 className="login">Welcome to Idle Halloween Adventure</h1>
                <input 
                id="username"
                type="text" 
                placeholder="            Username" 
                onChange={this.handleChange}/>
                {/* <input 
                type="text" 
                placeholder="            Password" 
                onChange={this.handleChangePassword}/> */}
                <input className="start-btn" type="submit" value="login" onClick={e =>this.handleClick(e)}/>
                </div>
            </form>
            
            
        )
    }
}
export default Login