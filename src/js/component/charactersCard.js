import React, { useEffect, useState, useContext } from "react";
import { Link, useFetcher } from "react-router-dom";
import { AppContext } from "../layout";
import { BookmarkHeartFill } from "react-bootstrap-icons";


export const Characters = (props) => {

  const [character, setCharacter] = useState()

  const context = useContext(AppContext);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + props.character.uid)
      .then((resp) => resp.json())
      .then((data) => setCharacter(data.result.properties));

  }, []);

  useEffect(() => {
    console.log(character)
  }, [character])


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWmboy-7LiIaxM8_AN0BV6SPVzc6IlqNqtQ&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>{character?.name}</b></h5>


          <p className="card-text">Birth Year: {character?.birth_year}</p>
          <p className="card-text">Eye Color: {character?.eye_color}</p>
          <p className="card-text">Homeworld: {character?.homeworld}</p>
          <p className="card-text">Films: {character?.films}</p>
          <p className="card-text">Species: {character?.species}</p>
          <p className="card-text">Height: {character?.height}</p>


          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          <Link to={"/details/" + props.character.uid}><button href="#" className="btn btn-primary">See Details</button></Link>
          &nbsp;<BookmarkHeartFill onClick={() => context.setFavorites(
            [...context.favorites, character]
          )} href="#" className="" size="60" color="red" style={{ paddingLeft: '10%' }} />



        </div>
      </div>

    </div>

  )
}

