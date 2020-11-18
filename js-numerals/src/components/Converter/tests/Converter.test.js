import { render, fireEvent } from '@testing-library/react';
import Converter from '../index';

describe('<Converter/>', () => {

  it('should renders without errors', () => {

    const { container } = render(
      <Converter />
    );
    expect(container).toMatchSnapshot();
  });

  it('should return any number as words', () => {

    const { getByTestId } = render(
      <Converter />
    );
    fireEvent.change(getByTestId('input'), { target: { value: '٢٤' } })
    expect(getByTestId('result').textContent).toBe('twenty four ');

  });
  it('return not a number', () => {

    const { getByTestId } = render(
      <Converter />
    );
    fireEvent.change(getByTestId('input'), { target: { value: 'writing a text' } })
    expect(getByTestId('result').textContent).toBe('not a number');

  });
  it('return number too big if more than 15 digits', () => {

    const { getByTestId } = render(
      <Converter />
    );
    fireEvent.change(getByTestId('input'), { target: { value: '1234567890123456' } })
    expect(getByTestId('result').textContent).toBe('number is too big');

  });
});