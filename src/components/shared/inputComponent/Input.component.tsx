import React from 'react';
import { FormControl } from '../../helper/formControl';

type ButtonProps = {
    id: string;
    label?: string;
    disabled: boolean;
    type: string;
    min?: string;
    max?: string;
    step?:string;
    value: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<ButtonProps> = (props) => {
  const {disabled = false, label = '', type, value,  ...rest} = props;

  return (
    <FormControl>
        {label && <label>{label}</label>}
        <input 
        className='form-input' 
        type={type} 
        value={value} 
        {...rest}
        style={{ backgroundSize: `${(value * 10)}% 100%`}}
        />
        
    </FormControl>
  )
}

export default Input;