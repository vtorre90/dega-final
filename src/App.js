import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Contactpage from './components/Contactpage';
// import Contactpage from './components/Contactpage';
// import Content from "./components/Content";
// import Slider from './components/Slider';
// import Footer from './components/Footer';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/contacts" component={Contactpage}/>
        <Route path="*" component={Homepage} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
