import React from 'react';

interface Props {
    withLeftCut?: boolean;
    withRightCut?:boolean;
    bgGreen?: boolean;
    btnLg?: boolean;
}

const ButtonPrimary:React.FC<Props> = ({withLeftCut,withRightCut,bgGreen,btnLg,children}) => {
    return (
        <button className={`btn 
         ${bgGreen ? 'btn-primary' :'btn-accent'}
         ${withRightCut ? 'right-cut' : ''}
         ${withLeftCut ? 'left-cut': ''}
         ${btnLg ? 'text-lg' : 'min-h-[2.5rem] h-[2.5rem] text-sm'}
           px-5 md:px-8 lg:px-16  rounded-none font-Planer-Bold`}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;