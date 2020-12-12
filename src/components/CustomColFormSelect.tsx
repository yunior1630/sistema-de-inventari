import React from 'react'
import { Select } from 'antd'

import { CustomCol, CustomFormItem, CustomInput, CustomRow } from '.'
const { Option, OptGroup } = Select
interface Message1 {
  name1: string
  spanSelect: number
  spanInput: number
}

const CustomColFormSelect = ({
  name1 = '',
  spanSelect = 0,
  spanInput = 0,
}: Message1) => {
  return (
    <CustomRow justify={'end'}>
      <CustomCol
        span={spanInput}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <CustomFormItem
          name={name1}
          rules={[
            {
              required: true,
              message: 'El campo  es requerido',
            },
          ]}
          label='monto a devolver'
        >
          <CustomInput />
        </CustomFormItem>
      </CustomCol>

      <CustomCol
        span={spanSelect}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <Select
          defaultValue='lucy'
          style={{
            width: 100,
            position: 'relative',
            top: '-12px',
            left: '-23px',
          }}
        >
          <OptGroup label='Manager'>
            <Option value='jack'>Jack</Option>
            <Option value='lucy'>Lucy</Option>
          </OptGroup>
        </Select>
      </CustomCol>
    </CustomRow>
  )
}

export default CustomColFormSelect
