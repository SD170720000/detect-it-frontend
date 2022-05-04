import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoNewspaperOutline } from 'react-icons/io5'
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const options = [
        {srno:1,id:'#',icon:<AiOutlineHome />},
        {srno:2,id:'#research',icon:<IoNewspaperOutline />},
        {srno:3,id:'#team',icon:<AiOutlineTeam />},
        {srno:4,id:'#about',icon:<AiOutlineUser />},
        {srno:5,id:'#contact',icon:<BiMessageSquareDetail />},
    ]

    return (
        <nav>
            {
                options.map((option) => {
                    return (
                        <a key={option.srno} 
                        href={option.id} 
                        onClick={() => setActiveNav(option.id)} 
                        className={activeNav === option.id ? 'active' : ''}>
                            {option.icon}
                        </a>
                    )
                })
            }
        </nav>

    )
}


export default Nav