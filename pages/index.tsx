import type {NextPage} from 'next'
import {
    AutoStackingProtocolsSection,
    CompetitiveAdvantagesSection,
    CountdownSection,
    FaqSection,
    HeroSection,
    HowItWorksSection,
    HowMuchCanIEarnSection,
    JoinOurDiscordSection,
    TeamSection,
    TokenomicsSection,
    TytanAutoLiquiditySection,
    VideSection
} from "../components/HomePage";
import React from "react";

const Home: NextPage = () => {
    return (
        <div className="bg-black">
            <HeroSection/>
            <CountdownSection/>
            <AutoStackingProtocolsSection/>
            <div className={`relative grid`}>
                {/*     Image Section   */}
                <div className={`grid-rows-1 grid-cols-1 pointer-events-none`}>
                    <div className={`absolute w-full left-0 top-[70rem]   md:top-[35rem]`}>
                        {/*<Image layout={'fill'} src={'/homePage/lines-1.svg'} objectFit={'cover'}/>*/}
                        <img className={`w-full object-cover -z-10`} src="/homePage/moon.png" alt="lines-image"/>
                    </div>
                </div>
                {/*     Page Content Section    */}
                <div className={`grid-rows-1 grid-cols-1 z-10`}>
                    <HowMuchCanIEarnSection/>
                    <HowItWorksSection/>
                </div>
            </div>
            <JoinOurDiscordSection/>
            <TytanAutoLiquiditySection/>
            <TokenomicsSection/>
            <CompetitiveAdvantagesSection/>
            <VideSection/>
            <TeamSection/>
            <FaqSection/>
        </div>
    )
}

export default Home
