import React from 'react';
import ReactPlayer from "react-player";
import {Fade} from "react-awesome-reveal";

interface Props {
}

const VideSection: React.FC<Props> = () => {
    return (
        <div className={`py-20`}>
            <Fade triggerOnce>

            <div className={`max-w-[1000px] mx-auto p-4`}>
                <div className='player-wrapper'>
                    <ReactPlayer
                        controls={true}
                        className='react-player'
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default VideSection;