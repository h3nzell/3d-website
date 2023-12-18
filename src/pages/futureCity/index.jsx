import React from 'react';
import videoFuture from '../../assets/image/futureCity/futureCity.mp4'
import './style.scss'
import firstImage from '../../assets/image/futureCity/first.jpg'
import secondImage from '../../assets/image/futureCity/second.jpg'
import thirdImage from '../../assets/image/futureCity/third.jpg'

const FutureCity = () => (
    <div className='L-future-city-wrapper'>
        <video autoPlay={true} loop={true} muted={true} playsInline={true} className='L-back-video'>
            <source src={videoFuture} type='video/mp4' />
        </video>
        <div className='G-container L-future-block'>
            <nav className='L-future-navbar G-flex G-justify-between G-align-center G-flex-wrap'>
                <div className='G-flex G-align-center'>
                    <p className='L-future-header-title'><a href='/'> &#10232; </a></p>
                    <p className='L-future-logo'>Future City</p>
                </div>

                <ul className='L-future-list G-flex'>
                    <li className='L-future-link'>Home</li>
                    <li className='L-future-link'>Buildings</li>
                    <li className='L-future-link'>Blog</li>
                    <li className='L-future-link'>Contact US</li>
                </ul>
            </nav>
            <div className='L-future-city-content'>
                <h2 className='L-city-title'>Welcome to Future City!!</h2>
                <button className='L-city-btn'>More Information</button>
                <div className="L-future-blocks G-flex G-justify-between G-flex-wrap">
                    <div className="L-future-block-container">
                        <div className='L-future-block-image'
                            style={{ backgroundImage: `url('${firstImage}')` }} />
                        <div className='L-future-block-title'>
                            <h5>First City</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quis?</p>
                        </div>

                    </div>
                    <div className="L-future-block-container">
                        <div className='L-future-block-image'
                            style={{ backgroundImage: `url('${secondImage}')` }} />
                        <div className='L-future-block-title'>
                            <h5>Second City</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quis?</p>
                        </div>
                    </div>
                    <div className="L-future-block-container">
                        <div className='L-future-block-image'
                            style={{ backgroundImage: `url('${thirdImage}')` }} />
                        <div className='L-future-block-title'>
                            <h5>Third City</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quis?</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default FutureCity;
