import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { AppContext } from "../layout";

import "../../styles/demo.css";

export const Favorites = () => {
	const { favorites, setFavorites } = useContext(AppContext);

	useEffect(() => {
		fetch("https://ominous-xylophone-q74qq55gr9wf6wrv-3000.app.github.dev/favorites")
			.then((resp) => resp.json())
			.then((data) => setFavorites(data));

	}, []);

	const deleteFavorites = (id) => {
		fetch("https://ominous-xylophone-q74qq55gr9wf6wrv-3000.app.github.dev/favorites/" + id, {
			method: "DELETE"
		})
			.then((resp) => resp.json())
			.then((data) => setFavorites(data.updated_list));

	}

	return (
		<div className="container">
			<ul className="list-group">
				{favorites.length > 0 ?
					(favorites.map((favorite, index) => {
						return (
							<li key={index} className="list-group-item d-flex justify-content-between">
								<Link to={"/single/" + index}>
									<span>Link to: {favorite.name}</span>
								</Link>
								<i className="fas fa-trash" onClick={() => deleteFavorites(favorite.id)}></i>

							</li>
						);
					}))
					: (<h2>Getting data...</h2>)
				}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary black">Back home</button>
			</Link>
		</div>
	);
};


