import React from 'react';
import ReactPlayer from 'react-player/youtube'

interface Props {
}

const VideSection: React.FC<Props> = () => {
    return (
        <div className={`py-20`}>
            {/*<Fade triggerOnce>*/}

            <div className={`max-w-[1280px] mx-auto p-4`}>
                <div className={`flex items-center justify-center flex-wrap gap-5`}>
                    <div className={`max-w-[400px] w-full`}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                controls={true}
                                className='react-player'
                                url='https://www.youtube.com/watch?v=SEm0_7ODGk0'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>

                    <div className={`max-w-[400px] w-full`}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                controls={true}
                                className='react-player'
                                url='https://www.youtube.com/watch?v=-ynz3ozgG0w'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>

                    <div className={`max-w-[400px] w-full`}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                controls={true}
                                className='react-player'
                                url='https://www.youtube.com/watch?v=UcijGMHbcZ0'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>

                    <div className={`max-w-[400px] w-full`}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                controls={true}
                                className='react-player'
                                url='https://www.youtube.com/watch?v=HL0BjATm-MM&t=2s'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>

                    <div className={`max-w-[400px] w-full`}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                controls={true}
                                className='react-player'
                                url='https://www.youtube.com/watch?v=aeN1QeFDBjQ&t=2s'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>

                    <div className={`max-w-[400px] w-full`}>
                        <div className='player-wrapper'>
                            <ReactPlayer
                                controls={true}
                                className='react-player'
                                url='https://www.youtube.com/watch?v=2a2HX2KkdZE'
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