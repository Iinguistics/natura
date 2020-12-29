import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import WildfireMap from './maps/WildfireMap';


function App({match}) {
  const [eventData, setEventData] = useState([]);

  
  useEffect(()=>{
    const fetchEvents = async()=>{
       const res  = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
       const { events } = await res.json();
       setEventData(events);
    }

    fetchEvents();

    console.log(eventData);

  }, []);

  console.log(match)

  return (
    <Router>
            <div className="container m-auto">
            <Route path="/" exact component={Home} />
            <Route path="/map/:id"  component={() => <WildfireMap events={eventData} />} />
            </div>
           
        </Router>
  );
}

export default App;
