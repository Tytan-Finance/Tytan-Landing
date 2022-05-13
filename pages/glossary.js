import React from 'react';
import {ResponsiveH1} from "../components/common";
import Link from 'next/link';

const tableData = [
    {
        id: 1,
        term: <>
            apR
        </>,
        meaning: <>
            Refers to the simple returns in USD value relative to your staked TYTAN or TYSHARE.
        </>,
    }, {
        id: 2,
        term: <>
            apy
        </>,
        meaning: <>
            Annual percentage yield (APY) is the rate of return gained over the course of a year on a specific
            investment. Compounding interest, which is computed on a regular basis and applied to the amount.
        </>,
    }, {
        id: 3,
        term: <>
            APEING (TO APE)
        </>,
        meaning: <>
            Apeing is when a cryptocurrency trader buys a token shortly after the token project launch without
            conducting thorough research.
        </>,
    }, {
        id: 4,
        term: <>
            audit
        </>,
        meaning: <>
            An audit is a process where developers inspect the underlying code and/or algorithm that compose systems and
            applications.
        </>,
    }, {
        id: 5,
        term: <>
            BAG
        </>,
        meaning: <>
            Crypto slang for a large quantity of a specific cryptocurrency.
        </>,
    }, {
        id: 6,
        term: <>
            BONDS
        </>,
        meaning: <>
            Bonds are unique tokens that can be utilized to help stabilize the SUBZERO price around peg by reducing
            circulating supply of SUBZERO if the TWAP goes below peg.
        </>,
    }, {
        id: 7,
        term: <>
            BOTS
        </>,
        meaning: <>
            Automated software that can carry out tasks such as cryptocurrency trades.
        </>,
    }, {
        id: 8,
        term: <>
            CIRCULATING SUPPLY
        </>,
        meaning: <>
            The best approximation of the number of coins that are circulating in the market and in the general public’s
            hands
        </>,
    }, {
        id: 9,
        term: <>
            CROSS-CHAIN
        </>,
        meaning: <>
            Cross-chain is the interconnection between blockchain networks by allowing the exchange of information and
            value.
        </>,
    }, {
        id: 10,
        term: <>
            DAPP
        </>,
        meaning: <>
            A Decentralised APPlication / decentralised web app.
        </>,
    }, {
        id: 11,
        term: <>
            DEX
        </>,
        meaning: <>
            A peer-to-peer exchange allowing users to trade cryptocurrency without an intermediary
        </>,
    }, {
        id: 12,
        term: <>
            EPOCH
        </>,
        meaning: <>
            Inside a blockchain network, an epoch is considered a specific period of time. In our case an Epoch is 6
            hours long.
        </>,
    }, {
        id: 13,
        term: <>
            THE farm
        </>,
        meaning: <>
            The Farm is the DeFi App, where you stake your TYTAN Token or LPs
            (Liquidity Pool tokens).
        </>,
    }, {
        id: 14,
        term: <>
            IL (Impermanent loss)
        </>,
        meaning: <>
            Impermanent loss is when a liquidity provider has a temporary loss of funds because of volatility in a
            trading pair. You can calculate it.
        </>,
    }, {
        id: 15,
        term: <>
            LP / liquidity pool
        </>,
        meaning: <>
            Liquidity pools are crypto assets that are kept to facilitate the trading of trading pairs on decentralized
            exchanges. They usually pay a reward for being a Liquidity provider.
        </>,
    }, {
        id: 16,
        term: <>
            liquidity provider
        </>,
        meaning: <>
            Liquidity providers are decentralized exchange users who fund a liquidity pool with tokens they own.
        </>,
    },{
        id: 17,
        term: <>
            peg
        </>,
        meaning: <>
            A peg refers to the specific price or token that we are aiming to stay at.        </>,
    },{
        id: 18,
        term: <>
            whale
        </>,
        meaning: <>
            A term used to describe investors who have uncommonly large amounts of crypto, especially those with enough funds to manipulate the market.
            </>
    },{
        id: 19,
        term: <>
            when lambooooo?
        </>,
        meaning: <>
            A phrase referring to when cryptocurrency holders will become rich enough to afford the purchase of a Lamborghini
           </>
    },{
        id: 20,
        term: <>
            yield farming
        </>,
        meaning: <>
            Yield farming involves earning interest by investing crypto in decentralized finance markets.           </>
    },
]

const Glossary = () => {
    return (
        <div className={`py-20 bg-black`}>
            <div className={`container`}>

                <ResponsiveH1 className={`text-left text-white`}>
                    Glossary
                </ResponsiveH1>

                <Link href={'/'}>
                    <a className={`font-Planer-Bold text-[24px] cursor-pointer`}>
                        {'< back'}
                    </a>
                </Link>

                {/*    Table Container  */}
                <div className={`mt-16`}>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/*// <!-- head -->*/}
                            <thead>
                            <tr>
                                <th
                                    className={`border-[1px] border-white border-solid font-Planer-Bold text-[24px] bg-black md:bg-[#FFFFFF19]`}
                                >
                                    term
                                </th>
                                <th
                                    className={`border-[1px] text-[24px] border-white border-solid bg-[#FFFFFF19]`}
                                >
                                    meaning
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*// <!-- row 1 -->*/}
                            {
                                tableData.map(({id,term,meaning}) => (
                                    <tr key={id}>
                                        <th
                                            className={`border-[1px] border-white border-solid bg-black`}
                                        >
                                            {term}
                                        </th>
                                        <td
                                            className={`border-[1px] border-white border-solid bg-transparent`}
                                        >
                                            <div className={`md:whitespace-pre-wrap`}>

                                            {meaning}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Glossary;