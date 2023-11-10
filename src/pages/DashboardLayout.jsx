import React, {createContext, useContext, useState} from 'react';
import {Outlet} from "react-router-dom";
import {Navbar, SmallSideBar, BigSideBar} from "../component/index.js";
import Wrapper from "../assets/wrappers/Dashboard.js";

const DashBoardContext = createContext();
function DashboardLayout(props) {
    const userDummy = {name : 'Rizky'};
    const [showSideBar, setShowSetBar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toogleSideBar = () => {
        setShowSetBar(!showSideBar);
        console.log(!showSideBar);
    }
    const toogleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const isUserLogout = () => {
        console.log('logout user');
    }

    return (
        <DashBoardContext.Provider
            value={
                {userDummy,
                showSideBar,
                isDarkTheme,
                toogleDarkTheme,
                toogleSideBar,
                isUserLogout}}>
        <Wrapper>
            <main className="dashboard">
                <SmallSideBar/>
                <BigSideBar/>
                <div>
                    <Navbar/>
                    <div className="dashboard-page">
                        <Outlet/>
                    </div>
                </div>
            </main>
        </Wrapper>
        </DashBoardContext.Provider>
    );
}

export const useDashboardContext = () => useContext(DashBoardContext);
export default DashboardLayout;