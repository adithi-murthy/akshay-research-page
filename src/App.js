import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import AboutMe from './Screens/AboutMe';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
