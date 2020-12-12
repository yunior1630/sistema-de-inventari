import React from 'react'
import { Checkbox } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'

const CustomCheckBoxGroup: React.FunctionComponent<CheckboxGroupProps> = (
  props
): React.ReactElement => (
  <Checkbox.Group {...props}>{props.children}</Checkbox.Group>
)

export default CustomCheckBoxGroup
