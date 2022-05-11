import React from 'react';
import {ButtonPrimary, ResponsiveBody1, ResponsiveH1} from "../common";
import Image from 'next/image';


interface Props {
}

const HowMuchCanIEarnSection: React.FC<Props> = () => {
    return (
        <div className={`py-20 bg-black relative overflow-visible`}>

            {/*     Top white light ray   */}
            <div className={`absolute -top-20`}>
                {/*<Image layout={'fill'} src={'/homePage/lines-1.svg'} objectFit={'cover'}/>*/}
                <img className={`w-full object-cover -z-10`} src="/homePage/lines-1.svg" alt="lines-image"/>
            </div>

            <div className={`container relative mt-16 md:mt-32`}>
                <ResponsiveH1 className={`text-center font-Planer-Bold text-accent`}>
                    How much can I earn?
                </ResponsiveH1>

                <div
                    className={`max-w-3xl flex flex-col md:flex-row gap-20 md:gap-0 items-center justify-between mx-auto mt-20`}>

                    {/*    Left Side    */}
                    <div className={`flex flex-col items-center justify-center`}>
                        <Image src={'/homepage/earn-pyramid-1.svg'} width={205} height={187.6}/>
                        <div className={`flex items-center justify-center flex-col py-12`}>
                            <ResponsiveBody1>
                                At the end of the year and with
                            </ResponsiveBody1>
                            <ResponsiveH1 className={`text-green`}>
                                $1,000 USD
                            </ResponsiveH1>
                            <ResponsiveBody1>
                                of $TYTAN invested.
                            </ResponsiveBody1>
                        </div>

                        <ButtonPrimary>
                            open app
                        </ButtonPrimary>

                    </div>

                    {/*    Right Side   */}
                    <div className={`flex flex-col items-center justify-center`}>
                        <Image src={'/homepage/earn-pyramid-2.svg'} width={205} height={187.6}/>
                        <div className={`flex items-center justify-center flex-col py-12`}>
                            <ResponsiveBody1>
                                YOU can earn up to
                            </ResponsiveBody1>
                            <ResponsiveH1 className={`text-green`}>
                                $1M USD
                            </ResponsiveH1>
                            <ResponsiveBody1>
                                of $TYTAN at 125,124% APY*.
                            </ResponsiveBody1>
                        </div>

                        <p className={`text-xs max-w-xs text-center`}>
                            Earnings are calculated in a scenario where the SAP sustains the rebase interest for 365
                            days.
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default HowMuchCanIEarnSection;