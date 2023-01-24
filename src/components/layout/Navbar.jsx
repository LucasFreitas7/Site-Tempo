import './Navbar.css'
import React from "react";
import { Link } from 'react-router-dom';
import Nuvem from '../../img/nuvem.png'
export const Navbar = ({title, subtitle}) => {
    return(
            <div className="navapp">
                <div>
                    <img src={Nuvem} className="img"/>
                </div>
                <nav className='navbar'>
                <ul className='list' >
                    <li className='item'>
                        <Link exact to= "/">{ title }</Link>
                    </li>
                    <li className='item'>
                        <Link to= "/tempo">{ subtitle }</Link>
                    </li>
                </ul>
                </nav>
            </div>
    )
    
}