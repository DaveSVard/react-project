import React from "react";
import { ContactT } from "../../type";

export const Contacts:React.FC = React.memo(():JSX.Element => {

    const contactsInfo:ContactT[] = [
        {id: 1, title: "Location", info: "Armenia/Erevan"},
        {id: 2, title: "Telegram / WhatsApp", info: "+37496888903"},
        {id: 3, title: "Email", info: "vardanyan003@gmail.com", color: true},
    ]

    return(
        <main className="section">
            <div className="container">
                <div className="section-div">
                    <h1 className="title-1">Contacts</h1>
                    <ul className="content-list">
                        {contactsInfo.map(elm => {
                            return(
                                <li key={elm.id} className="content-list__item">
                                    <h2 className="title-2">{elm.title}</h2>
                                    <p style={elm.color ?{color: "#5C62EC"} : {color: "black"}}>{elm.info}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
})  
