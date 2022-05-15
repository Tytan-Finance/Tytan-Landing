import React from 'react';
import {ResponsiveH1} from "../common";
import Faqs from "./Faqs";
import {AttentionSeeker} from "react-awesome-reveal";

const leftSideFaqs = [
    {
        id: 1,
        quest: <>
        </>,
        ans: <>
        </>
    },
]

interface Props {}

const FaqSection:React.FC<Props> = () => {
    return (
        <div id={'faq'} className={`bg-black pb-20`}>
            <div className={`max-w-[1000px] mx-auto p-4`}>
                <AttentionSeeker triggerOnce effect={'swing'}>
                <ResponsiveH1 className={`text-accent text-center`}>
                    FAQ's
                </ResponsiveH1>
                </AttentionSeeker>

                <Faqs/>

            </div>
        </div>
    );
};

export default FaqSection;