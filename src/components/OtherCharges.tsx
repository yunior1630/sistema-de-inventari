import { Form } from 'antd'
import React from 'react'
import {
  CustomButton,
  CustomCol,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomModal,
  CustomRow,
  CustomSelect,
  CustomTitle,
  Option,
} from '.'

import {
  CustomIcons,
  DarkBlueButton,
  FormContainer,
  validateMessages,
} from '../constants/general'
import { formItemLayout } from '../themes'

type dynamicInputsType = {
  label: string
  name: string
  placeholder: string
  option?: boolean
}

const inputs: dynamicInputsType[] = [
  {
    label: 'Multa de Vehículo en DGII',
    name: 'multa_de_vehiculo_en_dgii',
    placeholder: 'Multa de vehículo en DGII',
  },
  {
    label: 'Multa Renovación de Marbetes',
    name: 'multa_renovacion_de_marbetes',
    placeholder: 'Multa renovación de marbetes',
  },
  {
    label: 'Certificación Vehículos Recibido',
    name: 'certificacion_vehiculos_recibido',
    placeholder: 'Certificación vehículos recibido',
  },
  {
    label: 'Marbete Vehículo Recibido',
    name: 'marbete_vehiculo_recibido',
    placeholder: 'Marbete vehículo recibido',
  },
  {
    label: 'Lavantamiento de Oposición',
    name: 'lavantamiento_de_oposicion',
    placeholder: 'Lavantamiento de oposición',
  },
  {
    label: 'Pérdida de Matrícula',
    name: 'perdida_de_matricula',
    placeholder: 'Pérdida de matrícula',
  },
  {
    label: 'Pérdida de Chapa',
    name: 'perdida_de_chapa',
    placeholder: 'Pérdida de chapa',
  },
  {
    label: 'Pérdida de Marbete',
    name: 'perdida_de_marbete',
    placeholder: 'Pérdida de marbete',
  },
  {
    label: 'Deducible de Seguro',
    name: 'deducible_de_seguro',
    placeholder: 'Deducible de seguro',
    option: true,
  },
  {
    label: 'Total Otros Gastos',
    name: 'total_otros_gastos',
    placeholder: 'Total otros gastos',
  },
]

const OtherCharges = (): React.ReactElement => {
  function myFunction(values: any) {
    const { label, name, placeholder, option } = values
    if (option !== true) {
      return (
        <CustomCol xs={24} xl={22}>
          <CustomFormItem
            label={label}
            name={name}
            labelCol={{ sm: 24, md: 24, lg: 10 }}
            rules={[{ required: true }]}
          >
            <CustomRow justify={'start'}>
              <CustomCol xs={7} md={6}>
                <CustomFormItem noStyle>
                  <CustomSelect
                    placeholder={'Selector'}
                    style={{ padding: '0px 5px' }}
                  >
                    <Option value='RD'>RD$</Option>
                  </CustomSelect>
                </CustomFormItem>
              </CustomCol>

              <CustomCol span={17}>
                <CustomFormItem noStyle>
                  <CustomInput placeholder={placeholder} />
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomFormItem>
        </CustomCol>
      )
    } else {
      return (
        <CustomCol xs={24} xl={22}>
          <CustomFormItem
            label={label}
            name={name}
            labelCol={{ sm: 24, md: 24, lg: 10 }}
            rules={[{ required: true }]}
          >
            <CustomRow justify={'start'}>
              <CustomCol xs={7} md={6}>
                <CustomFormItem noStyle>
                  <CustomSelect
                    placeholder={'Selector'}
                    style={{ padding: '0px 5px' }}
                  >
                    <Option value='RD'>RD$</Option>
                  </CustomSelect>
                </CustomFormItem>
              </CustomCol>

              <CustomCol span={15}>
                <CustomFormItem noStyle>
                  <CustomInput placeholder={placeholder} />
                </CustomFormItem>
              </CustomCol>

              <CustomCol span={2}>
                <CustomFormItem noStyle>
                  <CustomButton
                    type='primary'
                    icon={<CustomIcons.CloudUploadOutlined />}
                  />
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomFormItem>
        </CustomCol>
      )
    }
  }

  const [form] = Form.useForm()
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
    <CustomRow justify={'center'}>
      <CustomModal width={'70%'} visible={true} closable={true} footer={footer}>
        <CustomForm
          form={form}
          {...formItemLayout}
          validateMessages={validateMessages}
        >
          <FormContainer>
            <CustomDivider orientation={'left'}>
              <CustomTitle level={4}>Otros Cargos</CustomTitle>
            </CustomDivider>
            <CustomRow justify={'start'}>{inputs.map(myFunction)}</CustomRow>
          </FormContainer>
        </CustomForm>
      </CustomModal>
    </CustomRow>
  )
}
export default OtherCharges
