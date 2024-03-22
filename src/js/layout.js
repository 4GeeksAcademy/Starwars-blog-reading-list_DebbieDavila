
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Details } from "./views/characterDetails";


import { Home } from "./views/home";
import { Favorites } from "./views/favorites";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Type } from "react-bootstrap-icons";

export const AppContext = React.createContext();
export const CatContext = React.createContext();


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favorites, setFavorites] = useState([]);
	const [characters, setCharacters] = useState([]);

	const postFavorites = (entity, id, entity_type) => {
		fetch('https://ominous-xylophone-q74qq55gr9wf6wrv-3000.app.github.dev/favorites', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				owner: 1,
				entity_id: id,
				name: entity.name,
				entity_type: entity_type
			})
		})
			.then((resp) => resp.json())
			.then((data) => setFavorites(data));
	}


	return (
		<div>
			<AppContext.Provider value={{ favorites, setFavorites, postFavorites, characters, setCharacters }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="/details/:id" element={<Details />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
