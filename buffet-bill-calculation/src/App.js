import React, { Component } from 'react';
import BillDisplay from './billCalculate/billDisplay';
import Calculator from './common/calculator';

class App extends Component {
  render () {
    return (
      <div>
       <BillDisplay />
       <Calculator />
      </div>
    );
  }
}

export default App;
