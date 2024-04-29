import React from 'react';
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck, BsBookmarkCheck } from "react-icons/bs";

const Info = () => {
    return (
        <div className='info section'>
            <div className="info__container container">
                <div className="titleDiv flex">
                    <h2>Travel to make memories all around the world  </h2>
                    <button className="btn">View All</button>
                </div>

                <div className="cardsDiv grid">
                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <RxCalendar className='icon'/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv colorOne flex">
                            <BsShieldCheck className='icon'/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv colorTwo flex">
                            <BsBookmarkCheck className='icon'/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
