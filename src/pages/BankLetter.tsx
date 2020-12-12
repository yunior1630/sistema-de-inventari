import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomModal,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSelect,
  Option,
} from '../components'
import { RadioChangeEvent } from 'antd/lib/radio'
import {
  CustomIcons,
  DarkBlueButton,
  validateMessages,
} from '../constants/general'
import { formItemLayout } from '../themes'
import { Form } from 'antd'

const BankLetter = (): React.ReactElement => {
  const [form] = Form.useForm()
  const [entryStateFilterVoucher, setEntryStateFilterVoucher] = React.useState()
  const handleStateFilterRadioChangeVoucher = (e: RadioChangeEvent) => {
    setEntryStateFilterVoucher(e.target.value)
  }
  const footer = [
    <CustomButton key='submit' type='primary' shape='round'>
      Guardar Borrador
    </CustomButton>,
    <DarkBlueButton key='submit' shape='round'>
      Cerrar
    </DarkBlueButton>,
    <CustomButton
      key='submit'
      type='primary'
      shape='round'
      htmlType={'submit'}
      onClick={() => {
        form.validateFields()
      }}
    >
      Acepta
    </CustomButton>,
  ]

  return (
    <CustomModal
      width={'60%'}
      visible={true}
      closable={true}
      footer={footer}
      title='Carta de Banco'
    >
      <CustomForm
        {...formItemLayout}
        validateMessages={validateMessages}
        form={form}
      >
        <CustomFormItem
          name='institucion'
          label='Institución'
          rules={[{ required: true }]}
          onlyLetters
        >
          <CustomSelect placeholder={'Selector'}>
            <Option value='A'>A</Option>
          </CustomSelect>
        </CustomFormItem>

        <CustomFormItem
          name='sucursal'
          label='Sucursal'
          rules={[{ required: true }]}
          onlyLetters
        >
          <CustomSelect placeholder={'Selector'}>
            <Option value='A'>A</Option>
          </CustomSelect>
        </CustomFormItem>

        <CustomFormItem
          name='ciudad'
          label='Ciudad'
          rules={[{ required: true }]}
          onlyLetters
        >
          <CustomSelect placeholder={'Selector'}>
            <Option value='A'>A</Option>
          </CustomSelect>
        </CustomFormItem>

        <CustomFormItem
          name='contacto'
          label='Contacto'
          rules={[
            {
              required: true,
              type: 'number',
              transform: (value: string) =>
                Number(value) ? value.length : value,
            },
          ]}
        >
          <CustomInput />
        </CustomFormItem>

        <CustomFormItem
          name='correo'
          label='Correo'
          rules={[{ required: true, type: 'email' }]}
        >
          <CustomRow justify='start'>
            <CustomCol span={22} style={{ padding: '0px 5px 0px 0px' }}>
              <CustomInput />
            </CustomCol>

            <CustomButton
              type={'primary'}
              shape='circle'
              icon={<CustomIcons.PlusOutlined />}
            />
          </CustomRow>
        </CustomFormItem>

        <CustomFormItem
          label={'Telefono'}
          name={'telefono'}
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
            <CustomCol span={17}>
              <CustomFormItem noStyle>
                <CustomInput />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={5} style={{ padding: '0px 5px' }}>
              <CustomFormItem noStyle>
                <CustomSelect placeholder={'Selector'}>
                  <Option value='RD'>RD$</Option>
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>

            <CustomButton
              type={'primary'}
              shape='circle'
              icon={<CustomIcons.PlusOutlined />}
            />
          </CustomRow>
        </CustomFormItem>

        <CustomFormItem
          label={'Valor de la carta'}
          name={'valor_de_la_carta'}
          rules={[
            {
              required: true,
              type: 'number',
              transform: (value: string) =>
                Number(value) ? value.length : value,
            },
          ]}
        >
          <CustomRow justify='start'>
            <CustomCol span={5}>
              <CustomSelect placeholder={'Selector'}>
                <Option value='monto'>A</Option>
              </CustomSelect>
            </CustomCol>

            <CustomCol span={17}>
              <CustomInput />
            </CustomCol>
          </CustomRow>
        </CustomFormItem>

        <CustomFormItem label='Confirmacíon de banco'>
          <CustomButton
            type={'primary'}
            style={{ borderColor: 'white' }}
            icon={<CustomIcons.CloudUploadOutlined />}
          ></CustomButton>
        </CustomFormItem>

        <CustomFormItem
          name='estatus_carta'
          label='Estatus de carta'
          rules={[{ required: true }]}
        >
          <CustomRow justify='start'>
            <CustomRadioGroup
              onChange={handleStateFilterRadioChangeVoucher}
              value={entryStateFilterVoucher}
            >
              <CustomRadio value={1}>Copia</CustomRadio>
              <CustomRadio value={2}>Original</CustomRadio>
              <CustomRadio value={3}>Pendiente de entrega</CustomRadio>
            </CustomRadioGroup>
          </CustomRow>
        </CustomFormItem>

        <CustomFormItem
          name='fecha_entrega'
          label='Fecha de Entrega'
          rules={[{ required: true }]}
        >
          <CustomInput />
        </CustomFormItem>
      </CustomForm>
    </CustomModal>
  )
}
export default BankLetter
