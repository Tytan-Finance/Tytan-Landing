import React from 'react';
import ReactPlayer from "react-player";

interface Props {
}

const VideSection: React.FC<Props> = () => {
    return (
        <div className={`py-20`}>
            <div className={`max-w-[1000px] mx-auto p-4`}>
                <div className='player-wrapper'>
                    <ReactPlayer
                        controls={true}
                        className='react-player'
                        url='https://www.youtube.com/watch?v=aeN1QeFDBjQ'
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        </div>
    );
};

export default VideSection;