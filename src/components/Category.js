import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Category.css';
import floodImg from '../assets/category/natura-flood-1.jpg';
import dustImg from '../assets/category/natura-dust-2.jpg';
import quakeImg from '../assets/category/natura-earthquake-1.jpg';


const Category = () => {
  
   



    return (
        <Fragment>
            
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ dustImg } alt ="dust"  /></Link>
                <div className="overlay">
                    <div className="text">Dust & Haze</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ quakeImg } alt ="shattered building from quake" /></Link>
                <div className="overlay">
                    <div className="text">Earthquake</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Hello World</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Hello World</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Hello World</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>

                <div className="content"> 
                <Link to=""><img src={ floodImg } alt ="flooding" /></Link>
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </div>
              
                </div>
            
        </Fragment>
        
    )
}

export default Category
