import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ backgroundColor: '#fae1dd' }} >
      <Switch >
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route path="/home" component={Home} /> */}
        <Route component={Home} />
      </Switch>
    </div>

    
  );
}

export default App;
