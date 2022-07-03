import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common";
import Image from 'next/image';
import {AttentionSeeker} from "react-awesome-reveal";
import {Fade} from "react-awesome-reveal";

interface Props {
}

const stepsData = [
    {
        id: 1,
        imgSrc: "/homepage/tytan-token.svg",
        imgWidth: 110.97,
        imgHeight: 110.67,
        heading: 'tytan token',
        desc: <>
            $TYTAN is the native token which pays interest rebase rewards. Every token holder automatically receives
            interest rewards every 30 minutes just for holding $TYTAN tokens in their own wallet.
            <br/> <br/>
            Highest Variable APY : 3,783%
        </>
    },
    {
        id: 2,
        imgSrc: "/homepage/auto-compounding.svg",
        imgWidth: 77,
        imgHeight: 76,
        heading: 'auto compOunding',
        desc: <>
            Revolutionary Auto-Staking and Auto-Compounding Protocol, with one of the greatest variable APYs in the
            industry of 3,783%. Interest rewards also compounded every 30 minutes for every BSC wallet that holds
            $TYTAN.
        </>
    },
    {
        id: 3,
        imgSrc: "/homepage/insurance-fund.svg",
        heading: 'Insurance Fund',
        imgWidth: 107.76,
        imgHeight: 96,
        desc: <>
            The TIF serves as an insurance fund to achieve price stability and long-term sustainability of TYTAN.
        </>
    },
    {
        id: 4,
        imgSrc: "/homepage/treasur.svg",
        heading: 'Treasury',
        imgWidth: 106,
        imgHeight: 95,
        desc: <>
            The Treasury provides support to the TIF in the event of an extreme price drop in the $TYTAN token. The
            Treasury also funds investments, new TYTAN projects and marketing for TYTAN.
        </>
    },
    {
        id: 5,
        imgSrc: "/homepage/the-afterburner.svg",
        heading: 'The afterburner',
        imgWidth: 100,
        imgHeight: 113,
        desc: <>
            3% of Buys and 3.5% of $TYTAN Sells traded, are burnt in the Afterburner. The more traded the more the Afterburner
            grows in size, reducing the circulating supply & keeping the TYTAN protocol stable.
        </>
    },
]

const HowItWorksSection: React.FC<Props> = () => {
    return (
        <div className={` pb-20 md:pt-[5rem] lg:pt-[15rem]`}>
            {/*<img className={`w-full object-cover -mt-40`} src="/homePage/moon.png" alt="moon image"/>*/}
            <div className={`container`}>
                <AttentionSeeker triggerOnce delay={.5} effect={"bounce"}>
                    <ResponsiveH1 className={`text-center`}>
                        How it works?
                    </ResponsiveH1>
                </AttentionSeeker>

                <div className={`mt-12 flex  flex-wrap justify-center gap-20`}>
                    <Fade triggerOnce cascade={true} direction={'up'}>

                        {
                            stepsData.map(({id, desc, heading, imgSrc, imgHeight, imgWidth}) => (

                                <div key={id} className={`max-w-[509px] w-full`}>
                                    <div className={`min-h-[111px] flex items-center justify-center`}>
                                        <Image src={imgSrc} width={imgWidth} height={imgHeight}/>
                                    </div>

                                    <h2 className={`font-Planer-Medium mt-6 text-center text-green uppercase text-[36px]`}>
                                        {heading}
                                    </h2>

                                    <ResponsiveBody1 className={`text-center mt-4`}>
                                        {desc}
                                    </ResponsiveBody1>

                                </div>
                            ))
                        }
                    </Fade>

                </div>

                <div
                    className={`mt-12 items-center md:items-start flex gap-10 justify-between flex-col md:flex-row max-w-[1000px] mx-auto `}>
                    <Fade triggerOnce direction={'up'} cascade={true}>

                        <div className={`max-w-[482px] w-full`}>
                            <ResponsiveBody1 className={`text-center`}>
                                The BIGGEST and FASTEST growing burn system of all rebase protocols! Designed to create
                                massive deflationary pressure, and offset the increasing token supply. The more $TYTAN
                                is
                                traded, the more that gets put into the burn causing the Afterburner Mechanism to grow
                                in
                                size, reducing the circulating supply and keeping the TYTAN protocol stable. The
                                designers
                                of TYTAN envision this blazing to record levels, but in the event of an opportunity that
                                would have an even greater effect, have created a system in which these funds could be
                                used.
                            </ResponsiveBody1>
                        </div>

                        <div className={`max-w-[482px] w-full`}>
                            <ResponsiveBody1 className={`text-center`}>
                                The AfterBurner wallet address funds are protected by a Multi-Sig security system which
                                will
                                require a community representative as a signer. This representative would become the
                                gatekeeper that represents the will of the community. Additionally, the funds may also
                                be
                                used for loan and borrow programs that help the protocol and Afterburner mechanism.
                            </ResponsiveBody1>
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;