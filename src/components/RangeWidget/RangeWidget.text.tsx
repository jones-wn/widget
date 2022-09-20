import { screen, render, fireEvent } from "@testing-library/react";
import Button from "../shared/ButtonComponent/Button.component";
import RangeWidgetComponent from '../RangeWidget/RangeWidget.component';

test('Button click Event check', () => {
    const RangeBtnData = [
        {id: 1, isActive:false, value: 'Very High'},
        {id: 2, isActive:false, value: 'High'},
        {id: 3, isActive:false, value: 'Medium'},
        {id: 4, isActive:false, value: 'Low'},
        {id: 5, isActive:false, value: 'Very Low'}
    ];
    const onClick = jest.fn();
    render(<Button onClick={onClick} role="rangeBtn"/>);
    const buttonElement = screen.getByRole("rangeBtn");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onclick).toBeTruthy();
    expect(buttonElement).toHaveClass('active');
});

test('Status text updates check', () => {
    const statusdata = {id: 1, isActive:false, value: 'Very High'};

    const onClick = jest.fn();
    render(<Button onClick={onClick} role="rangeBtn"/>);
    const buttonElement = screen.getByRole("rangeBtn");
    const textElemt = screen.getByRole('status')
    fireEvent.click(buttonElement);
    expect(textElemt).toHaveTextContent(statusdata.value);
});



