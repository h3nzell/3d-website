import React from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import space from '../../assets/image/space/space-background.jpg'
import sahara from '../../assets/image/sahara/sahara.webp'
import light from '../../assets/image/light/light.jpg'
import future from '../../assets/image/futureCity/background.jpg'
import mountains from '../../assets/image/3dWebstie/background.jpg'
import miami from '../../assets/image/miami/miami.webp'

const NavBar = () => (
    <div className='L-home-links-wrapper'>
        <ul className='L-home-links'>
            <li style={{ zIndex: 15, backgroundImage: `url('${future}')` }} className='L-home-link'><NavLink
                to='/futureCity'>Future City</NavLink></li>
            <li style={{ zIndex: 14, backgroundImage: `url('${space}')` }}
                className='L-home-link'><NavLink to='/space'>Space</NavLink>
            </li>
            <li style={{ zIndex: 13, backgroundImage: `url('${sahara}')` }}
                className='L-home-link'><NavLink to='/sahara'>Sahara</NavLink></li>
            <li style={{ zIndex: 12, backgroundImage: `url('${light}')` }} className='L-home-link'><NavLink
                to='/light'>Light</NavLink></li>
            <li style={{ zIndex: 11, backgroundImage: `url('${mountains}')` }} className='L-home-link'><NavLink
                to='/website3d'>3D Mountains</NavLink></li>
            <li style={{ zIndex: 10, backgroundImage: `url('${miami}')` }} className='L-home-link'><NavLink
                to='/miami'>Miami</NavLink></li>
        </ul>
    </div>
);

export default NavBar;
