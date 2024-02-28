import React from "react";
import "./style.scss"
import { Project } from "../../components/project/Project";
import { projectsArray } from "../../helpers/projectList";
import { Header } from "../../components/header/Header";

export const Projects:React.FC = React.memo(():JSX.Element => {
    return(
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projectsArray.map(elm => {
                            return(
                                <Project key={elm.id} id={elm.id} title={elm.title} img={elm.img} />
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
})