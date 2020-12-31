import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Category.css';
import floodImg from '../assets/category/natura-flood-1.jpg';
import dustImg from '../assets/category/natura-dust-2.jpg';
import quakeImg from '../assets/category/natura-earthquake-1.jpg';
import landSlideImg from '../assets/category/natura-landslide-1.jpg';
import droughtImg from '../assets/category/natura-drought-1.jpg';
import seaLakeIceImg from '../assets/category/natura-sea-lake-ice-1.jpg';
import severeStormImg from '../assets/category/natura-severe-storms-1.jpg';
import snowImg from '../assets/category/natura-snow-1.jpg';
import tempExtremeImg from '../assets/category/natura-temp-extreme-1.jpg';
import volcanoeImg from '../assets/category/natura-volcanoes-1.jpg';
import waterColorImg from '../assets/category/natura-water-color-1.jpg';
import wildFireImg from '../assets/category/natura-wild-fire-1.jpg';


const Category = ({ eventId }) => {
   
    const categoryHandler = (id)=>{
          return eventId(id)
    }
   
    return (
        <Fragment>
            
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">

                <div className="content hidden lg:block"> 
                <Link to="/map" onClick={()=>categoryHandler(15)}><img src={ floodImg } alt ="flooding" />
                <div className="overlay">
                    <div className="text">Flooding</div>
                </div>
                </Link>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ floodImg } alt ="flooding" />
                <div className="text">Flooding</div>
                </Link>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ dustImg } alt ="dust"  /></Link>
                <div className="overlay">
                    <div className="text">Dust & Haze</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ dustImg } alt ="dust" /></Link>
                <div className="text">Dust & Haze</div>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ quakeImg } alt ="shattered building from quake" /></Link>
                <div className="overlay">
                    <div className="text">Earthquake's</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ quakeImg } alt ="shattered building from quake" /></Link>
                <div className="text">Earthquake's</div>
                </div>

                <div className="content hidden lg:block"> 
                <Link to="/map" onClick={()=>categoryHandler(15)}><img src={ seaLakeIceImg } alt ="sea lake and ice" />
                <div className="overlay">
                    <div className="text">Sea & Lake Ice</div>
                </div>
                </Link>
                </div>
                <div className="content lg:hidden">
                <Link to="/map" onClick={()=>categoryHandler(15)}><img src={ seaLakeIceImg } alt ="sea lake and ice" />
                <div className="text text-black">Sea & Lake Ice</div>
                </Link>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ severeStormImg } alt ="storms" /></Link>
                <div className="overlay">
                    <div className="text">Severe Storm's</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ severeStormImg } alt ="storms" /></Link>
                <div className="text">Severe Storm's</div>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ snowImg } alt ="snow" /></Link>
                <div className="overlay">
                    <div className="text">Snow</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ snowImg } alt ="snow" /></Link>
                <div className="text text-black">Snow</div>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ tempExtremeImg } alt ="heat wave" /></Link>
                <div className="overlay">
                    <div className="text">Extreme Temperature's</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ tempExtremeImg } alt ="heat wave" /></Link>
                <div className="text">Extreme Temprature's</div>
                </div>

                <div className="content hidden lg:block"> 
                <Link to="/map" onClick={()=>categoryHandler("volcanoes")}><img src={ volcanoeImg } alt ="errupting volcanoe" />
                <div className="overlay">
                    <div className="text">Volcanoe's</div>
                </div>
                </Link>
                </div>
                <div className="content lg:hidden">
                <Link to="/map" onClick={()=>categoryHandler("volcanoes")}><img src={ volcanoeImg } alt ="errupting volcanoe" />
                <div className="text">Volcanoe's</div>
                </Link>
                </div>

                <div className="content hidden lg:block"> 
                <Link to="/map" onClick={()=>categoryHandler("waterColor")}><img src={ waterColorImg } alt ="red tide" />
                <div className="overlay">
                    <div className="text">Water Color</div>
                </div>
                </Link>
                </div>
                <div className="content lg:hidden">
                <Link to="/map" onClick={()=>categoryHandler("waterColor")}><img src={ waterColorImg } alt ="red tide" /></Link>
                <div className="text">Water Color</div>
                </div>

                <div className="content hidden lg:block" > 
                <Link to="/map" onClick={ ()=> categoryHandler("wildfires")}><img src={ wildFireImg } alt ="wild fire" />
                <div className="overlay">
                    <div className="text">Wild Fire's</div>
                </div>
                </Link>
                </div>
                <div className="content lg:hidden">
                <Link to="/map" onClick={()=> categoryHandler("wildfires")}><img src={ wildFireImg } alt ="wild fire" />
                <div className="text">Wild Fire's</div>
                </Link>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ landSlideImg } alt ="landslide" /></Link>
                <div className="overlay">
                    <div className="text">Landslide's</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ landSlideImg } alt ="landslide" /></Link>
                <div className="text">Landslide's</div>
                </div>

                <div className="content hidden lg:block"> 
                <Link to=""><img src={ droughtImg } alt ="boats on dry land" /></Link>
                <div className="overlay">
                    <div className="text">Drought</div>
                </div>
                </div>
                <div className="content lg:hidden">
                <Link to=""><img src={ droughtImg } alt ="boats on dry land" /></Link>
                <div className="text">Drought</div>
                </div>
              
                </div>
            
        </Fragment>
        
    )
}

export default Category
