import React from "react";
import '../App.css';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout () {
    
    return (
        <>  
            <div className="site-wrapper">
                <Header/>
                <main>
                    <Outlet/>
                </main>
            </div>

        </>
    )
}

export default Layout;