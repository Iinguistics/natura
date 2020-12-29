import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { nasaKey, googleKey } from '../../keys';
import LocationMarker from '../LocationMarker';

const WildfireMap = ({ events, center, zoom }) => {
    const [loading, setLoading] = useState(false);

    
    const markers = events.map((ev)=>{
       if(ev.categories[0].id === 8){
           return  <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />

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
