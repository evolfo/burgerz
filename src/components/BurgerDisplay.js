import React, { Component } from 'react';

const BurgerDisplay = (props) => {

  const dropDownOrder = () => {
    if (props.burger.category === "Relatable") {
      return (
        <select id={props.burger.id} onChange={props.handleCategoryChange}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
        )
    } else {
      return (
        <select id={props.burger.id} onChange={props.handleCategoryChange}>
          <option value="Bougie">Bougie</option>
          <option value="Relatable">Relatable</option>
        </select>
        )
    }
  }

  return (
    <div className="BurgerDisplay">
      <img src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
      {dropDownOrder()}
    </div>
  )
}

export default BurgerDisplay
