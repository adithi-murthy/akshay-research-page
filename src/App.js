import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Screens/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Research1 from "./Screens/Research/Research-1";
import Research2 from "./Screens/Research/Research-2";
import Research3 from "./Screens/Research/Research-3";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/research-1" component={Research1} />
          <Route path="/research-2" component={Research2} />
          <Route path="/research-3" component={Research3} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
