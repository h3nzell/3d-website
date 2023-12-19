import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import "./style.scss";
import image1 from "../../assets/image/3dWebstie/images/1.jpg";
import image2 from "../../assets/image/3dWebstie/images/2.jpg";
import image3 from "../../assets/image/3dWebstie/images/3.jpg";
import image4 from "../../assets/image/3dWebstie/images/4.jpg";
import image5 from "../../assets/image/3dWebstie/images/5.jpg";
import sound from "../../assets/image/3dWebstie/images/sound.gif";
import audio from "../../assets/image/3dWebstie/media/ambient.mp3";
import mediaVideo from "../../assets/image/3dWebstie/media/video_optimized.mp4";

const Website3D = () => {
	const [paused, setPaused] = useState(false);
	const audioRef = useRef(null);
	const soundRef = useRef(null);

	useEffect(() => {
		let zSpacing = -1000,
			lastPos = zSpacing / 5,
			$frames = document.getElementsByClassName("L-3D-frame"),
			framesArr = Array.from($frames),
			zVal = [];
		window.onscroll = function () {
			let top = document.documentElement.scrollTop,
				delta = lastPos - top;
			lastPos = top;
			framesArr.forEach((_, i) => {
				zVal.push(i * zSpacing + zSpacing);
				zVal[i] += delta * -5.5;
				let frame = framesArr[i],
					transform = `translateZ(${zVal[i]}px)`,
					opacity = zVal[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
				frame.setAttribute(
					"style",
					`transform:${transform} ; opacity:${opacity}`
				);
			});
		};

		window.scrollTo(0, 1);
		window.onfocus = function () {
			paused ? audioRef.current.pause() : audioRef.current.play();
		};
		window.onblur = function () {
			setPaused(true);
			audioRef.current.pause();
		};
	}, []);

	const handleClick = () => {
		setPaused((prevPaused) => !prevPaused);
		!paused ? audioRef.current.play() : audioRef.current.pause();
	};

	return (
		<div className='L-website-3D'>
			<p className='L-3D-header-title'>
				<NavLink to='/'> &#10232; </NavLink>
			</p>
			<div className='L-3D-container'>
				<section className='L-3D-gallery'>
					<div className='L-3D-frame'>
						<div className='L-3D-frame-content'>
							<h2>Beautiful World</h2>
						</div>
					</div>
					<div className='L-3D-frame'>
						<div className='L-3D-frame-content'>
							<div
								style={{ backgroundImage: `url('${image1}')` }}
								className={classNames("L-3D-frame-media", "L-frame-media-left")}
							/>
						</div>
					</div>
					<div className='L-3D-frame L-frame-bg'>
						<div className='L-3D-frame-content'>
							<video
								className='L-3D-frame-media L-frame-media-right'
								src={mediaVideo}
								autoPlay
								loop
								muted
							></video>
						</div>
					</div>
					<div className='L-3D-frame'></div>
					<div className='L-3D-frame'>
						<div className='L-3D-frame-content L-text-right'>
							<h3>Pure Planet</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
								culpa iusto magnam maiores natus quaerat?Lorem ipsum dolor sit
								amet, consectetur adipisicing elit.{" "}
							</p>
						</div>
					</div>
					<div className='L-3D-frame L-frame-bg'>
						<div className='L-3D-frame-content'>
							<div
								style={{ backgroundImage: `url('${image2}')` }}
								className={classNames("L-3D-frame-media", "L-frame-media-left")}
							/>
						</div>
					</div>
					<div className='L-3D-frame'></div>
					<div className='L-3D-frame L-frame-bg'>
						<div className='L-3D-frame-content'>
							x
							<div
								className='L-3D-frame-media L-frame-media-right'
								style={{ backgroundImage: `url('${image3}')` }}
							/>
						</div>
					</div>
					<div className='L-3d-frame'></div>
					<div className='L-3D-frame L-frame-bg'>
						<div className='L-3D-frame-content L-text-left'>
							<h3>Ask the Mountains</h3>
							<p>
								Cum eos esse eveniet excepturi, expedita fugiat labore libero
								minus mollitia odit officiis omnis, quaerat quo tenetur vel vero
								voluptates? Harum, quaerat?.{" "}
							</p>
						</div>
					</div>
					<div className='L-3D-frame L-frame-bg'>
						<div className='L-3D-frame-content'>
							<div
								className='L-3D-frame-media L-frame-media-right'
								style={{ backgroundImage: `url('${image4}')` }}
							/>
						</div>
					</div>
					<div className='L-3D-frame L-frame-bg '>
						<div className='L-3D-frame-content'>
							<video
								src={mediaVideo}
								className={classNames("L-3D-frame-media", "L-frame-media-left")}
								autoPlay
								loop
								muted
							></video>
						</div>
					</div>
					<div className='L-3D-frame'></div>
					<div className='L-3D-frame'></div>
					<div className='L-3D-frame L-frame-bg'>
						<div className='L-3D-frame-content'>
							<div
								className='L-3D-frame-media L-frame-media-right'
								style={{ backgroundImage: `url('${image5}')` }}
							/>
						</div>
					</div>
					<div className='L-3D-frame '>
						<div className='L-3D-frame-content'>
							<video
								className='L-3D-frame-media '
								src={mediaVideo}
								autoPlay
								loop
								muted
							></video>
						</div>
					</div>
					<div className='L-3D-frame'></div>
					<div className='L-3D-frame'></div>

					<div className='L-3D-frame'>
						<div className='L-3D-frame-content'>© H3nzell</div>
					</div>
				</section>
				<img
					alt='alt'
					ref={soundRef}
					src={sound}
					onClick={handleClick}
					className={classNames({ ["paused"]: !paused }, "L-3D-sound-btn ")}
				/>

				<audio ref={audioRef} className='L-3D-audio' src={audio} loop />
			</div>
		</div>
	);
};

export default Website3D;
