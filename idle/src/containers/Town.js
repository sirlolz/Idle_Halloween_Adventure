import React from 'react'
import '../css/Town.css'
import { Link } from 'react-router-dom'

class Town extends React.Component{
    
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    toggleSideBar=()=>{
        // document.getElementById("sidebar").classList.toggle('active')
        console.log("clicked burger")
        const node = this.myRef.current
        node.classList.toggle('active')
    }

    render(){

        return(    
            <div id="sidebar" ref={this.myRef}>
                <div className="toggle-btn" onClick={()=>this.toggleSideBar()} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li>    <figure className="gallery__item 1">
                    <Link to="/blacksmithstore">
                    <img src="https://i.imgur.com/LpQ2vsQ.png" 
                    className="gallery__img" 
                    alt="blacksmithstore"  width="100%" height="100%"/>
                    </Link>
                </figure> </li>
                    <li>  <figure className="gallery__item 2">
                    <Link to="/taverninn">
                    <img src="https://i.imgur.com/RVRXU3B.png" 
                    className="gallery__img" 
                    alt="taverninn"  width="100%" height="100%"/>
                    </Link>
                </figure></li>
                    <li><figure className="gallery__item 3">
                    <Link to="/stables">
                    <img onClick={() =>this.handleClick}src="https://i.imgur.com/Fa9Y3e1.png" 
                    className="gallery__img" 
                    alt="stables" width="100%" height="100%"/>
                    </Link>
                </figure></li>
                    <li><figure className="gallery__item 4">
                    <Link to="/warehouse">
                    <img src="https://i.imgur.com/J9hLmCj.png" 
                    className="gallery__img" 
                    alt="warehouse" width="100%" height="100%"/>
                    </Link>
                </figure></li>
                </ul>
            </div>
            // <div className="gallery">
                // <figure className="gallery__item 1">
                //     <Link to="/blacksmithstore">
                //     <img src="https://i.imgur.com/LpQ2vsQ.png" 
                //     className="gallery__img" 
                //     alt="blacksmithstore"  width="100" height="50"/>
                //     </Link>
                // </figure> 

                // <figure className="gallery__item 2">
                //     <Link to="/taverninn">
                //     <img src="https://i.imgur.com/RVRXU3B.png" 
                //     className="gallery__img" 
                //     alt="taverninn"/>
                //     </Link>
                // </figure>

                // <figure className="gallery__item 3">
                //     <Link to="/stables">
                //     <img onClick={() =>this.handleClick}src="https://i.imgur.com/Fa9Y3e1.png" 
                //     className="gallery__img" 
                //     alt="stables"/>
                //     </Link>
                // </figure>

                // <figure className="gallery__item 4">
                //     <Link to="/warehouse">
                //     <img src="https://i.imgur.com/J9hLmCj.png" 
                //     className="gallery__img" 
                //     alt="warehouse"/>
                //     </Link>
                // </figure>

            // </div>   
        )
    }
}
export default Town