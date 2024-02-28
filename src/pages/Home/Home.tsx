import React from "react";
import { Projects } from "../Projects/Projects";

export const Home:React.FC = React.memo(():JSX.Element => {
    return(
        <>
            <Projects/>
        </>
    )
})