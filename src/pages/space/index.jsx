import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import SpaceSecond from "./components/space-second-page";

const Space = () => {
	useEffect(() => {
		const randomNumber = (min, max) => {
			return Math.floor(Math.random() * max) + min;
		};
		const createStars = (type, quantity) => {
			for (let i = 0; i < quantity; i++) {
				let star = document.createElement("div");
				star.classList.add("L-star", `type-${type}`);
				star.style.left = `${randomNumber(1, 99)}%`;
				star.style.bottom = `${randomNumber(1, 99)}%`;
				star.style.animationDuration = `${randomNumber(50, 200)}s`;
				if (document.location.pathname === "/space") {
					document.body.appendChild(star);
				} else {
					star.remove();
				}
			}
		};
		createStars(1, 100);
		createStars(2, 85);
		createStars(3, 70);
	}, []);

	return (
		<div className='L-space-wrapper'>
			<header className='L-space-header'>
				<div className='G-container G-flex G-justify-between  G-flex-wrap'>
					<div className='L-space-header-child G-flex '>
						<p className='L-space-header-title'>
							<NavLink to='/'> &#10232; </NavLink>
						</p>
						<p className='L-space-header-title'>SPACE LIFE</p>
					</div>
					<nav className='L-space-header-navbar'>
						<ul className='L-space-header-list G-flex G-flex-wrap '>
							<li className='L-space-header-link'>Home</li>
							<li className='L-space-header-link'>Team</li>
							<li className='L-space-header-link'>Stars</li>
							<li className='L-space-header-link'>Earth</li>
							<li className='L-space-header-link'>Design</li>
							<li className='L-space-header-link'>Contact</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className='L-main-wrapper G-container G-flex G-align-center G-justify-between G-flex-wrap'>
				<div className='L-main-space'>
					<h2 className='L-main-space-title'> We design for you!</h2>
					<p className='L-main-space-paragraph'>
						Build your own hero section for you website!
					</p>
					<button className='L-main-space-start-btn'>Start here &darr;</button>
				</div>
				<div className='L-main-earth'>
					<div className='L-main-earth-background' />
				</div>
			</main>
			<SpaceSecond />
		</div>
	);
};

export default Space;
