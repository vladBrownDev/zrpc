import React from "react"
import "./doc1.css"

export default function Doc (props) {
    
    return(
        
        <div id="docCard">

        
            <div id="docImage">

            </div>
            <div id="docDesc">
                <h1>{props.data.name}</h1>
                <p>{props.data.job} </p>
                <p>{props.data.skillsHead}</p>
                <ul>
                    <li>{props.data.skills[0]}</li>
                    <li>{props.data.skills[1]}</li>
                    <li>{props.data.skills[2]}</li>
                    <li>{props.data.skills[3]}</li>
                    <li>{props.data.skills[4]}</li>
                </ul>
                <p>{props.data.description}</p>
                <div id="buttonShell">
                    <button>{props.data.button}</button>
                </div>
            </div>
        </div>
    )
}