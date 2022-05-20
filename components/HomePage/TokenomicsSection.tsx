import React from 'react';
import {ResponsiveH1} from "../common";
import Image from 'next/image';
import {Fade, JackInTheBox} from "react-awesome-reveal";

interface Props {
}

const TokenomicsSection: React.FC<Props> = () => {
    return (
        <div className={`  py-20 relative grid`}>

            {/*     Image Section      */}
            <div className={`col-start-1 row-start-1`}>
                {/*     Top white light ray   */}
                <div className={`absolute right-0  -top-[5rem] md:-top-32`}>
                    {/*<Image layout={'fill'} src={'/homePage/lines-1.svg'} objectFit={'cover'}/>*/}
                    <img className={`w-full object-cover -z-10`} src="/homePage/light-ray.svg" alt="lines-image"/>
                </div>
            </div>

            {/*     Page Content    */}
            <div className={`col-start-1 row-start-1 z-10`}>
                <div className={`max-w-[1000px] z-20 p-4 mx-auto`}>
                    <JackInTheBox triggerOnce>
                        <ResponsiveH1 className={`text-center`}>
                            Tokenomics
                        </ResponsiveH1>
                    </JackInTheBox>

                    <div className={`mt-12 gap-10 flex flex-col md:flex-row`}>
                        <Fade triggerOnce direction={'up'} cascade={true}>
                        {/*     Left Side    */}
                        <div className={`flex-1 grid sm:grid-auto-1fr gap-10 max-w-[30rem] mx-auto`}>
                            {/*     icon with heading side*/}
                            <div className={`flex flex-col items-center justify-center space-y-10`}>
                                <Image src={'/homePage/buy-icon.svg'} width={131.09} height={118.84}/>
                                <ResponsiveH1 className={`text-green font-Planer-Medium ml-6`}>
                                    BUY
                                </ResponsiveH1>
                            </div>

                            {/*     list side       */}
                            <div className={`flex flex-col space-y-2 max-w-[260px]`}>

                                {/*     Automatic LP        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-green font-Planer-DemiBold font-[18px]`}>
                                        Automatic LP <br/>
                                        4.0% of order fees return to liquidity
                                    </p>
                                </div>

                                {/*     TYTAN Insurance Fund        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-green font-Planer-DemiBold font-[18px]`}>
                                        TYTAN Insurance Fund <br/>
                                        2.5% of order fees are stored in TIF
                                    </p>
                                </div>

                                {/*     Treasury        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-green font-Planer-DemiBold font-[18px]`}>
                                        Treasury <br/>
                                        4.5% of order fees go to the treasury
                                    </p>
                                </div>

                                {/*     Afterburner        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-green font-Planer-DemiBold font-[18px]`}>
                                        Afterburner <br/>
                                        3.0% of TYTAN is burnt in the Afterburner
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*     Right Side   */}
                        <div className={`flex-1 grid sm:grid-auto-1fr gap-10 max-w-[30rem] mx-auto`}>
                            {/*     icon with heading side*/}
                            <div className={`flex flex-col items-center justify-center space-y-10`}>
                                <Image src={'/homePage/sell-icon.svg'} width={131.09} height={118.84}/>
                                <ResponsiveH1 className={`text-red font-Planer-Medium ml-6`}>
                                    SELL
                                </ResponsiveH1>
                            </div>

                            {/*     list side       */}
                            <div className={`flex flex-col space-y-2 max-w-[260px]`}>

                                {/*     Automatic LP        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-red font-Planer-DemiBold font-[18px]`}>
                                        Automatic LP <br/>
                                        4.0% of order fees return to liquidity
                                    </p>
                                </div>

                                {/*     TYTAN Insurance Fund        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-red font-Planer-DemiBold font-[18px]`}>
                                        TYTAN Insurance Fund <br/>
                                        4.0% of order fees are stored in TIF
                                    </p>
                                </div>

                                {/*     Treasury        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-red font-Planer-DemiBold font-[18px]`}>
                                        Treasury <br/>
                                        4.5% of order fees go to the treasury
                                    </p>
                                </div>

                                {/*     Afterburner        */}
                                <div className={`flex space-x-4`}>
                                    <svg
                                        width={12}
                                        height={12}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`mt-[7px] shrink-0`}
                                    >
                                        <path fill="#fff" d="M0 6l6-6 6 6-6 6z"/>
                                    </svg>

                                    <p className={`text-red font-Planer-DemiBold font-[18px]`}>
                                        Afterburner <br/>
                                        3.5% of TYTAN is burnt in the Afterburner
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Fade>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default TokenomicsSection;