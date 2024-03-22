
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";

export const Details = (props) => {
    const [character, setCharacter] = useState();
    const [imageUrl, setImageUrl] = useState("");
    const uid = useParams().id;

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then((resp) => resp.json())
            .then((data) => setCharacter(data.result.properties));
    }, [uid]);

    useEffect(() => {
        if (character && character.name) {
            fetch(`https://starwars-visualguide.com/assets/img/characters/${character.name}.jpg`)
                .then((resp) => {
                    if (resp.ok) {
                        setImageUrl(`https://starwars-visualguide.com/assets/img/characters/${character.name}.jpg`);
                    } else {
                        console.error("Image fetch failed:", resp.status);
                        setImageUrl(""); // Set a default image or handle the error appropriately
                    }
                })
                .catch((error) => {
                    console.error("Error fetching image:", error);
                    setImageUrl(""); // Set a default image or handle the error appropriately
                });
        }
    }, [character]);

    useEffect(() => {
        if (planet && planet.name) {
            fetch(`https://starwars-visualguide.com/assets/img/planets/${planets.name}.jpg`)
                .then((resp) => {
                    if (resp.ok) {
                        setImageUrl(`https://starwars-visualguide.com/assets/img/planets/${planet.name}.jpg`);
                    } else {
                        console.error("Image fetch failed:", resp.status);
                        setImageUrl(""); // Set a default image or handle the error appropriately
                    }
                })
                .catch((error) => {
                    console.error("Error fetching image:", error);
                    setImageUrl(""); // Set a default image or handle the error appropriately
                });
        }
    }, [planet]);

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={imageUrl}
                    className="card-img-top"
                    alt="Character"
                />
                <div className="card-body">
                    <h5 className="card-title">{character?.name}</h5>
                    <p className="card-text">Birth Year: {character?.birth_year}</p>
                    <p className="card-text">Eye Color: {character?.eye_color}</p>
                    <p className="card-text">Homeworld: {character?.homeworld}</p>
                    <p className="card-text">Films: {character?.films}</p>
                    <p className="card-text">Species: {character?.species}</p>
                    <p className="card-text">Height: {character?.height}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
