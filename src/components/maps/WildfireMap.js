import { useState, useEffect, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { nasaKey, googleKey } from '../../keys';
import LocationMarker from '../LocationMarker';
import LocationInfo from '../LocationInfo';
import MapHeader from '../MapHeader';

const WildfireMap = ({ events, center, zoom, categoryId }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const [eventData, setEventData] = useState([]);


    // useEffect(()=>{
    //     const fetchEvents = async()=>{
    //        const res  = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${categoryId}`);
    //        const { events } = await res.json();
    //        setEventData(events);
    //     }
    
    //     fetchEvents();
    
    //   }, [categoryId]);
    //     console.log(eventData);

    if(!events === null){
        console.log('no info')
    }else{
        var markers = events.map((ev)=>{
            if(ev.geometry[0].coordinates.length === 2){
                return  <LocationMarker key={ev.id} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]}
                onClick={()=> setLocationInfo({ id: ev.id, title: ev.title })}
                />
            }
            
     });
    }

       
    
    

        
        

    return (
        <Fragment>
            <MapHeader events={events} categoryName={categoryId} />
         <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: googleKey }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                 {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfo info={locationInfo} />}
        </div>
        </Fragment>
        
    )
}

WildfireMap.defaultProps = {
  center: {
      lat: 42.3265,
      lng: -122.8756
  },
  zoom: 6
}

export default WildfireMap
