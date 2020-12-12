import React from 'react'
import { InputNumber } from 'antd'
import { InputNumberProps } from 'antd/lib/input-number'

export type CustomInputProps = InputNumberProps

const CustomInputNumber: React.FunctionComponent<InputNumberProps> = ({
  disabled = false,
  type = 'text',
  autoComplete = 'off',
  ...props
}): React.ReactElement => (
  <InputNumber
    disabled={disabled}
    type={type}
    autoComplete={autoComplete}
    style={{ borderRadius: '5px', width: '100%' }}
    {...props}
  >
    {props.children}
  </InputNumber>
)

export default CustomInputNumber
