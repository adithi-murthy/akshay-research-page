import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Screens/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Research1 from "./Screens/Research/Research-1";
import Research2 from "./Screens/Research/Research-2";
import Research3 from "./Screens/Research/Research-3";
import Publications from "./Screens/AllPublications";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/understanding-of-local-structure-on-global-scale" component={Research1} />
          <Route path="/in-situ-processing-of-quantum-materials" component={Research2} />
          <Route path="/probing-local-properties" component={Research3} />
          <Route path="/publications" component={Publications} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
