import React, { Component } from 'react'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: [],
      operator: '',
      total: 0,
      display: 0
    };
    this.handleResult = this.handleResult.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.clearResult = this.clearResult.bind(this);
  }
  // handleOperator(event) {
  //   this.setState({discount: event.target.value})
  // }
  // handleNumber(event) {
  //   this.setState({price: event.target.value})
  // }

  handleResult(event) {
    const { num } = this.state
    if (typeof event === 'number') {
      this.setState({num: [...num, event], total: event})
    } else {
      this.setState({operator: event})
    }
  }
  handleCalculate = () => {
    const { num, operator } = this.state
    switch(operator){
      case '/':
        return this.setState({ total: (num[0]/num[1])})
      case '+':
        return this.setState({ total: (num[0]+num[1])})
      case '-':
        return this.setState({ total: (num[0]-num[1])}) 
      case 'x':
        return this.setState({ total: (num[0]*num[1])})
      default:
        break;
    }
    console.log('total', this.state.total)
  }

  clearResult = (event) => {
    this.setState({total: 0})
  }
  render() {
    return(
      <div style={{backgroundColor: '#EAFAF1', width: 200, marginTop: 50}}>
        <div>{this.state.total}</div>
        <div>
          <button 
            style={{width:100, borderRadius: 25}}
            onClick={this.clearResult}
          > AC </button>
          {/* <button style={{width:50, borderRadius: 25}}>%</button> */}
          <button 
            style={{width:100, borderRadius: 25, color: 'white', backgroundColor: 'orange'}}
            onClick={()=>this.handleResult('/')}
          >/</button> <br/>
          <button 
            style={{width:50, borderRadius: 50, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(7)}
          > 7 </button>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(8)}
          >8</button>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(9)}
          >9</button>
          <button 
            style={{width:50, borderRadius: 25, color: 'white', backgroundColor: 'orange'}}
            onClick={()=>this.handleResult('x')}
          >x</button> <br/>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(4)}
          >4</button>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(5)}
          >5</button>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(6)}
          >6</button>
          <button 
            style={{width:50, borderRadius: 25, color: 'white', backgroundColor: 'orange'}}
            onClick={()=>this.handleResult('-')}
          >-</button><br/>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(1)}
          >1</button>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(2)}
          >2</button>
          <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(3)}
          >3</button>
          <button 
            style={{width:50, borderRadius: 25, color: 'white', backgroundColor: 'orange'}}
            onClick={()=>this.handleResult('+')}
          >+</button> <br/>
          <button 
            style={{width:100, borderRadius: 25, backgroundColor: '#FAD7A0'}}
            onClick={()=>this.handleResult(0)}
          >0</button>
          {/* <button 
            style={{width:50, borderRadius: 25, backgroundColor: '#FAD7A0'}}>.</button> */}
          <button 
            style={{width:100, borderRadius: 25, color: 'white', backgroundColor: 'orange'}}
            onClick={()=>this.handleCalculate('=')}
          >=</button>
        </div>
      </div>
    )
  }
    


}