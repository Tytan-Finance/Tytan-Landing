import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common";
import Image from 'next/image';

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
            Highest Fixed APY : 125,124%
        </>
    },
    {
        id: 2,
        imgSrc: "/homepage/auto-compounding.svg",
        imgWidth: 77,
        imgHeight: 76,
        heading: 'auto compOunding',
        desc: <>
            Revolutionary Auto-Staking and Auto-Compounding Protocol, with one of the greatest fixed APYs in the
            industry of 125,124%. Interest rewards also compounded every 15 minutes for every BSC wallet that holds
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
            3% of Buys and 3.5% of $TYTAN Sells traded, are burnt in the Inferno. The more traded the more the Inferno
            grows in size, reducing the circulating supply & keeping the TYTAN protocol stable.
        </>
    },
]

const HowItWorksSection: React.FC<Props> = () => {
    return (
        <div className={`bg-black pb-20 pt-[20-rem]`}>
            {/*<img className={`w-full object-cover -mt-40`} src="/homePage/moon.png" alt="moon image"/>*/}
            <div className={`container`}>
                <ResponsiveH1 className={`text-center`}>
                    How it works?
                </ResponsiveH1>

                <div className={`mt-12 flex  flex-wrap justify-center gap-20`}>

                    {
                        stepsData.map(({id,desc,heading,imgSrc,imgHeight,imgWidth}) => (

                            <div className={`max-w-[509px] w-full`}>

                                <div className={`flex items-center justify-center`}>
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

                </div>

            </div>
        </div>
    );
};

export default HowItWorksSection;