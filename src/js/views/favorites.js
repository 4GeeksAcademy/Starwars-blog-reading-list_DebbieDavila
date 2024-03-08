import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { AppContext } from "../layout";

export const Demo = () => {
	const { favorites, setFavorites } = useContext(AppContext);

	return (
		<div className="container">
			<ul className="list-group">
				{favorites.map((favorite, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
						>
							<Link to={"/single/" + index}>
								<span>Link to: {favorite.name}</span>
							</Link>
							<i class="fas fa-trash" onClick={() => setFavorites(
								favorites.filter(fave => fave.name != favorite.name)
							)}></i>

						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary black">Back home</button>
			</Link>
		</div>
	);
};


