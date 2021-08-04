import './review.css';
import React from "react"

export default function Review1 () {
    return (
        <div id="firstReview">
            <div id="reviewRight">
                <div id="patientCard">
                    <div id="patientName">
                        Имя Фамилия
                    </div>

                    <div id="downPatient">
                        <span>Пациент</span>
                        <span>21.01.2021</span>
                    </div> 
                </div>
                <div id="reviewText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}