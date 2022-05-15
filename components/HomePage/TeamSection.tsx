import React from 'react';
import {ResponsiveH1} from "../common";
import Image from 'next/image';
import {AttentionSeeker, Fade} from "react-awesome-reveal";

const teamMembers = [
    {
        id: 1,
        name: 'Afzaal',
        imgSrc: '/team/1.jpg',
    },{
        id: 2,
        name: 'Afzaal',
        imgSrc: '/team/1.jpg',
    },{
        id: 3,
        name: 'Afzaal',
        imgSrc: '/team/1.jpg',
    },{
        id: 4,
        name: 'Afzaal',
        imgSrc: '/team/2.jpg',
    },{
        id: 5,
        name: 'Test 5',
        imgSrc: '/team/2.jpg',
    },{
        id: 6,
        name: 'Test 6',
        imgSrc: '/team/1.jpg',
    },{
        id: 7,
        name: 'Test 7',
        imgSrc: '/team/2.jpg',
    },{
        id: 8,
        name: 'Test 8',
        imgSrc: '/team/1.jpg',
    },
]

interface Props {
}

const TeamSection: React.FC<Props> = () => {
    return (
        <div className={`pb-20`}>
            <div className={`max-w-[1000px] mx-auto p-4`}>
                <AttentionSeeker triggerOnce effect={'heartBeat'}>
                <ResponsiveH1 className={`text-accent text-center`}>
                    TEAM
                </ResponsiveH1>
                </AttentionSeeker>

                <div className={`flex flex-wrap justify-center mt-6 items-center gap-5`}>
                    <Fade triggerOnce cascade={true} damping={.4}>
                    {
                        teamMembers.map(({id,imgSrc,name}) => (
                            <div key={id} className={`max-w-[225px] w-full`}>
                                <div className={`relative w-[225px] h-[225px]`}>
                                    <Image src={imgSrc} layout={'fill'} objectFit={'cover'}/>
                                </div>
                                <p className={`font-Planer-Medium uppercase text-[32px]`}>
                                    {name}
                                </p>
                            </div>
                        ))
                    }
                    </Fade>

                </div>

            </div>
        </div>
    );
};

export default TeamSection;