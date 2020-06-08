import React from 'react';
import './App.css';
import { Jumbotron } from 'reactstrap';

function mainHero() {
  return (
    <body id="page-top" data-spy="scroll" data-target=".navbar" data-offset="50">
    <div className="App">
      <Jumbotron>
        <h1 className="name">Valentina Rojas Mercier</h1>
      </Jumbotron>
    </div>
    </body>
  );
}

export default App;
