import './review.css';
import React from "react"

export default function Review1 (props) {
    return (
        <div id="firstReview">
            <div id="reviewRight">
                <div id="patientCard">
<<<<<<< HEAD
                    <img alt="avatar" src={props.image} id="patientPic"/>
=======
                    <img id="patientPic" src={props.image}></img>
>>>>>>> 4dfd7d1be04fc76d83e8e83234e676545dea724e
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