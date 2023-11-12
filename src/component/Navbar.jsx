import React from 'react';
import Wrapper from "../assets/wrappers/Navbar.js";
import {FaIcons} from "react-icons/fa";
import {BiSolidHome} from "react-icons/bi";
import {MdHomeWork} from "react-icons/md";
import {TbLayoutSidebarLeftExpandFilled} from "react-icons/tb";
import Logo from "./Logo.jsx";
import logo from "../assets/images/logo.svg";
import {useDashboardContext} from "../pages/DashboardLayout.jsx";


const Navbar = () => {
    const {toogleSideBar} = useDashboardContext();
    return (
        <Wrapper>
            <div className="nav-center">
                <button type='button' className='toogle-btn' onClick={toogleSideBar}>
                    <TbLayoutSidebarLeftExpandFilled/>
                </button>
                <div>
                    <Logo/>
                    <h4 className="logo-text">Dashboard</h4>
                </div>
                <div className='btn-container'>logout
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;