import React from 'react';
import paris from '../../assets/paris.jpg';
import dubai from '../../assets/dubai.jpg'
import newYork from '../../assets/newYork.jpg'
import london from '../../assets/london.jpg'
import travelers1 from '../../assets/user1.jpg';
import travelers2 from '../../assets/user2.jpg';
import travelers3 from '../../assets/user3.jpg';
import travelers4 from '../../assets/user4.jpg';
import TravelersData from './TravelersData';

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: travelers1,
        travelerName: 'Kavanashree',
        socialLink: '@Kavana1998'
    },
    {
        id: 2,
        destinationImage: dubai,
        travelerImage: travelers2,
        travelerName: 'Austin',
        socialLink: '@Austin007'
    },
    {
        id: 3,
        destinationImage: newYork,
        travelerImage: travelers3,
        travelerName: 'Glen',
        socialLink: '@Glen_09'
    },{
        id: 2,
        destinationImage: london,
        travelerImage: travelers4,
        travelerName: 'Varsha',
        socialLink: '@Varsha_03'
    },
]

const Travelers = () => {
    return (
        <div className="travelers section container" >
            <div className="sectionContainer">
                <h2>Top travelers of this month</h2>
                <div className="travelersContainer grid">
                    {
                        travelers.map((travelerData)=>{
                            return(
                                <TravelersData key={travelerData.id}
                                    destinationImage={travelerData.destinationImage}
                                    travelerImage={travelerData.travelerImage}
                                    travelerName={travelerData.travelerName}
                                    socialLink={travelerData.socialLink}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers
