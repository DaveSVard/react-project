import React, { useEffect, useState } from "react"
import "./style.scss"
import { useParams } from "react-router-dom"
import { projectsArray } from "../../helpers/projectList"
import { ProjectT } from "../../type"


export const Project:React.FC = React.memo(():JSX.Element => {
    const {id} = useParams()
    const [project, setProject] = useState<ProjectT>()
    useEffect(() => {
        if (id) {
            let find = projectsArray.find(elm => elm.id == +id)  
            setProject(find)
        } 
    }, [id])
    
    return(
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project?.title}</h1>
                    <img src={project?.bigImg} alt="" className="project-details__img" />
                    <div className="project-details__desc">
                        <p>{project?.skills}</p>
                    </div>
                    {project?.gitHubLink && <a href={project.gitHubLink} className="btn-WithOutline">
                        <img src={project?.gitHubLink} alt=""/>
                        GitHub repo
                    </a>}
                </div>

            </div>
        </main>
    )
})