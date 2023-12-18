import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Virtual, Controller, Mousewheel } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/swiper-bundle.css";
import img1 from "../../assets/image/miami/1.jpg";
import img2 from "../../assets/image/miami/2.jpg";
import img3 from "../../assets/image/miami/3.jpg";
import img4 from "../../assets/image/miami/4.jpg";
import img5 from "../../assets/image/miami/5.jpg";
import img6 from "../../assets/image/miami/6.jpg";
import img7 from "../../assets/image/miami/7.jpg";
import img8 from "../../assets/image/miami/8.jpg";
import img9 from "../../assets/image/miami/9.jpg";

SwiperCore.use([Virtual, Parallax, Controller, Mousewheel]);
const Miami = () => {
	const [images] = useState([
		{
			id: 1,
			img: img1,
		},

		{
			id: 2,
			img: img2,
		},

		{
			id: 3,
			img: img3,
		},

		{
			id: 4,
			img: img4,
		},

		{
			id: 5,
			img: img5,
		},

		{
			id: 6,
			img: img6,
		},

		{
			id: 7,
			img: img7,
		},

		{
			id: 8,
			img: img8,
		},

		{
			id: 9,
			img: img9,
		},
	]);

	const [controlledSwiper, setControlledSwiper] = useState(null);
	const swiperParams = useMemo(
		() => ({
			allowTouchMove: true,
			followFinger: true,
			grabCursor: true,
			preloadImages: false,
			preventInteractionOnTransition: true,
			centeredSlides: true,
			mousewheel: true,
			parallax: true,
			breakpoints: {
				0: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},

				680: {
					slidesPerView: 3.5,
					spaceBetween: 60,
				},
			},
		}),

		[]
	);

	const swiperBgParams = useMemo(
		() => ({
			centeredSlides: true,
			parallax: true,
			slidesPerView: 3.5,
			spaceBetween: 60,
		}),

		[]
	);

	return (
		<div className='L-main-miami'>
			<div className='L-description'>
				<div className='L-logo-miami'>Miami</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ex
					explicabo iusto laboriosam molestiae saepe unde. Corporis ex fugit
					molestias odio possimus, quibusdam voluptas voluptate! Ipsam libero
					numquam sit. Commodi.
				</p>
			</div>
			<div className='L-miami' style={{ zIndex: 10 }}>
				<div className='rotate' style={{ zIndex: 10 }}>
					<Swiper
						{...swiperParams}
						modules={[Controller]}
						controller={{ control: controlledSwiper }}
					>
						{images.map((slide, index) => (
							<SwiperSlide
								key={slide.img}
								virtualIndex={index}
								className='L-slider-item'
							>
								<div className={"slider-image-slide"}>
									<div
										className='slider-image-slide-inner'
										data-swiper-parallax={slide.id % 2 === 0 ? "30%" : "20%"}
										style={{ backgroundImage: `url('${slide.img}')` }}
									></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className='L-slider-bg L-miami' style={{ zIndex: 1 }}>
				<div className='rotate' style={{ zIndex: 1 }}>
					<Swiper
						{...swiperBgParams}
						modules={[Controller]}
						onSwiper={setControlledSwiper}
					>
						{images.map((slide, index) => (
							<SwiperSlide
								key={slide.img}
								virtualIndex={index}
								className='L-slider-item'
							>
								<div className='slider-image-slide'>
									<div
										className='slider-image-slide-inner'
										data-swiper-parallax={slide.id % 2 === 0 ? "30%" : "20%"}
										style={{ backgroundImage: `url('${slide.img}')` }}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Miami;
