import React from 'react';
import ButtonPrimary from "../common/Buttons/ButtonPrimary";
import {ResponsiveBody1} from "../common";
import {Fade} from "react-awesome-reveal";

interface Props {
}

const HeroSection: React.FC<{}> = () => {
    return (
        <div className={`py-20 bg-black`}>
            <div className={`container`}>
                <Fade triggerOnce direction={'up'} cascade={true} damping={.8}>

                    <h1 className={`max-w-2xl mx-auto text-accent font-Planer-DemiBold text-[40px] md:text-[76px] text-center leading-[76px]`}>
                        Auto-Staking & Compounding From the Future
                    </h1>

                    <ResponsiveBody1 className={`mt-8 max-w-[760px] text-center mx-auto`}>
                        We've travelled the wormholes of the rebase galaxy far & wide. Only to find the future is TYTAN. 
                        With immediate utility on launch. Strap in and feel the G-force of rebase at its finest.
                    </ResponsiveBody1>

                    <div
                        className={`flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 space-x-8 mt-16`}>
                        <a target={'_blank'} href="https://app.tytan.finance/swap?outputCurrency=0x912F594Fd096E67e0c0A18D496A9f70E3171c330">
                            <ButtonPrimary bgGreen withLeftCut btnLg>
                                Click here to buy tytan
                            </ButtonPrimary>
                        </a>
                        <a target={'_blank'} href="https://dexscreener.com/bsc/0x71125dff884402efff470476440946ef04b56180">
                            <ButtonPrimary withRightCut btnLg>
                                Go to the charts
                            </ButtonPrimary>
                        </a>
                        
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default HeroSection;