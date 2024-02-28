import React from "react";
import "./style.scss"
import { Link } from "react-router-dom";

export type PropTypes = {
    id:number;
    title:string
    img:string
}

export const Project:React.FC<PropTypes> = React.memo(({id, title, img}:PropTypes):JSX.Element => {
    return(
            <Link to={"/project/" + id}>
                <li className="project">
                    <img src={img} alt={title} className="project__img" />
                    <h3 className="project__title">{title}</h3>
                </li>
            </Link>
    )
})  