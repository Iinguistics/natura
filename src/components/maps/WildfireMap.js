import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { nasaKey, googleKey } from '../../keys';
import LocationMarker from '../LocationMarker';
import LocationInfo from '../LocationInfo';


const WildfireMap = ({ events, center, zoom, categoryId }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    
    const markers = events.map((ev)=>{
       if(ev.categories[0].id === categoryId){
           return  <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
           onClick={()=> setLocationInfo({ id: ev.id, title: ev.title })}
           />

       }else{
           return null;
       }
    });

        
        

    return (
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
