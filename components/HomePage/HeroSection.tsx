import React from 'react';
import ButtonPrimary from "../common/Buttons/ButtonPrimary";

interface Props {}

const HeroSection:React.FC<{}> = () => {
    return (
        <div className={`py-20 bg-black`}>
            <div className={`container`}>
                <h1 className={`max-w-2xl mx-auto text-accent font-Planer-DemiBold text-[40px] md:text-[76px] text-center leading-[76px]`}>
                    Auto-Staking & Compounding From the Future
                </h1>

                <p className={`mt-8 max-w-[760px] mx-auto text-xl text-center font-Planer-Medium leading-[32px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis eros erat, a dapibus enim vulputate eu. Donec tristique ex sed leo rutrum aliquam ornare at quam
                </p>

                <div className={`flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 space-x-8 mt-16`}>
                    <ButtonPrimary bgGreen withLeftCut btnLg>
                        Click here to buy tytan
                    </ButtonPrimary>

                    <ButtonPrimary withRightCut btnLg>
                        Go to the charts
                    </ButtonPrimary>

                </div>

            </div>
        </div>
    );
};

export default HeroSection;