import React from 'react';
import video from '../../assets/plane-video.mp4'

const Home = () => {
    return (
        <div className='home flex container'>

            <div className="mainText">
                <h1>Create everlasting memories with us</h1>
            </div>

            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay="true" muted loop="true" className='video'></video>
                </div>
            </div>
        </div>
    );
}

export default Home;
