import React from 'react';

interface Props {
    className?: string;
}

const ResponsiveBody1: React.FC<Props> = ({children, className}) => {
    return (
        <p className={`text-md md:text-lg lg:text-xl font-Planer-Medium leading-[32px] ${className}`}>
            {children}
        </p>
    );
};

export default ResponsiveBody1;