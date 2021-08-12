import React from"react"
import "./mobile-carousel.css"
import { Accordion } from "react-bootstrap"

export default function MobileDocs (props) {
    const shortNameArr = props.data.name.split(" ")
    const shortName = shortNameArr[0] +" " + shortNameArr[1]
    return (
        <div id="mobileDoc">
            <h1 id="mobileDocName">{shortName}</h1>
            <img id="docImgMobile" src= {props.img}alt=""/>
            <div id="mobileDocJob">{props.data.job}</div>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ключові навички:</Accordion.Header>
                    <Accordion.Body>
                        {props.data.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                    </Accordion.Body>
                </Accordion.Item>
  
            </Accordion>
            
        </div>  
        
    )
}