import React, {useState} from 'react';
import CircularProgressBar from '../shared/circularProgressbar/CircularProgressBar.component';
import Input from '../shared/inputComponent/Input.component';

const ProgressWidget = () => {

    const [value, setvalue] = useState(0);

    const handleChangeEvent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setvalue(parseInt(e.target.value));
    }

    return(
        <>
            <CircularProgressBar
                strokeWidth={5}
                sqSize={300}
                value={value}
            />

            <Input
                id="progressInput" 
                type="range" 
                min="0" 
                max="10" 
                step="0.1"
                value={value}
                disabled={false}
                onChange={handleChangeEvent}
            />
        </>
    )
}

export default ProgressWidget;