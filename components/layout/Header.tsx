import React from 'react';
import Image from 'next/image';

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <div className={`bg-black`}>
            <div className={`container flex items-center justify-between`}>

                {/*     Header Logo     */}
                <div>
                    <Image src={'/logo.svg'} width={144} height={34}/>
                </div>

                {/*     Center Links    */}
                <div>
                    center links
                </div>

                {/*     Right side buttons      */}
                <div>
                    Right Button
                </div>

            </div>
        </div>
    );
};

export default Header;