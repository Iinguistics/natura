import { useState } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Map from './Map';


function App() {
  const [eventData, setEventData] = useState([]);
  const [eventId, setEventId] = useState(null);

  
  const eventIdHandler = async (id)=>{
    setEventId(id);
    const res = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${id}`);
    const { events } = await res.json();
       setEventData(events);
  };

 
  
  return (
    <Router>
      <Switch>
        <div>
      <div className="container m-auto">
            <Route path="/" exact component={() => <Home events={eventData} homeEventId={eventIdHandler} />} />
            </div>
            <Route path="/map" exact component={() => <Map events={eventData} categoryId={eventId} />} />
            </div>
      </Switch>
    </Router>
  
  );
}

export default App;
