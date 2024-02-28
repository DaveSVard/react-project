import React, { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import "./style.scss"
import sun from "./Sun.svg"
import moon from "./Moon.svg"

export const BtnDarkMode:React.FC = React.memo(():JSX.Element => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode","light")
    const btnRef = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        if(darkMode == "dark") {
            document.body.classList.add("dark")
            if(btnRef.current) {
                btnRef.current.classList.add("dark-mode-btn--active")
            }
        } else {
            document.body.classList.remove("dark")
            if(btnRef.current) {
                btnRef.current.classList.remove("dark-mode-btn--active")
            }
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((value:any) => {
            return value == "light" ? "dark" : "light"
        })
    }
    return(
        <div>
            <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
                <img src={sun} alt="Light mode"  className="dark-mode-btn__icon"/>
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
            </button>
        </div>
    )
})