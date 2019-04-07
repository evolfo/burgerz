import React, { Component } from 'react';

class BurgerItem extends Component {

  state = {
    deleted: false
  }

  handleDelete = () => {
    this.setState({
      deleted: true
    })
  }

  render() {
    if (this.state.deleted) {
      return (null)
    } else {
      return (
        <div>
          <div className="BurgerItem">
            {this.props.burger.name}
          </div>
          <div className="BurgerBottomBun">
            <button id={this.props.burger.id} onClick={() => this.props.handleShowClick(this.props.burger)}>Show</button>
            <button id={this.props.burger.id} onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      )
    }
  }
}

export default BurgerItem
