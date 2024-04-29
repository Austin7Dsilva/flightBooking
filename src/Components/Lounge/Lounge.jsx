import React from 'react';
import lounge1 from '../../assets/lounge-1.jpg'
import lounge2 from '../../assets/lounge-2.jpg'

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={lounge1} alt="" />
                    <img src={lounge2} alt="" />
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">
                        <div className="singleGrid">
                            <span className="gridTitle">Help through the airport</span>
                            <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">Priority Boarding</span>
                            <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">Care on the flight</span>
                            <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                        </div>

                        <div className="singleGrid">
                            <span className="gridTitle">Chauffer-drive service</span>
                            <p>Yon can also call airlines from your phone and book a flight ticket!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lounge
