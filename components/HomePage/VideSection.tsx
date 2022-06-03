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
                                url='https://www.youtube.com/watch?v=J_dJRCUvILE'
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
                                url='hhttps://www.youtube.com/watch?v=vxRsKCNGG30'
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
                                url='https://www.youtube.com/watch?v=4Wbi0-4uc0U'
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
                                url='https://www.youtube.com/watch?v=RC0rU4XvNb0'
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
                                url='https://www.youtube.com/watch?v=Tf8Avg0V3hA'
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
                                url='https://youtu.be/7gcjiOy_Cho'
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