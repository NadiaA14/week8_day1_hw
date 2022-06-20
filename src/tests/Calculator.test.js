import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent, getDefaultNormalizer } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let b1;
  let b2;
  let b3;
  let b4;
  let b5;
  let b6;
  let b7;
  let b8;
  let b9;
  let aButton;
  let sButton;
  let dButton;
  let mButton;
  let eButton;
  let rTotal;
  let cButton;


  beforeEach(() => {
    container = render(<Calculator />)

    b1 = container.getByTestId('number1');
    b2 = container.getByTestId('number2');
    b3 = container.getByTestId('number3');
    b4 = container.getByTestId('number4');
    b5 = container.getByTestId('number5');
    b6 = container.getByTestId('number6');
    b7 = container.getByTestId('number7');
    b8 = container.getByTestId('number8');
    b9 = container.getByTestId('number9');
    aButton = container.getByTestId('operator_add');
    sButton = container.getByTestId('operator-subtract');
    dButton = container.getByTestId('operator-divide');
    mButton = container.getByTestId('operator-multiply');
    eButton = container.getByTestId('operator-equals');
    rTotal = container.getByTestId('running-total');
    cButton = container.getByTestId('clear');

  });

  it('should change running total on number enter', () => {
    fireEvent.click(b4);
    expect(rTotal.textContent).toEqual('4');
  });

  it('should add 1 to 4 and get 5', () => {
    fireEvent.click(b1);
    fireEvent.click(aButton);
    fireEvent.click(b4);
    fireEvent.click(eButton);
    expect(rTotal.textContent).toEqual('5');
  });

  it('should subtract 4 from 7 and get 3', () => {
    fireEvent.click(b7);
    fireEvent.click(sButton);
    fireEvent.click(b4);
    fireEvent.click(eButton);
    expect(rTotal.textContent).toEqual('3');
  });

  it('should multiply 3 by 5 and get 15', () => {
    fireEvent.click(b5);
    fireEvent.click(mButton);
    fireEvent.click(b3);
    fireEvent.click(eButton);
    expect(rTotal.textContent).toEqual('15');
  });

  it('should divide 21 by 7 and get 3', () => {
    fireEvent.click(b2);
    fireEvent.click(b1);
    fireEvent.click(dButton);
    fireEvent.click(b7);
    fireEvent.click(eButton);
    expect(rTotal.textContent).toEqual('3');
  });

})