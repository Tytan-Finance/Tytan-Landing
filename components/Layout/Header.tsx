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
        href: '#faq',
    },{
        id: 2,
        text: 'Whitepaper',
        href: '#whitepaper',
    },{
        id: 3,
        text: 'glossary',
        href: '#glossary',
    },{
        id: 4,
        text: 'Discord',
        href: '#discord',
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
                <div className={`flex items-center`}>
                    {
                        navLinks.map(({text,href,id}) => (
                            <ButtonText href={href} key={id}>
                                {text}
                            </ButtonText>
                        ))
                    }
                </div>

                {/*     Right side buttons      */}
                <div>
                    <ButtonPrimary withRightCut={true}>
                        open app
                    </ButtonPrimary>
                </div>

            </div>
        </div>
    );
};

export default Header;