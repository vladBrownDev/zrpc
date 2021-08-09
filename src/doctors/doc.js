import React from "react"
import "./doc1.css"

const Doc = props => {
    return(
        <div id="docCard">
            <div id="docImage">
            </div>
            <div id="docRight">
                <div id="docDesc">
                    <h1>{props.data.name}</h1>
                    <p>{props.data.job} </p>
                    <p>{props.data.skillsHead}</p>
                    <ul>
                        {props.data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                    </ul>
                    <p>{props.data.description}</p>
                    
                </div>
                <div id="buttonShell">
                    <button>{props.data.button}</button>
                </div>
            </div>
          
            
        </div>
    )
}

export default Doc;