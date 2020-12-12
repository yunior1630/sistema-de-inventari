import React from 'react'
import Collapse, { CollapseProps } from 'antd/lib/collapse'

const CustomCollapse: React.FunctionComponent<CollapseProps> = ({
  ...props
}): React.ReactElement => {
  return <Collapse {...props}>{props.children}</Collapse>
}

export default CustomCollapse
