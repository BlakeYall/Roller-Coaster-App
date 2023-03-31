import React, { Component } from 'react';

class DisplayBoard extends Component {
  constructor(){
    super()
    this.state = {
      stakes: 4,
      unit: 32.08,
      bet_price: 0,
      winning_average: 22
    }
  }
// event handler for stake clicks
  handleStake(){
      this.setState({
          stakes:this.state.stakes * 2
      })
  }
// event handler for price clicks  
  handlePrice(){
      this.setState({
          bet_price:this.state.bet_price + this.state.unit
      })
  }
// event for clearing price  
  clearPrice(){
    this.setState({
          bet_price:this.state.price * 0
    })
  }
// event for clearing stake  
  clearStake(){
    this.setState({
          stakes:this.state.stakes * 0 + 4
    })
  }

  render() {
    return (
      <div className='main_div'>
        <button className="my-button">{this.state.stakes}</button>
        <button className="my-button">{this.state.unit}</button>
        <button className="my-button">{this.state.bet_price}</button>
        <button className="my-button">{this.state.winning_average}</button>
        <div className='sub-div'>
          <button className="new-button" onClick={this.handleStake}>+Stakes</button>
          <button className="new-button" onClick={this.handlePrice}>+Price</button>
          <button className="new-button" onClick={this.clearStake}>xxStakes</button>
          <button className="new-button" onClick={this.clearPrice}>xxPrice</button>
        </div>
      </div>
    );
  }
}