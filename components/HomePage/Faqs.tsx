import React from 'react';
import Faq from "./Faq";
import {Fade} from "react-awesome-reveal";

const leftFaqs = [
    {
        id: 1,
        question: 'Who are the TYTAN Team?',
        ans: 'This is a test answer',
    }, {
        id: 2,
        question: 'Have you had a full team KYC?',
        ans: 'This is a test answer',
    }, {
        id: 3,
        question: 'How do I know this isn\'t a Rug-Pull?',
        ans: 'This is a test answer',
    }, {
        id: 4,
        question: 'Can you explain the process of buying at Pre-Launch on PinkSale?',
        ans: 'This is a test answer',
    },
];

const rightFaqs = [
    {
        id: 1,
        question: 'Is there a Whitelist process?',
        ans: 'This is a test answer',
    }, {
        id: 2,
        question: 'Will I start receiving my APY interest yield immediately on Day 1 after I purchase at Pre-Launch?',
        ans: 'This is a test answer',
    }, {
        id: 3,
        question: 'Is TYTAN just another Titano Fork?',
        ans: 'This is a test answer',
    }, {
        id: 4,
        question: 'How can you sustain such a big APY?',
        ans: 'This is a test answer',
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