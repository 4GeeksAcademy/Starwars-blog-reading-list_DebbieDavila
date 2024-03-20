import React, { useEffect, useState, useContext } from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Characters } from "../component/charactersCard";
import { AppContext } from "../layout";



export function Home() {
	const [characters, setCharacters] = useState([]);
	const context = useContext(AppContext);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then((resp) => resp.json())
			.then((data) => setCharacters(data.results));

		fetch("GET Favorites from your database")
	}, []);

	return (
		<div className="container">
			<div className="d-flex flex-wrap characters" >
				{characters.length > 1 ? (characters.map((character, index) => {
					console.log(character)
					return <Characters character={character} />
				}))
					: <h1>Loading.......</h1>
				}
			</div>
		</div>
	);
}



// 1. Fetch characters from API
// 2. Create a state hook to hold the array with characters
// 3. Create an individual card componenet to display a character
// 4. Map (not loop through) through all characters and call the card component for each one
// 5. Actually click onto each card and it opens to whole new page ( which is another component)
//So create a view component to display ALL details of a character
// 6. On every card component create a button which will <Link> to the details page for taht character
// because we cant use the <a> tag anymore.








