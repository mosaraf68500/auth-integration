import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../components/Header/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;