import React from "react";
import "./style.scss"
import vk from "./../../img/icons/vk.svg"
import inst from "./../../img/icons/instagram.svg"
import twit from "./../../img/icons/twitter.svg"
import git from "./../../img/icons/gitHub.svg"
import link from "./../../img/icons/linkedIn.svg"

export const Footer:React.FC = React.memo(():JSX.Element => {

    const icons:any[] = [vk, inst, twit, git, link]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <ul className="social">
                        {icons.map((elm, i) => {
                            return(
                                <li key={i} className="social__item"><a href="#!"><img src={elm} alt="Link" /></a></li>
                            )
                        })}
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
})