import React, { Component } from 'react'

class BillDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      discount: 0,
      price: 0,
      total: 0
    };
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleChangeDiscount = this.handleChangeDiscount.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }

    handleChangeDiscount(event) {
      this.setState({discount: event.target.value})
    }
    handleChangePrice(event) {
      this.setState({price: event.target.value})
    }
    handleCalculate = (event) => {
      this.setState({total: (this.state.discount/100)*this.state.price})
    }
      
    
  render() {
    return(
      <div>
        <h1 style={{fontSize: 18, fontFamily: 'bold'}}>
          Buffet Bill-Calculation
        </h1>
        {/* <form onSubmit={this.handleCalculate}> */}
          {/* <label> */}
            Enter your price: <br/>
            <input 
              name="price" 
              type="number" 
              value={this.state.price}
              onChange={this.handleChangePrice}
            /> <br />
          {/* </label>
          <label> */}
            Enter your discount: <br/>
            <input 
              name="discount" 
              type="number"
              value={this.state.discount}
              onChange={this.handleChangeDiscount}
            /> <br/> <br/>
          {/* </label> */}
          <button onClick={this.handleCalculate}>Calcaulte</button> <br/><br/>
        {/* </form> */}
        Total: {this.state.total}
      </div>
    )
  }
}

export default BillDisplay