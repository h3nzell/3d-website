import React from "react";
import "./style.scss";
import logo from "../../assets/image/sahara/logo.png";
import post1 from "../../assets/image/sahara/pic-1.png";
import post2 from "../../assets/image/sahara/pic-2.png";
import post3 from "../../assets/image/sahara/pic-3.png";
import post4 from "../../assets/image/sahara/pic-4.png";
import SaharaDiagram from "./components/sahara-diagram";

const Sahara = () => (
	<div className='L-sahara-wrapper'>
		<div className='G-container'>
			<nav className='L-sahara-navbar G-flex G-justify-between G-align-center G-flex-wrap'>
				<div className='L-sahara-child G-flex G-align-center'>
					<p className='L-sahara-header-title'>
						<a href='/'> &#10232; </a>
					</p>
					<div
						className='L-sahara-logo'
						style={{ backgroundImage: `url('${logo}')` }}
					/>
				</div>
				<div className='L-sahara-nav-child'>
					<ul className='L-sahara-nav-list G-flex '>
						<li className='L-sahara-link'>Home</li>
						<li className='L-sahara-link'>Region</li>
						<li className='L-sahara-link'>About</li>
					</ul>
				</div>
			</nav>
			<div className='L-sahara-main-content G-flex G-justify-between G-align-center G-flex-wrap'>
				<div className='L-sahara-main-content-child'>
					<h2 className='L-sahara-main-main-content-title'>Sahara</h2>
					<p className='L-sahara-main-content-paragraph'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ex
						explicabo impedit maxime quis rem.
					</p>
					<button className='L-sahara-btn'>Explore</button>
				</div>
				<div className='L-sahara-main-content-child G-flex G-flex-wrap'>
					<div
						className='L-sahara-post'
						style={{ backgroundImage: `url('${post1}')` }}
					>
						<h6>Western Desert</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					</div>
					<div
						className='L-sahara-post'
						style={{ backgroundImage: `url('${post2}')` }}
					>
						<h6>AL Bagawat</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					</div>
					<div
						className='L-sahara-post'
						style={{ backgroundImage: `url('${post3}')` }}
					>
						<h6>Pyramid of Giza</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					</div>
					<div
						className='L-sahara-post'
						style={{ backgroundImage: `url('${post4}')` }}
					>
						<h6>Kalahari Desert</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					</div>
				</div>
			</div>
			<h2 className='L-sahara-title'>Tourist statistics</h2>
			<SaharaDiagram />
		</div>
	</div>
);

export default Sahara;
