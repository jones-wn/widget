import React from 'react';
import { CustomButton } from '../../helper/buttonControl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    showIcon?: boolean;
    active?: boolean;
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}

const Button:React.FC<ButtonProps>  = ({label,backgroundColor,size = 'medium', primary=false, ...props}) => {
    return(
        <CustomButton 
        active={props.active} 
        style={{ backgroundColor }}
        {...props}>{label}</CustomButton>
    )
}


export default Button;