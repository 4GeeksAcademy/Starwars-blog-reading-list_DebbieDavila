
import React, { useEffect, useState, useContext } from "react";
import { Link, redirect } from "react-router-dom"
import StarWarsLogo from '/src/img/STARWARS.png'; // Import the logo image


export const Navbar = () => {


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<img src={StarWarsLogo} alt="Star Wars Logo" style={{ width: '100px', marginRight: '10px', paddingLeft: "" }} /> {/* Add the logo */}
				{/* <span className="navbar-brand mb-0 h1" style={{ padding: '10px', fontWeight: 'bold', textAlign: "center", font: "star_jedi", fontSize: '24px' }}>
					MAY THE FORCE BE WITH YOU
				</span> */}
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Star+Jedi&display=swap" />

				<span className="navbar-brand mb-0 h1" style={{ padding: '10px', fontFamily: 'Erica One', fontSize: '24px' }}>
					MAY THE FORCE BE WITH YOU
				</span>
			</Link>

			<div className="ml-auto">
				<Link to="/favorites">
					<button className="btn btn-primary" style={{ color: 'red', paddingRight: '30px' }}>Favorites</button>
				</Link>


			</div>
		</nav>
	);

}
