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
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>

    
  );
}

export default App;
