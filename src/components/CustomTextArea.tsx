import React from 'react'
import Input, { TextAreaProps } from 'antd/lib/input'
const { TextArea } = Input
const CustomTextArea: React.FunctionComponent<TextAreaProps> = ({
  ...props
}): React.ReactElement => {
  return <TextArea {...props}>{props.children}</TextArea>
}

export default CustomTextArea
