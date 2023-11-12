import React from 'react';
import Wrapper from "../assets/wrappers/SmallSidebar";

import { FaTimes } from 'react-icons/fa';

import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';
import Links from "../utils/links";

const SmallSideBar = (props) => (
    <Wrapper>
        <div className="sidebar-container show-sidebar">
            <div className="content">
                <button type='button' className="close-btn"><FaTimes/></button>
                <header><Logo/></header>
                <div className="nav-links">
                    {links.map((link =>{
                        const{text, path, icon} = link;
                        return (
                            <NavLink to={path} key={text} className = "nav-links">
                                <span className='icon'>{icon}</span> {text}
                            </NavLink>
                        );
                    }))}
                </div>
            </div>
        </div>

    </Wrapper>
);

export default SmallSideBar;