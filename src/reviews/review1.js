import './review.css';
import React from "react"

export default function Review1 (props) {
    return (
        <div id="firstReview">
            <div id="reviewRight">
                <div id="patientCard">
                    <img id="patientPic" src={props.image} alt="patient pic"></img>
                    <div id="rewNameShell">
                        <div id="patientName">
                            {props.name}
                        </div>

                        <div id="downPatient">
                            <span></span>
                            <span>{props.date}</span>
                        </div> 
                    </div>
                    
                </div>
                <div id="reviewText">
                    <span class="bigScreen"><p>{props.review1}</p>
                    {props.review2 && <p>{props.review2}</p>}</span>
                    <span class="smallScreen"><p>{props.review1Small}</p>
                    {props.review2Small && <p>{props.review2Small}</p>}</span>
                </div>
            </div>
        </div>
    )
}