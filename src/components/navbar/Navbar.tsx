import React from "react";
import "./style.scss"
import { NavLink } from "react-router-dom";
import { BtnDarkMode } from "../btnDarkMode/BtnDarkMode";
export const Navbar:React.FC = React.memo(():JSX.Element => {
    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to={"/"} className="logo"><strong>Freelancer</strong> portfolio</NavLink>
                    <ul className="nav-list">
                        <li className="nav-list__item"><NavLink to={"/"} className="nav-list__link ">Home</NavLink></li>
                        <li className="nav-list__item"><NavLink to={"/skills"} className="nav-list__link ">Skills</NavLink></li>
                        <li className="nav-list__item"><NavLink to={"/contacts"} className="nav-list__link">Contacts</NavLink></li>
                   <BtnDarkMode/>
                    </ul>
                </div>
            </div>
        </nav>
    )
})