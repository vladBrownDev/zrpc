import React from "react"
import "./doc1.css"
import {Link} from 'react-scroll'
import { motion } from 'framer-motion'

const Doc = props => {
    return(
        <div id="docCard">
            <img id="docImage" alt="DoctorImage" src={props.img}>
            </img>
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
                    <Link activeClass="active"  to="number" duration={300}  spy={true} ><motion.button whileTap={{ scale: 0.9 }}>{props.data.button}</motion.button></Link>
                </div>
            </div>
          
            
        </div>
    )
}

export default Doc;