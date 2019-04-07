import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
  	burgers: [],
  	displayedBurger: [],
  }

  componentDidMount() {
  	this.getAllBurgers()
  }

  getAllBurgers = () => {
  	return fetch('http://localhost:3001/burgers')
  	  .then(resp => resp.json())
  	  .then(burgerJSON => {
  	  	this.setState({
  	  		burgers: burgerJSON
  	  	})
  	  })
  }

  handleShowClick = (burger) => {
    this.setState({
    	displayedBurger: burger
    })
  }

  handleFilter = (e) => {

  	if(e.target.value === "Relatable") {
  		this.getAllBurgers()
		.then(test => {
			this.setState({
  				burgers: this.state.burgers.filter(burger => burger.category === "Relatable")
  			})
		})
  		
  	} else if (e.target.value === "Bougie") {
  		this.getAllBurgers()
  		.then(test => {
			this.setState({
  				burgers: this.state.burgers.filter(burger => burger.category === "Bougie")
  			})
		})
  	} else {
		fetch('http://localhost:3001/burgers')
        .then(resp => resp.json())
		.then(burgerJSON => {
		  this.setState({
		  	burgers: burgerJSON
		  })
		})
  	}
  }

  handleCategoryChange = (e) => {
  	const stateCopy = [...this.state.burgers]
  	let foundBurger = stateCopy.find(burger => burger.id === parseInt(e.target.id))

  	if (e.target.value === "Bougie" && foundBurger) {
  		foundBurger.category = "Bougie"
  	} else if (e.target.value === "Relatable" && foundBurger) {
  		foundBurger.category = "Relatable"
  	}

  	this.setState({
  		burgers: stateCopy
  	}, () => this.updateBurgerCategory(foundBurger))
  }

  updateBurgerCategory = (burger) => {
  	fetch('http://localhost:3001/burgers/' + burger.id, {
  		method: 'PATCH',
  		body: JSON.stringify(burger),
  		headers: {"Content-Type": "application/json"}
  	})
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer handleFilter={this.handleFilter} handleShowClick={this.handleShowClick} burgers={this.state.burgers}/>
        <BurgerDisplay handleCategoryChange={this.handleCategoryChange} burger={this.state.displayedBurger} />
      </div>
    );
  }
}

export default App;
