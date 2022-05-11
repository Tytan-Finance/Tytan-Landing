import React from 'react';
import {ResponsiveBody1, ResponsiveH1} from "../common";
import {useTimer} from 'react-timer-hook';


const CountdownHeading: React.FC<{}> = ({children}) => {
    return (
        <ResponsiveH1
            className={`w-[80px] h-[80px]  md:w-[102px] md:h-[102px] flex items-center justify-center countdown-item`}>
            {children}
        </ResponsiveH1>
    )
}

const CountdownSubHeading: React.FC<{}> = ({children}) => {
    return (
        <div className={`uppercase font-Planer-Bold text-md mt-4`}>
            {children}
        </div>
    )
}

interface Props {
}

const CountdownSection: React.FC<Props> = (props) => {

    const expiryTimestamp = new Date('2022-05-25T10:00:00Z');

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({expiryTimestamp, onExpire: () => console.warn('onExpire called')});

    return (
        <div className={`bg-black pb-20`}>
            <div className={`container`}>

                <div
                    className={`border-[3px] border-accent border-solid mx-auto px-6 md:px-12 py-10 md:py-20 `}>

                    <ResponsiveH1 className={`text-center text-primary`}>
                        Countdown for Presale
                    </ResponsiveH1>

                    {/*    Countdown    */}
                    <div className={`mt-12`}>
                        <div
                            className="grid grid-flow-col pt-4 gap-10 text-center auto-cols-max overflow-x-scroll md:overflow-auto countdown-container justify-center">
                            <div className="flex flex-col">
                                {/*<span className="countdown font-mono text-5xl">*/}
                                {/*  <span style={{'--value':days}}></span>*/}
                                {/*</span>*/}
                                <CountdownHeading>
                                    {days}
                                </CountdownHeading>
                                <CountdownSubHeading>
                                    days
                                </CountdownSubHeading>
                            </div>
                            <div className="flex flex-col">
                                <CountdownHeading>
                                    {hours}
                                </CountdownHeading>
                                <CountdownSubHeading>
                                    hours
                                </CountdownSubHeading>
                            </div>
                            <div className="flex flex-col">
                                <CountdownHeading>
                                    {minutes}
                                </CountdownHeading>
                                <CountdownSubHeading>
                                    min
                                </CountdownSubHeading>

                            </div>
                            <div className="flex flex-col">
                                <CountdownHeading>
                                    {seconds}
                                </CountdownHeading>
                                <CountdownSubHeading>
                                    sec
                                </CountdownSubHeading>

                            </div>
                        </div>

                    </div>

                    {/*     Below Countdown text    */}
                    <div className={`mt-20 flex flex-col md:flex-row items-center md:space-x-4 justify-center `}>
                        <p className={`font-Planer-Bold text-primary text-2xl`}>Presale details</p>
                        <div className={`flex space-x-4`}>
                            <svg
                                width={8}
                                height={8}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`shrink-0 mt-[12px]`}
                                {...props}
                            >
                                <circle cx={4} cy={4} r={4} fill="#fff"/>
                            </svg>
                            <p className={`font-Planer-Bold text-xl text-center`}>
                                May 25th 3pm est and will continue until cap reached
                            </p>
                        </div>
                    </div>

                    {/*  Min - Max - *All pre launch sales in Bnb Token  */}
                    <div className={`grid grid-cols-1 md:grid-3cols-auto gap-1 md:gap-10 text-center  mt-6 justify-center`}>
                        {/*     Min*     */}
                        <div className={`flex items-center space-x-4 justify-center`}>
                            <p className={`text-green text-xl font-Planer-Bold`}>
                                Min
                            </p>
                            <p className={`text-xl font-Planer-Bold`}>
                                0.5 BNB
                            </p>
                        </div>

                        {/*     Max      */}
                        <div className={`flex items-center space-x-4 justify-center`}>
                            <p className={`text-green text-xl font-Planer-Bold`}>
                                Max
                            </p>
                            <p className={`text-xl font-Planer-Bold`}>
                                10 BNB
                            </p>
                        </div>

                        {/*     *All pre launch sales in Bnb Token      */}
                        <div className={``}>
                            <p className={` text-xl font-Planer-Medium`}>
                                *All pre launch sales in BNB Token
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CountdownSection;