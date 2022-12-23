import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Screens/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Research1 from "./Screens/Research/Research-1";
import Research2 from "./Screens/Research/Research-2";
import Research3 from "./Screens/Research/Research-3";
import Publications from "./Screens/AllPublications";
import ResearchGroup from "./Screens/ResearchGroup";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/investigating-structural-dynamics" component={Research1} />
          <Route path="/identifying-chemical-impurities" component={Research2} />
          <Route path="/probing-emergent-phenomena" component={Research3} />
          <Route path="/publications" component={Publications} />
          <Route path="/research-group" component={ResearchGroup} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
