import React from 'react'
import '../css/Town.css'
import { Link, Redirect} from 'react-router-dom'

class Town extends React.Component{
    
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    toggleSideBar=()=>{
        const node = this.myRef.current
        node.classList.toggle('active')
    }

    render(){
        if (this.props.loggedin === false){
            return <Redirect to="/login" />
        }

        return(    
            <div id="sidebar" ref={this.myRef}>
                <div className="toggle-btn" onClick={()=>this.toggleSideBar()} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                <li>    <figure>
                    <Link to="/">
                    <img src="https://i.imgur.com/EQySEla.png" 
                    alt="blacksmithstore"  width="100%" height="100%"/>
                    </Link>
                </figure> </li>
                    <li>    <figure>
                    <Link to="/blacksmithstore">
                    <img src="https://i.imgur.com/LpQ2vsQ.png" 
                    alt="blacksmithstore"  width="100%" height="100%"/>
                    </Link>
                </figure> </li>
                    <li>  <figure>
                    <Link to="/taverninn">
                    <img src="https://i.imgur.com/RVRXU3B.png" 
                    alt="taverninn"  width="100%" height="100%"/>
                    </Link>
                </figure></li>
                    <li><figure>
                    <Link to="/stables">
                    <img onClick={() =>this.handleClick}src="https://i.imgur.com/Fa9Y3e1.png" 
                    alt="stables" width="100%" height="100%"/>
                    </Link>
                </figure></li>
                    <li><figure>
                    <Link to="/shack">
                    <img src="https://i.imgur.com/J9hLmCj.png" 
                    alt="shack" width="100%" height="100%"/>
                    </Link>
                </figure></li>
                </ul>
            </div> 
        )
    }
}
export default Town