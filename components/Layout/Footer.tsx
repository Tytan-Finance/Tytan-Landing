import React from 'react';
import {ResponsiveH1} from "../common";
import Image from "next/image";

interface Props {
}

const Footer: React.FC<Props> = () => {
    return (
        <div className={`bg-black py-20`}>
            <ResponsiveH1 className={`text-accent text-center`}>
                Keep in Touch
            </ResponsiveH1>

            <div className={`mt-10 flex justify-center items-center space-x-10`}>
                <a href="#">
                    <Image src={'/socials/discord.svg'} width={38.86} height={43.23}/>
                </a>

                <a href="#">
                    <Image src={'/socials/reddit.svg'} width={39.83} height={39.34}/>
                </a>

                <a href="#">
                    <Image src={'/socials/twitter.svg'} width={41.29} height={40.8}/>
                </a>

                <a href="#">
                    <Image src={'/socials/github.svg'} width={42.26} height={40.8}/>
                </a>

            </div>
        </div>
    );
};

export default Footer;