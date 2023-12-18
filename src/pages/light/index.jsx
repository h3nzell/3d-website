import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/image/light/logo.png";
import lamp from "../../assets/image/light/lamp.png";
import light from "../../assets/image/light/light.png";
import icon from "../../assets/image/light/menu.png";
import classNames from "classnames";

const Light = () => {
	const [active, setActive] = useState(false);

	const handleCLick = () => {
		setActive((prevActive) => !prevActive);
	};

	return (
		<>
			<div
				className={classNames("L-light-wrapper", {
					["L-light-active-wrapper"]: active,
				})}
			>
				<div className='G-container'>
					<nav className='L-light-navbar G-flex G-align-center G-justify-between G-flex-wrap'>
						<div className='L-light-navbar-child G-flex G-align-center'>
							<p className='L-light-header-title'>
								<NavLink to='/'> &#10232; </NavLink>
							</p>
							<div
								className='L-light-header-img'
								style={{ backgroundImage: `url('${icon}')` }}
							/>
							<div
								className='L-light-header-img'
								style={{ backgroundImage: `url('${logo}')` }}
							/>
						</div>
						<div className='L-light-navbar-child G-flex G-align-center G-flex-wrap'>
							<ul className='L-light-header-list G-flex G-flex-wrap'>
								<li className='L-light-link'>Latest</li>
								<li className='L-light-link'>Modern</li>
								<li className='L-light-link'>Contemporary</li>
								<li className='L-light-link'>Affordable</li>
							</ul>
							<button
								className={classNames(
									{ ["L-light-active-btn "]: active },
									"L-light-btn"
								)}
								onClick={handleCLick}
								type='button'
							>
								<span />
							</button>
						</div>
					</nav>
					<div className='L-lamp-container'>
						<div
							className='L-lamp-img L-light-absolute'
							style={{ backgroundImage: `url('${lamp}')` }}
						/>
						<div
							className={classNames("L-light-img", "L-light-absolute", {
								["L-on-light"]: active,
							})}
							style={{ backgroundImage: `url('${light}')` }}
						/>
					</div>
					<div className='L-lamp-text-container'>
						<h2>Latest in lighting</h2>
						<p>
							This is a first lamp from our company. we're making a huge
							collections of modern lamps in a categories from home use to
							office use.
						</p>
						<button>Check all collections</button>
						<div className='L-lamp-control'>
							<p>04</p>
							<div className='L-lamp-line'>
								<span />
							</div>
							<p>05</p>
						</div>
					</div>
					<div className='L-paragraph-text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
						architecto atque blanditiis consectetur consequatur cumque debitis
						dolore est exercitationem incidunt ipsa iure iusto libero modi
						molestiae, molestias nam natus nesciunt nulla, perspiciatis possimus
						quaerat quia quidem, quisquam quos rerum saepe sequi sint totam
						voluptatum? A ad facere iusto nisi rerum soluta suscipit ullam? Amet
						architecto corporis cum dicta doloremque eum facilis, hic inventore
						iure magnam modi necessitatibus numquam odio perferendis repudiandae
						similique voluptas. Cumque dolorem harum maxime qui quis! Aperiam
						consequatur deleniti harum itaque iusto, modi molestias nam officiis
						perferendis, qui quo soluta ullam velit. Beatae, consequatur
						doloribus dolorum eius et eveniet fugiat itaque provident quam
						vitae! A adipisci, architecto atque commodi consectetur culpa
						debitis deserunt, dignissimos dolore ducimus eaque earum excepturi
						expedita facere fugiat fugit harum impedit incidunt ipsam iure iusto
						laboriosam laborum mollitia natus necessitatibus nostrum obcaecati
						odio optio pariatur perferendis placeat porro quae reiciendis soluta
						tempora vitae voluptatem! Animi atque, beatae, consectetur fugiat
						laboriosam laborum, nemo odio odit optio perferendis quam quod
						repudiandae ut. Ad aliquam corporis dignissimos eius eos excepturi
						expedita iusto necessitatibus nemo neque, nisi odit, officia
						pariatur, possimus quibusdam rem repellat repellendus sapiente sunt
						vero? Asperiores, assumenda consectetur ea earum eius eligendi
						eveniet facere ipsam iste iure, maiores maxime minus nam natus nulla
						officiis optio possimus quasi quos repellat repellendus
						reprehenderit sequi unde veniam vero. Ad adipisci, amet debitis
						dolore ducimus et nam numquam velit! Assumenda, consequuntur
						ducimus, harum laboriosam minus modi molestias nobis quae quis
						repellat, similique sit sunt temporibus unde voluptatum? Adipisci
						amet asperiores aut commodi consectetur consequatur consequuntur
						culpa cum cupiditate deleniti doloremque esse est eveniet expedita
						facere facilis fuga impedit ipsum itaque laudantium magnam magni
						nisi odio officiis omnis, perspiciatis possimus praesentium qui
						repellat sunt suscipit temporibus tenetur voluptatem! Asperiores
						dolor dolorem dolores esse eum facere facilis iure laudantium
						magnam, maiores nesciunt nobis quae quibusdam saepe soluta ullam
						velit! A dolorum in laborum molestiae nisi non optio quidem ratione
						temporibus veritatis. Adipisci amet commodi culpa ea molestiae
						mollitia perspiciatis quam, totam.
					</div>
				</div>
			</div>
		</>
	);
};

export default Light;
