import React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

export type CustomInputProps = InputProps

const CustomInput: React.FunctionComponent<InputProps> = ({
  disabled = false,
  type = 'text',
  autoComplete = 'off',
  ...props
}): React.ReactElement => (
  <Input
    disabled={disabled}
    type={type}
    autoComplete={autoComplete}
    style={{ borderRadius: '5px' }}
    {...props}
  >
    {props.children}
  </Input>
)

export default CustomInput
