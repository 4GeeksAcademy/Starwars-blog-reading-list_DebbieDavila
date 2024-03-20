
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

export const AppContext = React.createContext();
export const CatContext = React.createContext();


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favorites, setFavorites] = useState([]);
	const [cats, setCats] = useState([]);

	const postFavorites = () => {
		fetch("POST data to the database")
	}

	return (
		<div>
			<AppContext.Provider value={{ favorites, setFavorites, cats, setCats }}>
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
