import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          k-ty element ciągu geometrycznego <br />
          
        </header>
        <navigator className="App-navigator">
        <Link className="App-link" to="/fib">Gs Calc</Link>
        <Link lassName="App-link" to="/documentation">Dokumentacja</Link>
        </navigator>
        <body className="App-body">
        
          <Route path="/fib" component={Fib} />
          <Route path="/documentation" component={Documentation} />
        
        </body>
        
      </div>
    </Router>
  );
}

export default App;
