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

const Home: NextPage = () => {
    return (
        <div className="">
            <HeroSection/>
            <CountdownSection/>
            <AutoStackingProtocolsSection/>
            <HowMuchCanIEarnSection/>
            <HowItWorksSection/>
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
