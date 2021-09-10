import './review.css';
import React from "react"

export default function Review1 (props) {
    return (
        <div id="firstReview">
            <div id="reviewRight">
                <div id="patientCard">
                    <div id="patientPic"></div>
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
                    <p>{props.review1}</p>
                    {props.review2 && <p>{props.review2}</p>}
                </div>
            </div>
        </div>
    )
}