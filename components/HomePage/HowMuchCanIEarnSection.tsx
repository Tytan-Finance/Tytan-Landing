import React from 'react';
import {ButtonPrimary, ResponsiveBody1, ResponsiveH1} from "../common";
import Image from 'next/image';
import {AttentionSeeker, Fade} from "react-awesome-reveal";


interface Props {
}

const HowMuchCanIEarnSection: React.FC<Props> = () => {
    return (
        <div className={`py-20 relative overflow-visible`}>

            {/*     Top white light ray   */}
            <div className={`absolute -top-20`}>
                {/*<Image layout={'fill'} src={'/homePage/lines-1.svg'} objectFit={'cover'}/>*/}
                <img className={`w-full object-cover -z-10`} src="/homePage/lines-1.svg" alt="lines-image"/>
            </div>
        </div>
    );
};

export default HowMuchCanIEarnSection;