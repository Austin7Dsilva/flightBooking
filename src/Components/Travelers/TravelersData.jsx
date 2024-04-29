import React from 'react';

const TravelersData = (props) => {
    return (
        <div key={props.key} className="singleTraveler">
            <img src={props.destinationImage} className="destinationImage" />
            <div className="travelerDetails">
                <div className="travelerPicture">
                    <img src={props.travelerImage} alt="" className="travelerImage" />
                </div>
                <div className="travelerName">
                    <span>{props.travelerName}</span>
                    <p>{props.socialLink}</p>
                </div>
            </div>
        </div>
    )
}

export default TravelersData
