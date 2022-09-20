import { useState } from "react";
import Button from "../shared/ButtonComponent/Button.component";

const RangeBtnData = [
    {id: 1, isActive:false, value: 'Very High'},
    {id: 2, isActive:false, value: 'High'},
    {id: 3, isActive:false, value: 'Medium'},
    {id: 4, isActive:false, value: 'Low'},
    {id: 5, isActive:false, value: 'Very Low'}
]

interface IBtnprops {
    id: number;
    isActive: boolean;
    value: string;
};

const RangeWidget = () => {

    const [rangeButton, setRangeButton]  = useState<IBtnprops[]>(RangeBtnData);

    const [rangeStatus, setRangeStatus] = useState<IBtnprops | undefined>();

    const onBtnClickHandler = (i:number) => {
        const result = rangeButton.map((item, idx, arr) => {
            return i <= idx ? {...item, isActive: true} :  {...item, isActive: false};
        });
        
        const btnStatus = rangeButton.find((item, idx) => idx === i ? idx : null);

        setRangeButton(result);
        setRangeStatus(btnStatus);
    }

    return (
        <div className="app-rangewidget">
            {rangeStatus?.value && <p role="status" className="app-rangewidget__status">{rangeStatus.value}</p>}

            {rangeButton.map((btn, i) => <Button 
                onClick={() => onBtnClickHandler(i)} 
                key={btn.id} 
                className={btn.isActive ? 'active': ''}
                style={{width: `${100 - (i * 20)}%`}} 
                label=""
            />)}
            
        </div>
        
    )
}

export default RangeWidget;