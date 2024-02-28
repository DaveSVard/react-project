import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { ScrollToTop } from "../../utils/ScrollToTop";

export const Layout:React.FC = ():JSX.Element => {
    return(
        <div className="App">
            <ScrollToTop/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
} 