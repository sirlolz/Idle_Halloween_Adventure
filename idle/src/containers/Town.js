import React from 'react'
import '../css/Town.css'
import BlacksmithStore from './BlacksmithStore' 
import Warehouse from './Warehouse'
import Stables from './Stables'
import TavernInn from './TavernInn'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Town extends React.Component{
    state = {
        blacksmith: false,
        tavern: false,
        stables: false,
        warehouse: false
    }

    handleClick = () => {
        this.setState({stable: !this.state.stable})
        
    }
    render(){

        if (this.state.stables === true){
            return <Stables />
        }
        return(    
            <Router>
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <Link to="/blacksmithstore">

                    <img src="https://www.iconspng.com/images/rpg-map-symbols-blacksmith/rpg-map-symbols-blacksmith.jpg" 
                    className="gallery__img" 
                    alt="blacksmithstore"/>
                    </Link>
                </figure> 

                <figure className="gallery__item gallery__item--2">
                    <Link to="/taverninn">
                    <img src="https://png2.cleanpng.com/sh/402783dc704200a9b1f672db8b1c06d0/L0KzQYm3VMAyN5DuiZH0aYP2gLBuTflvdl51jdQ2Y3zsgH7okwQudZZpgddBYXywRbLqUMk5OGo5UaptNUCxRYi5U8k5OWo2TaQ7NUe0Qoi6U8AyO191htk=/kisspng-inn-pub-clip-art-medieval-5ac09809498d50.5723981915225712733013.png" 
                    className="gallery__img" 
                    alt="taverninn"/>
                    </Link>
                </figure>

                <figure className="gallery__item gallery__item--3">
                    <Link to="/stables">
                    <img onClick={() =>this.handleClick}src="https://cdn.pixabay.com/photo/2012/05/07/17/05/building-48709_960_720.png" 
                    className="gallery__img" 
                    alt="stables"/>
                    </Link>
                </figure>

                <figure className="gallery__item gallery__item--4">
                    <Link to="/warehouse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KZRY5McbYibQryHjXNJgnRsMYFtQMlnC2Vtn-Wp31MbWIqI9&s" 
                    className="gallery__img" 
                    alt="warehouse"/>
                    </Link>
                </figure>

                <Switch>
                    <Route path="/blacksmithstore">
                        <BlacksmithStore />
                    </Route>
                    <Route path="/stables">
                        <Stables />
                    </Route>
                    <Route path="/taverninn">
                        <TavernInn />
                    </Route>
                    <Route path="/warehouse">
                        <Warehouse />
                    </Route>
                </Switch>

            </div>   
        </Router>    
            
        )
    }
}
export default Town