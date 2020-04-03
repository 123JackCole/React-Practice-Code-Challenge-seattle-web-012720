import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {

  state = {
    sushis: [],
    customerMoney: 100
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({sushis: data})
      })
  }

  moreSushi = () => {
    this.setState(previousState => {
      let sushi = previousState.sushis.shift();
      previousState.sushis.push(sushi);
      return {sushis: previousState.sushis};
    }) 
  }

  eatSushi = (sushiId) => {
    this.setState(previousState => {
      const newSushis = previousState.sushis.map(sushi => {
        if (sushi.id === sushiId) {
          if (previousState.customerMoney >= sushi.price) {
            sushi.img_url = null;
            previousState.customerMoney -= sushi.price;
            return sushi;
          } else {
            return sushi;
          }
        } else {
          return sushi;
        }
      })
      return {sushis: newSushis, customerMoney: previousState.customerMoney}
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} onMoreSushi={this.moreSushi} onEatSushi={this.eatSushi}/>
        <Table sushis={this.state.sushis} customerMoney={this.state.customerMoney}/>
      </div>
    );
  }
}

export default App;