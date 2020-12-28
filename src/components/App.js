import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Map from './Map';


function App() {
  return (
    <Router>
            <div className="container m-auto">
            <Route path="/" exact component={Home} />
            <Route path="/map" exact component={Map} />
            </div>
           
        </Router>
  );
}

export default App;
