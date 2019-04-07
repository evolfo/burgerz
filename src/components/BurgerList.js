import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

  const allBurgers = props.burgers.map(burger => {
  		return <BurgerItem key={burger.id} handleShowClick={props.handleShowClick} burger={burger} />
  })

  return (

    <div className="BurgerList">
      {allBurgers}
    </div>
  )
}

export default BurgerList
