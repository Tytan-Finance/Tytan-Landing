import React from 'react';
import Link from "next/link";

interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href: string;
    isPageLink?: boolean;
}

const ButtonText: React.FC<Props> = ({children,isPageLink, href, className}) => {
    return (
        <>
            {isPageLink && (
                <Link href={href}>
                    <a className={`text-sm tracking-[0.05em] font-Planer-Bold text-white border-none uppercase btn ${className}`}>
                        {children}
                    </a>
                </Link>
            )}

            {!isPageLink && (
                <a target={'_blank'} href={href} className={`text-sm tracking-[0.05em] font-Planer-Bold text-white border-none uppercase btn ${className}`}>
                    {children}
                </a>
            )}
        </>
    );
};

export default ButtonText;