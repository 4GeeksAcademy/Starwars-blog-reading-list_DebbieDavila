
import React, { useEffect, useState, useContext } from "react";

export const Planets = (props) => (
  <div>
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>

        <p className="card-text">Name: {props.character?.name}</p>
        <p className="card-text">Diameter: {props.character?.diameter}</p>
        <p className="card-text">Population: {props.character?.population}</p>
        <p className="card-text">Climate: {props.character?.climate}</p>
        <p className="card-text">Residents: {props.character?.residents}</p>
        <p className="card-text">Gravity: {props.character?.gravity}</p>
        <p className="card-text">Terrain: {props.character?.terrain}</p>


        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>

)
export default Planets;