import React from 'react'
import '../css/Town.css'
import MonsterFight from "../components/MonsterFight"
import BlacksmithStore from './BlacksmithStore' 
import Warehouse from './Warehouse'
import Stables from './Stables'
import TavernInn from './TavernInn'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Town extends React.Component{
  
    render(){

        return(    

            <div className="gallery">
                <figure className="gallery__item 1">
                    <Link to="/blacksmithstore">
                    <img src="https://i.imgur.com/jscjXoG.png" 
                    className="gallery__img" 
                    alt="blacksmithstore"/>
                    </Link>
                </figure> 

                <figure className="gallery__item 2">
                    <Link to="/taverninn">
                    <img src="https://i.imgur.com/A5IKEnM.png" 
                    className="gallery__img" 
                    alt="taverninn"/>
                    </Link>
                </figure>

                <figure className="gallery__item 3">
                    <Link to="/stables">
                    <img onClick={() =>this.handleClick}src="https://i.imgur.com/g35lkGB.png" 
                    className="gallery__img" 
                    alt="stables"/>
                    </Link>
                </figure>

                <figure className="gallery__item 4">
                    <Link to="/warehouse">
                    <img src="https://i.imgur.com/gVgiIxM.png" 
                    className="gallery__img" 
                    alt="warehouse"/>
                    </Link>
                </figure>

            </div>   
        )
    }
}
export default Town