import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import WildfireMap from './maps/WildfireMap';


function App() {
  const [eventData, setEventData] = useState([]);
  const [eventId, setEventId] = useState(null);

  
  useEffect(()=>{
    const fetchEvents = async()=>{
       const res  = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
       const { events } = await res.json();
       setEventData(events);
    }

    fetchEvents();

    

  }, []);

   
  const eventIdHandler = (id)=>{
      setEventId(id);
  };

  console.log(eventId)
  return (
    <Router>
      <Switch>
        <div>

      <div className="container m-auto">
            <Route path="/" exact component={() => <Home events={eventData} homeEventId={eventIdHandler} />} />
            </div>
            <Route path="/map" exact component={() => <WildfireMap events={eventData} categoryId={eventId} />} />
            </div>
      </Switch>
    </Router>
  );
}

export default App;
