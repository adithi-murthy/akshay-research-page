import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from './Screens/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
