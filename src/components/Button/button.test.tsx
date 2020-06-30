import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonType } from './button';

const defaultProps = {
  onClick: jest.fn()
}

const disabledProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nick</Button>);
    // 获取元素
    const element = wrapper.getByText('Nick');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn');
    // 模拟点击元素
    fireEvent.click(element);
    // 判断点击事件有没有被调用
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element.tagName).toEqual('A');
  });

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>btn</Button>);
    const element = wrapper.getByText('btn');
    expect(element.hasAttribute('disabled')).toBeTruthy();
    fireEvent.click(element);
    // 判断点击事件没有被调用
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
