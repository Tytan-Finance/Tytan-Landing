import React from 'react';

interface Props{
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href: string;
}

const ButtonText:React.FC<Props> = ({children,href,className}) => {
    return (
        <a href={href} className={`text-sm tracking-[0.05em] font-Planer-Bold text-white border-none uppercase btn ${className}`}>
            {children}
        </a>
    );
};

export default ButtonText;