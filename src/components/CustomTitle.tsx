import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export type CustomTitleProps = {
  code?: boolean
  copyable?: boolean | { text: string; onCopy: () => void }
  deleted?: boolean
  disabled?: boolean
  editable?:
    | boolean
    | {
        editing: boolean
        onStart: () => void
        onChange: (value: string) => void
      }
  ellipsis?:
    | boolean
    | {
        rows?: number
        expandable?: boolean
        suffix?: string
        onExpand?: React.MouseEventHandler<HTMLElement>
        onEllipsis?: (ellipsis: boolean) => void
      }
  level?: 1 | 2 | 3 | 4
  mark?: boolean
  type?: 'secondary' | 'warning' | 'danger'
  underline?: boolean
}

const CustomTitle: React.FunctionComponent<CustomTitleProps> = ({
  code = false,
  copyable = false,
  deleted = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  level = 1,
  mark = false,
  underline = false,
  ...props
}): React.ReactElement => (
  <Title
    code={code}
    copyable={copyable}
    delete={deleted}
    disabled={disabled}
    editable={editable}
    ellipsis={ellipsis}
    level={level}
    mark={mark}
    underline={underline}
    {...props}
  >
    {props.children}
  </Title>
)

export default CustomTitle
