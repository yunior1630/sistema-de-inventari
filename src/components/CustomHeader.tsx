import React from 'react'
import { Layout } from 'antd'
import { CustomLayoutProps } from './CustomLayout'

const { Header } = Layout

const CustomHeader: React.FunctionComponent<CustomLayoutProps> = (
  props
): React.ReactElement => <Header {...props}>{props.children}</Header>

export default CustomHeader
