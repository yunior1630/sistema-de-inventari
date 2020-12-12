import React from 'react'
import Collapse, { CollapsePanelProps } from 'antd/lib/collapse'

const { Panel } = Collapse
const CustomPanel: React.FunctionComponent<CollapsePanelProps> = ({
  ...props
}): React.ReactElement => <Panel {...props}>{props.children}</Panel>

export default CustomPanel
