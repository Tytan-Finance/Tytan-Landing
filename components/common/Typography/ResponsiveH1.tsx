import React from 'react';

interface Props {
    className?: string;
    withCustomFontSize?: boolean;
}

const ResponsiveH1:React.FC<Props> = ({children,className,withCustomFontSize}) => {
    return (
        <h1 className={`${withCustomFontSize ? '' : "text-[36px"} ${withCustomFontSize ? '' : 'md:text-[45px]'} ${withCustomFontSize ? '' : 'lg:text-[50px]'} font-Planer-DemiBold ${className}`}>
            {children}
        </h1>
    );
};

export default ResponsiveH1;