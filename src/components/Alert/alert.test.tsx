import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './alert';

const defaultProps = {
  title: 'default',
  onClose: jest.fn()
}

describe('test Alert Component', () => {
  it('should render the correct default alert', () => {
    const wrapper = render(<Alert { ...defaultProps } />);
    const element = wrapper.getByText('default');
    const closeEle = wrapper.getByText('x');

    expect(element.parentElement).toHaveClass('alert');
    expect(closeEle).toBeInTheDOM();

    fireEvent.click(closeEle);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});