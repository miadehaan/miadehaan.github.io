import React from 'react';
import {
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ backgroundColor: '#fae1dd' }} >
      {/* <Switch > */}
      <HashRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        {/* <Route component={Home} /> */}
      {/* </Switch> */}
      </HashRouter>
    </div>

    
  );
}

export default App;
