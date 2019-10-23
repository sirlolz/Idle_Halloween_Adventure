import React from 'react'
import '../css/Town.css'
import MonsterFight from "../components/MonsterFight"
import BlacksmithStore from './BlacksmithStore' 
import Warehouse from './Warehouse'
import Stables from './Stables'
import TavernInn from './TavernInn'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import blacksmithstore from '../images/blacksmithstore.png'

class Town extends React.Component{
    render(){

        return(    
            <div className="gallery">
                <figure className="gallery__item 1">
                    <Link to="/blacksmithstore">
                    <img src={blacksmithstore}
                    className="gallery__img" 
                    alt="blacksmithstore"  width="100" height="50"/>
                    </Link>
                </figure> 

                <figure className="gallery__item 2">
                    <Link to="/taverninn">
                    <img src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/136202/nicubunu_RPG_map_symbols_Inn.png" 
                    className="gallery__img" 
                    alt="taverninn"/>
                    </Link>
                </figure>

                <figure className="gallery__item 3">
                    <Link to="/stables">
                    <img onClick={() =>this.handleClick}src="https://cdn.pixabay.com/photo/2012/05/07/17/05/building-48709_960_720.png" 
                    className="gallery__img" 
                    alt="stables"/>
                    </Link>
                </figure>

                <figure className="gallery__item 4">
                    <Link to="/warehouse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KZRY5McbYibQryHjXNJgnRsMYFtQMlnC2Vtn-Wp31MbWIqI9&s" 
                    className="gallery__img" 
                    alt="warehouse"/>
                    </Link>
                </figure>
            </div>   
        )
    }
}
export default Town