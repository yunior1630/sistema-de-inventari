import React from 'react'
import styled from 'styled-components'
import { Radio } from 'antd'
import { RadioGroupProps } from 'antd/lib/radio'

const CustomRadioGroup: React.FunctionComponent<RadioGroupProps> = ({
  ...props
}): React.ReactElement => <Radio.Group {...props}>{props.children}</Radio.Group>

const CustomRadioVertical = styled(CustomRadioGroup)`
  display: block;
  height: 30px;
  lineheight: 30px;
`
export default CustomRadioVertical
