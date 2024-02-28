import { ProjectT } from "../type";
import project01 from "./../img/projects/01.jpg"
import projectBig01 from "./../img/projects/01-big.jpg"

import project02 from "./../img/projects/02.jpg"
import projectBig02 from "./../img/projects/02-big.jpg"

import project03 from "./../img/projects/03.jpg"
import projectBig03 from "./../img/projects/03-big.jpg"

import project04 from "./../img/projects/04.jpg"
import projectBig04 from "./../img/projects/04-big.jpg"

import project05 from "./../img/projects/05.jpg"
import projectBig05 from "./../img/projects/05-big.jpg"

import project06 from "./../img/projects/06.jpg"
import projectBig06 from "./../img/projects/06-big.jpg"


export const projectsArray:ProjectT[] = [
    {id: 1, title: "Gaming streaming portal", skills: "React, Html, SCSS", img: project01, bigImg: projectBig01, gitHubLink: "https://github.com"},
    {id: 2, title: "Video service", skills: "React, Redux, SCSS", img: project02, bigImg: projectBig02},
    {id: 3, title: "Video portal", skills: "React, CSS", img: project03, bigImg: projectBig03},
    {id: 4, title: "Dating app", skills: "React, Js, SCSS", img: project04, bigImg: projectBig04, gitHubLink: "https://github.com"},
    {id: 5, title: "Landing", skills: "Html, React, CSS, SCSS", img: project05, bigImg: projectBig05, gitHubLink: "https://github.com"},
    {id: 6, title: "Gaming community", skills: "Html, React, CSS, SCSS", img: project06, bigImg: projectBig06},
] 