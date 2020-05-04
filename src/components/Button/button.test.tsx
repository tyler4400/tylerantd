import React from "react";
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
	onClick: jest.fn()
}
const testProps: ButtonProps = {
	btnType: ButtonType.Primary,
	size: ButtonSize.Large,
	className: 'klass'
}

test('first react test case', () => {
	const wrapper = render(<Button>Nice</Button>)
	const ele = wrapper.queryByText('Nice')
	expect(ele).toBeTruthy()
})

const disabledProps: ButtonProps = {
	disabled: true,
	onClick: jest.fn(),
}
describe('test Button component', () => {
	it('should render the correct default button ', function (){
		const wrapper = render(<Button {...defaultProps}>Nice</Button>)
		const element = wrapper.getByText('Nice') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.tagName).toBe('BUTTON')
		expect(element).toHaveClass('btn btn-default')
		expect(element.disabled).toBeFalsy()
		fireEvent.click(element)
		expect(defaultProps.onClick).toHaveBeenCalled()
	});

	it('should render the correct component based on different props', () => {
		const wrapper = render(<Button {...testProps}>Nice</Button>)
		const element = wrapper.getByText('Nice')
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass('btn klass btn-primary btn-lg')
	})

	it('should render a link when btnType equals link and href is provided', () => {
		const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">link</Button>)
		const element = wrapper.getByText('link')
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('A')
		expect(element).toHaveClass('btn btn-link')
	})

	it('should render disabled button when disabled set to true', () => {
		const wrapper = render(<Button {...disabledProps}>Nice</Button>)
		const element = wrapper.getByText('Nice') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.disabled).toBeTruthy()
		fireEvent.click(element)
		expect(disabledProps.onClick).not.toHaveBeenCalled()
	})

	// copied from 30c98c637559157afe642f8db0803e2ccfb923d7
	it('should render the correct component based on different props', () => {
		const wrapper = render(<Button {...testProps}>Nice</Button>)
		const element = wrapper.getByText('Nice')
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass('btn-primary btn-lg klass')
	})
})
