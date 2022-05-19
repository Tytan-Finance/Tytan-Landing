import React from 'react';
import Faq from "./Faq";
import {Fade} from "react-awesome-reveal";

const leftFaqs = [
    {
        id: 1,
        question: 'When launch?',
        ans: '31th May',
    }, {
        id: 2,
        question: 'What are the trading fees?',
        ans: 'Buy Trading Fees: <br/>  4.0% - LP  |  4.5% - Treasury  |  2.5% - TYTAN Insurance Fund   |  3% - Afterburner  <br/>    Sell Trading Fees:  <br/>    4.0% - LP  |  4.5% - Treasury  |  4.0% - TYTAN Insurance Fund  |  3.5% - Afterburner   <br/>   [Buy - 14%]   <br/>   [Sell - 16%]',
    }, {
        id: 3,
        question: 'What network are you launching on?',
        ans: 'We will first be launching on the Binance Smart Chain (BSC) Network initially, then followed by AVAX, FTM, and other platforms as we go cross-chain.',
    }, {
        id: 4,
        question: 'Is there a WL role?',
        ans: 'No. TYTAN will be a fair launch with presale - we do not want any advantaged buyers.',
    },
];

const rightFaqs = [
    {
        id: 1,
        question: 'How often is the rebase?',
        ans: 'Every 30 minutes',
    }, {
        id: 2,
        question: 'Where is the main Liquidity?',
        ans: 'BSC - OrbitalSwap',
    }, {
        id: 3,
        question: 'What are the TYTAN tokens?',
        ans: '$TYTAN & $TYSHARE',
    },
]

const Faqs = () => {
    return (
        <div>
            <div className={`mt-10 flex flex-col md:flex-row gap-2 md:gap-10`}>
                {/*     Left Side       */}
                <div className={`flex-1 space-y-2`}>
                    <Fade triggerOnce direction={'up'}>
                        {
                            leftFaqs.map(({id, question, ans}) => (
                                <Faq key={id} question={question} ans={ans}/>
                            ))
                        }
                    </Fade>
                </div>

                {/*     Right Side      */}
                <div className={`flex-1 space-y-2`}>
                    <Fade triggerOnce direction={'up'}>
                        {
                            rightFaqs.map(({id, question, ans}) => (
                                <Faq key={id} question={question} ans={ans}/>
                            ))
                        }
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Faqs;