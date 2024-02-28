import React from "react";

export const Skills:React.FC = React.memo(():JSX.Element => {
    return(
        <main className="section">
            <div className="container">
                <div className="section-div">
                    <h1 className="title-1">Skills</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Next, Redux, HTML, CSS, SCSS, SASS, NPM, BootStrap, MaterialUI, StyledComponents</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
})  
