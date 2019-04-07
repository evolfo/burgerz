import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilter={this.props.handleFilter} />
        <BurgerList handleShowClick={this.props.handleShowClick} burgers={this.props.burgers} />
      </div>
    )
  }
}
