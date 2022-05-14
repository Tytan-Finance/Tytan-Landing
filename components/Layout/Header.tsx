import React from 'react';
import Image from 'next/image';
import ButtonText from "../common/Buttons/ButtonText";
import ButtonPrimary from "../common/Buttons/ButtonPrimary";

interface Props {
}

const navLinks = [
    {
        id: 1,
        text: 'FAQ’s',
        href: '/#faq',
        isPageLink: true,
    }, {
        id: 2,
        text: 'Whitepaper',
        href: 'https://tytan.finance/TYTAN_Whitepaper.pdf',
    }, {
        id: 3,
        text: 'glossary',
        href: '/glossary',
        isPageLink: true,
    }, {
        id: 4,
        text: 'Discord',
        href: 'https://discord.gg/rC83Q7WZuc',
    },
];

const Header: React.FC<Props> = () => {
    return (
        <div className={`bg-black`}>
            <div className={`container flex items-center justify-between`}>

                {/*     Header Logo     */}
                <div>
                    <Image src={'/logo.svg'} width={144} height={34}/>
                </div>

                {/*     Center Links    */}
                <div className={`hidden md:flex items-center`}>
                    {
                        navLinks.map(({text,isPageLink, href, id}) => (
                            <ButtonText isPageLink={isPageLink} href={href} key={id}>
                                {text}
                            </ButtonText>
                        ))
                    }
                </div>

                {/*     Right side buttons      */}
                <div className={`flex items-center space-x-2 sm:space-x-4`}>
                    <ButtonPrimary withRightCut={true}>
                        open app
                    </ButtonPrimary>
                    {/*<button className={`btn`}>*/}
                    <div className="md:hidden dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-primary btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>
                        </label>

                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52 space-y-2">
                            {
                                navLinks.map(({text,isPageLink, href, id}) => (
                                    <li key={id}>
                                    <ButtonText isPageLink={isPageLink}  href={href} >
                                        {text}
                                    </ButtonText>
                                    </li>
                                ))
                            }

                            {/*<li><a>Item 2</a></li>*/}
                        </ul>

                    </div>
                    {/*</button>*/}
                </div>

            </div>
        </div>
    );
};

export default Header;