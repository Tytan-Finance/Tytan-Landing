import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common";

const data = [
    {
        id: 1,
        text: <>
            Automatic injection of liquidity from a hard-coded function every 12 hours!
        </>
    },
    {
        id: 2,
        text: <>
            No manual override ability to pause or stop liquidity from being added.
        </>
    },
    {
        id: 3,
        text: <>
            Allows for complete APY sustainability until maximum supply is reached.
        </>
    },
]

interface Props {
}

const TytanAutoLiquiditySection: React.FC<Props> = () => {
    return (
        <div className={`bg-black py-20 `}>
            <div className={`mx-auto max-w-[1000px]`}>
                <ResponsiveH1 className={`text-accent text-center`}>
                    TYTAN Auto-Liquidity _ v1 (TAL1)
                </ResponsiveH1>

                <div
                    className={`mt-12 items-center md:items-start flex gap-10 justify-between flex-col md:flex-row max-w-[1000px] mx-auto`}>
                    <div className={`max-w-[482px] w-full`}>
                        <ResponsiveBody1 className={`text-center`}>
                            Every 12 hours at 22:52:48 UTC time our TYTAN Auto-Liquidity Engine (TALE) will inject
                            automatic liquidity into the market. On each buy or sell order there is a 4% tax fee that
                            automatically gets stored into an Auto-LP wallet and built into our protocol’s smart
                            contract is the mechanism which smartly takes the 50% of the amount of TYTAN stored in the
                            wallet, and will automatically buy BNB at the current market price.
                        </ResponsiveBody1>
                    </div>

                    <div className={`max-w-[482px] w-full`}>
                        <ResponsiveBody1 className={`text-center`}>
                            The remaining 50% of TYTAN in the Auto-LP wallet will be used for the TYTAN side of
                            liquidity, therefore giving equal an 50/50 weighting of TYTAN/BNB which will then be
                            automatically added as new, additional liquidity into the market pair and raising the amount
                            of liquidity in the pool.
                            <br/><br/>
                            The TALE will do this every 12 hours by adding more and more liquidity to the pool which
                            will allow $TYTAN token holders to easily sell their tokens at anytime with little to no
                            market slippage. It will also aid in maintaining protocol stability to make sure the APY is
                            upheld for the entire life of TYTAN.

                        </ResponsiveBody1>
                    </div>
                </div>

                <p className={`text-sm font-Planer-Italic text-accent text-center pt-16`}>
                    MAR 17, 2022: Please note the above wording has been corrected with the addition of the 22:52:48 timestamp.
                </p>

                <div className={`flex flex-col mt-6 items-center justify-center space-y-2`}>
                    {
                        data.map(({id,text}) => (
                            <div key={id} className={`max-w-[520px] w-full  flex space-x-4`}>
                                <svg
                                    width={12}
                                    height={12}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mt-2 shrink-0`}
                                >
                                    <circle cx={6} cy={6} r={6} fill="#00FFA3" />
                                </svg>

                                <p className={`text-accent font-Planer-DemiBold font-[18px]`}>
                                    {text}
                                </p>
                            </div>
                        ))
                    }



                </div>

            </div>
        </div>
    );
};

export default TytanAutoLiquiditySection;