import React from 'react';
import {ResponsiveH1} from "../common";

const tableData = [
    {
        id: 1,
        feature: 'APY',
        hasTytan: false,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "125,124%",
        titanoPercentage: '102,483.58%',
        liberoPercentage: '158,893.59%',
    }, {
        id: 2,
        feature: 'Fees',
        hasTytan: false,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "14% / 16%",
        titanoPercentage: '13% / 18%',
        liberoPercentage: '15% / 25%',
    }, {
        id: 3,
        feature: 'Automatic Burn',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 4,
        feature: 'Sustainable Rebasing',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 5,
        feature: 'Insurance Fund',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 6,
        feature: 'Auto-Liquidity',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 7,
        feature: 'Auto-Staking',
        hasTytan: true,
        hasTitano: true,
        hasLibero: true,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 8,
        feature: 'Fees Hard Coded',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 8,
        feature: 'Auto-Staking Hard Coded',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 9,
        feature: 'Rug-Proof: No Minting Code',
        hasTytan: true,
        hasTitano: false,
        hasLibero: true,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 9,
        feature: 'Rug-Proof: No Manual Adjusting',
        hasTytan: true,
        hasTitano: false,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 10,
        feature: 'Rug-Proof: Fixed Rebase Time',
        hasTytan: true,
        hasTitano: true,
        hasLibero: false,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 11,
        feature: 'Rug-Proof: Liquidity Locked',
        hasTytan: true,
        hasTitano: true,
        hasLibero: true,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    }, {
        id: 12,
        feature: 'Manual Token Buyback',
        hasTytan: true,
        hasTitano: false,
        hasLibero: true,
        tytanPercentage: "",
        titanoPercentage: '',
        liberoPercentage: '',
    },
];

const YesIcon = () => {
    return (
        <svg
            width={20}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.04 15.998a.408.408 0 01-.182-.043.477.477 0 01-.154-.122L.137 8.01a.626.626 0 01-.133-.397.623.623 0 01.139-.394.44.44 0 01.33-.165.437.437 0 01.334.158l6.233 7.426L19.19.165A.44.44 0 0119.523 0a.44.44 0 01.336.165c.089.106.139.25.139.4 0 .15-.05.293-.14.399L7.376 15.835a.438.438 0 01-.335.163z"
                fill="#00FFA3"
            />
        </svg>
    )
};

const NoIcon = () => {
    return (
        <svg
            width={19}
            height={19}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0_1041_607)" fill="#FF005C">
                <path
                    d="M18.415 19a.581.581 0 01-.414-.172L.171.998A.585.585 0 111 .171L18.832 18a.585.585 0 01-.414.998h-.003z"/>
                <path
                    d="M.585 19a.586.586 0 01-.414-1L18.001.17a.585.585 0 11.827.828L.998 18.828a.58.58 0 01-.413.171z"/>
            </g>
            <defs>
                <clipPath id="prefix__clip0_1041_607">
                    <path fill="#fff" d="M0 0h19v19H0z"/>
                </clipPath>
            </defs>
        </svg>
    )
}

interface Props {
}

const CompetitiveAdvantagesSection: React.FC<Props> = () => {
    return (
        <div className={`py-20`}>

            <div className={`max-w-[1000px] p-4 mx-auto`}>
                <ResponsiveH1 className={`text-center text-accent`}>
                    Competitive Advantages
                </ResponsiveH1>

                {/*     Table    */}
                <div className="overflow-x-auto mt-20">
                    <table className="table w-full">
                        {/*// <!-- head -->*/}
                        <thead>
                        <tr>
                            <th className={`text-[30px] text-green font-Planer-DemiBold`}>Features</th>
                            <th className={`text-[30px] text-green font-Planer-DemiBold`}>Tytan</th>
                            <th className={`text-[30px] text-green font-Planer-DemiBold`}>Titano</th>
                            <th className={`text-[30px] text-green font-Planer-DemiBold`}>Libero</th>
                        </tr>
                        </thead>

                        {/*     Table body for padding purpose only     */}
                        <tbody>
                        <tr>
                            <td className={`py-3 bg-transparent`}></td>
                        </tr>
                        </tbody>

                        {/*     Actual table body       */}
                        <tbody>

                        {/*     Rows        */}
                        {
                            tableData.map(({
                                               id,
                                               feature,
                                               hasTitano,
                                               hasLibero,
                                               hasTytan,
                                               titanoPercentage,
                                               tytanPercentage,
                                               liberoPercentage
                                           }) => {
                                return (
                                    <tr key={id}>
                                        <th className={`bg-black font-Planer-Regular text-[12px] md:text-[18px] text-accent`}>
                                            {feature}
                                        </th>
                                        {/*     tytan   */}
                                        <td className={`bg-transparent  `}>
                                            <div className={`flex space-x-4 items-center`}>
                                                <div className={'min-w-[20px] flex items-center justify-center'}>
                                                    {(hasTytan && !tytanPercentage) && <YesIcon/>}
                                                    {(!hasTytan && !tytanPercentage) && <NoIcon/>}
                                                </div>
                                                <div className={`font-Planer-Regular text-[12px] md:text-[18px] text-accent`}>
                                                    {tytanPercentage ? tytanPercentage : (hasTytan ? "Yes" : "No")}
                                                </div>
                                            </div>
                                        </td>

                                        {/*     titano      */}
                                        <td className={`bg-transparent  `}>
                                            <div className={`flex space-x-4 items-center`}>
                                                <div className={'min-w-[20px] flex items-center justify-center'}>
                                                    {(hasTitano && !titanoPercentage) && <YesIcon/>}
                                                    {(!hasTitano && !titanoPercentage) && <NoIcon/>}
                                                </div>
                                                <div className={`font-Planer-Regular text-[12px] md:text-[18px] text-accent`}>
                                                    {titanoPercentage ? titanoPercentage : (hasTitano ? "Yes" : "No")}
                                                </div>
                                            </div>
                                        </td>

                                        {/*     libero      */}
                                        <td className={`bg-transparent  `}>
                                            <div className={`flex space-x-4 items-center`}>
                                                <div className={'min-w-[20px] flex items-center justify-center'}>
                                                    {(hasLibero && !liberoPercentage) && <YesIcon/>}
                                                    {(!hasLibero && !liberoPercentage) && <NoIcon/>}
                                                </div>
                                                <div className={`font-Planer-Regular text-[18px] text-accent`}>
                                                    {liberoPercentage ? liberoPercentage : (hasLibero ? "Yes" : "No")}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default CompetitiveAdvantagesSection;