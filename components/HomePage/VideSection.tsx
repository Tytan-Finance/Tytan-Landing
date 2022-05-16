import React from 'react';
import ReactPlayer from "react-player";
import {Fade} from "react-awesome-reveal";

interface Props {
}

const VideSection: React.FC<Props> = () => {
    return (
        <div className={`py-20`}>
            {/*<Fade triggerOnce>*/}

            <div className={`max-w-[1000px] mx-auto p-4`}>
                <div className={`flex items-center justify-center flex-wrap gap-5`}>
                    <div className={`max-w-[300px] w-full`}>
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

                    <div className={`max-w-[300px] w-full`}>
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

                    <div className={`max-w-[300px] w-full`}>
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

                    <div className={`max-w-[300px] w-full`}>
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

                    <div className={`max-w-[300px] w-full`}>
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

                    <div className={`max-w-[300px] w-full`}>
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

            </div>
            {/*</Fade>*/}
        </div>
    );
};

export default VideSection;