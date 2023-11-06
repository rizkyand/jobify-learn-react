import React from 'react';
import {Outlet} from "react-router-dom";

function HomeLayout() {
    return (
        <div>
            <nav>Home --> Nav Bar</nav>
            <Outlet/>
        </div>

    );
}

export default HomeLayout;