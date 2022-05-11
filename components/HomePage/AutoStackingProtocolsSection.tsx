import React from 'react';
import {ButtonPrimary, ResponsiveBody1, ResponsiveH1} from "../common";

interface Props {
}

const AutoStackingProtocolsSection: React.FC<Props> = () => {
    return (
        <div className={`pb-20 bg-black relative`}>
            <div className={`container gap-16 grid grid-cols-1 lg:grid-cols-2`}>
                {/*     Left-Col   */}
                <div className={`border-[3px] border-solid border-accent px-10 py-20`}>

                    {/*     top arrows  */}
                    <div className={`flex items-center justify-center space-x-10`}>

                        {/*    left arrow icon*/}
                        <svg
                            width={30}
                            height={34}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 18.875L15 32l13-13.125M15 32V2v30z"
                                stroke="#fff"
                                strokeWidth={4}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/*    Center Arrow Icons       */}

                        <svg
                            width={30}
                            height={34}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 15.125L15 2 2 15.125M15 2v30V2z"
                                stroke="#00FFA3"
                                strokeWidth={4}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/*    Right arrow icons    */}
                        <svg
                            width={30}
                            height={34}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 18.875L15 32l13-13.125M15 32V2v30z"
                                stroke="#fff"
                                strokeWidth={4}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>

                    {/*     Heading    */}
                    <h1 className={`text-green mt-6 text-center text-[50px] md:text-[95px] font-Planer-DemiBold`}>
                        125,124%
                    </h1>

                    <p className={`mt-6 text-accent text-center font-Planer-DemiBold text-[29px]`}>
                        Fixed Staking APY
                    </p>

                </div>

                {/*    Right-Col    */}
                <div>
                    <ResponsiveH1 className={`text-accent text-center lg:text-left`}>
                        Auto-Staking Protocol
                    </ResponsiveH1>

                    <ResponsiveBody1 className={`mt-6 text-center lg:text-left`}>
                        TYTAN provides a decentralized financial asset which rewards users with a sustainable fixed
                        compound interest model through use of it’s unique TYTAN protocol.
                        <br/><br/>
                        TYTAN delivers the industry’s highest fixed APY, paid every 30 minutes, and a simple
                        buy-hold-earn system that grows your $TYTAN portfolio in your wallet at a lightning fast pace.
                    </ResponsiveBody1>

                    <div className={`flex items-center mt-12 justify-center space-x-4`}>
                        <ButtonPrimary bgGreen>
                            Audit
                        </ButtonPrimary>

                        <ButtonPrimary>
                            Whitepaper
                        </ButtonPrimary>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AutoStackingProtocolsSection;