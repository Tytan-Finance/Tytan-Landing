import React, {useState} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa'

interface Props {
    question: string;
    ans: string;

}

const Faq: React.FC<Props> = ({question, ans}) => {

    const [isAnsInView, setIsAnsInView] = useState<boolean>(false);

    const ansToggler = () => {
        setIsAnsInView(!isAnsInView);
    }

    return (
        <div onClick={ansToggler} className="collapse">
            <input checked={isAnsInView} type="checkbox" className="peer"/>
            <div
                className="collapse-title font-Planer-DemiBold text-[22px] text-accent flex items-center space-x-4 "
            >
                {/*{*/}
                {/*    isAnsInView ? <FaMinus className={`shrink-0`} color={`#00FFA3`}/> : <FaPlus className={`shrink-0`} color={'#00FFA3'}/>*/}
                {/*}*/}

                <div className={`swap`}>

                <FaMinus className={`shrink-0 ${isAnsInView ? "swap-off" : "swap-on"}`} color={`#00FFA3`}/>

                <FaPlus className={`shrink-0 ${isAnsInView ? "swap-on" : "swap-off"}`} color={'#00FFA3'}/>
                </div>


                <div>
                    {question}
                </div>
            </div>
            <div className="collapse-content">
                <p>{ans}</p>
            </div>
        </div>
    );
};

export default Faq;