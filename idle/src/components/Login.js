import React from 'react'
import '../css/Login.css'
class Login extends React.Component {
    state = {
        value: ''
    };

    handleChange = event => {
        this.setState({value: event.target.value});
      }
    
    handleClick = event =>{
        event.preventDefault()
        this.props.onLogin(this.state.value)
        console.log(this.state.value)
    }
    render() {
        return (
            <form>
                <div className="login">
                <h1>Welcome to Idle Halloween Adventure</h1>
                <input 
                id="username"
                type="text" 
                placeholder="            Username" 
                onChange={this.handleChange}/>
                {/* <input 
                type="text" 
                placeholder="            Password" 
                onChange={this.handleChangePassword}/> */}
                <input type="submit" value="login" onClick={e =>this.handleClick(e)}/>
                </div>
            </form>
            
            
        )
    }
}
export default Login