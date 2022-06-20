import React from 'react';
import {ResponsiveH1} from "../common";
import Image from "next/image";
import {Fade} from "react-awesome-reveal";

interface Props {
}

const Footer: React.FC<Props> = () => {
    return (
        <div className={`bg-black py-20`}>
            <Fade triggerOnce direction={'up'}>
                <ResponsiveH1 className={`text-accent text-center`}>
                    Keep in Touch
                </ResponsiveH1>

                <div className={`mt-10 flex justify-center items-center space-x-10`}>
                    <a target={'_blank'} href={'https://discord.gg/7nmjqQSvpJ'}>
                        <Image src={'/socials/discord.svg'} width={38.86} height={43.23}/>
                    </a>

                    <a href="#">
                        <Image src={'/socials/reddit.svg'} width={39.83} height={39.34}/>
                    </a>

                    <a target={'_blank'} href={'https://twitter.com/TYTANFI'}>
                        <Image src={'/socials/twitter.svg'} width={41.29} height={40.8}/>
                    </a>

                    <a target={'_blank'} href={'https://github.com/Tytan-Finance'}>
                        <Image src={'/socials/github.svg'} width={42.26} height={40.8}/>
                    </a>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;