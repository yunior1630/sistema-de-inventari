import { RadioChangeEvent } from 'antd/lib/radio'
import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomFormItem,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSelect,
  CustomTitle,
  Option,
} from '.'

import { CustomIcons } from '../constants/general'
const ExternalCommissionerLegalSale = (): React.ReactElement => {
  const [entryStateFilter, setEntryStateFilter] = React.useState(true)
  const handleStateFilterRadioChange = (e: RadioChangeEvent) => {
    setEntryStateFilter(e.target.value)
  }
  return (
    <>
      <CustomFormItem
        label='RNC'
        name='rnc'
        rules={[
          {
            required: true,
            type: 'number',
            transform: (value: string) =>
              Number(value) ? value.length : value,
          },
        ]}
      >
        <CustomRow justify={'start'}>
          <CustomCol xs={16} lg={20}>
            <CustomFormItem noStyle>
              <CustomInput />
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={8} lg={3}>
            <CustomFormItem noStyle>
              <CustomButton
                type='primary'
                icon={<CustomIcons.CloudUploadOutlined />}
              />
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={8} lg={1}>
            <CustomButton
              type='primary'
              icon={<CustomIcons.CloudUploadOutlined />}
            >
              Factura con Valor Fiscal
            </CustomButton>
          </CustomCol>
        </CustomRow>
      </CustomFormItem>

      <CustomFormItem
        label='Empresa'
        name='empresa'
        rules={[{ required: true }]}
      >
        <CustomRow justify={'start'}>
          <CustomCol xs={16} lg={13}>
            <CustomFormItem noStyle>
              <CustomInput />
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={8} lg={11}>
            <CustomFormItem noStyle>
              <CustomSelect
                placeholder={'Selector'}
                style={{ padding: '0px 5px' }}
              >
                <Option value='A'>A</Option>
              </CustomSelect>
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomFormItem>

      <CustomFormItem
        label={'Teléfono'}
        name={'teléfono'}
        rules={[
          {
            required: true,
            type: 'number',
            len: 10,
            transform: (value: string) =>
              Number(value) ? value.length : value,
          },
        ]}
      >
        <CustomInput placeholder={'Teléfono'} />
      </CustomFormItem>

      <CustomFormItem
        label={'Correo'}
        name={'correo'}
        rules={[{ required: true }]}
      >
        <CustomInput placeholder={'Correo'} />
      </CustomFormItem>

      <CustomTitle level={4}>Representante</CustomTitle>

      <CustomFormItem
        label={'Nombres'}
        name={'nombres'}
        rules={[{ required: true }]}
        onlyLetters
      >
        <CustomInput placeholder={'Nombres'} />
      </CustomFormItem>

      <CustomFormItem
        label={'Apellidos'}
        name={'apellidos'}
        rules={[{ required: true }]}
        onlyLetters
      >
        <CustomInput placeholder={'Apellidos'} />
      </CustomFormItem>

      <CustomFormItem
        label='Identificacíon'
        name='identificacion'
        rules={[{ required: true }]}
      >
        <CustomRow justify={'start'}>
          <CustomCol xs={16} lg={20}>
            <CustomFormItem noStyle>
              <CustomInput />
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={8} lg={3}>
            <CustomButton
              type='primary'
              icon={<CustomIcons.CloudUploadOutlined />}
            />
          </CustomCol>

          <CustomCol xs={8} lg={1}>
            <CustomFormItem noStyle>
              <CustomRadioGroup
                onChange={handleStateFilterRadioChange}
                value={entryStateFilter}
              >
                <CustomRadio value={false}>Cédula</CustomRadio>
                <CustomRadio value={true}>Pasaporte</CustomRadio>
              </CustomRadioGroup>
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomFormItem>

      <CustomFormItem
        label='Monto a comisionar'
        name='monto_comisionar'
        rules={[{ required: true }]}
      >
        <CustomRow justify={'start'}>
          <CustomCol xs={16} lg={13}>
            <CustomFormItem noStyle>
              <CustomSelect
                placeholder={'Selector'}
                style={{ padding: '0px 5px' }}
              >
                <Option value='A'>A</Option>
              </CustomSelect>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={8} lg={11}>
            <CustomFormItem noStyle>
              <CustomInput />
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomFormItem>
    </>
  )
}
export default ExternalCommissionerLegalSale
