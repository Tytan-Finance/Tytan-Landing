import React from 'react';

interface Props {
    className?: string;
}

const ResponsiveH1:React.FC<Props> = ({children,className}) => {
    return (
        <h1 className={`text-[36px] md:text-[45px] lg:text-[50px] font-Planer-DemiBold ${className}`}>
            {children}
        </h1>
    );
};

export default ResponsiveH1;