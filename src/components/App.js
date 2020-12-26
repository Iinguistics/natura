import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Router>
            <div className="container m-auto">
            <Route path="/" exact component={Home} />
            </div>
           
        </Router>
  );
}

export default App;
