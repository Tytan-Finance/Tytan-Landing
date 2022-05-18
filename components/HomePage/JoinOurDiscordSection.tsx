import React from 'react';
import {ResponsiveH1} from "../common";
import Image from 'next/image';
import {AttentionSeeker} from "react-awesome-reveal";

interface Props {
}

const JoinOurDiscordSection: React.FC<Props> = () => {
    return (
        <a target={'_blank'} href={'https://discord.gg/rC83Q7WZuc'} className={'overflow-hidden'}>

            <AttentionSeeker triggerOnce effect={'jello'}>

                <div className={`bg-black pb-20 leading-[50px] space-x-4 text-accent flex items-center justify-center`}>
                    {/*     Logo Image      */}
                    <div className={`flex items-center justify-center`}>
                        <Image src={'/homePage/discord.svg'} width={91.71} height={103.69}/>
                    </div>

                    {/*     Text to join discord    */}
                    <div>
                        <ResponsiveH1>
                            Join our <br/>
                            Discord Channel
                        </ResponsiveH1>
                    </div>
                </div>
            </AttentionSeeker>
        </a>
    );
};

export default JoinOurDiscordSection;
