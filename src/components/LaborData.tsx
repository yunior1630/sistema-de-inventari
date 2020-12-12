import React from 'react'
import { Select } from 'antd'
import {
  CustomCol,
  CustomContent,
  CustomDatePicker,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomLayout,
  CustomRow,
  CustomSelect,
  CustomTitle,
} from '.'

import {
  ContentContainer,
  FormContainer,
  validateMessages,
} from '../constants/general'
import { formItemLayout } from '../themes'

const { Option } = Select

const LaborData = (): React.ReactElement => {
  return (
    <CustomLayout>
      <CustomContent>
        <CustomRow justify={'center'}>
          <CustomCol span={24}>
            <ContentContainer>
              <CustomForm
                {...formItemLayout}
                validateMessages={validateMessages}
                layout='vertical'
              >
                <FormContainer>
                  <CustomDivider orientation={'left'}>
                    <CustomTitle level={4}>Datos Laborales</CustomTitle>
                  </CustomDivider>
                  <CustomRow justify={'start'}>
                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Lugar de Trabajo'}
                        name={'lugar_de_trabajo'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Lugar de Trabajo'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'ocupación'}
                        name={'ocupacion'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'ocupación'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Posición'}
                        name={'posicion'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Posición'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Tiempo en la Empresa'}
                        labelCol={{ xl: { span: 24 } }}
                        name={'tiempo_en_la_empresa'}
                        rules={[{ required: true }]}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol span={18}>
                            <CustomFormItem noStyle>
                              <CustomSelect
                                placeholder={'Tiempo en la Empresa'}
                              >
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={6}>
                            <CustomFormItem noStyle>
                              <CustomDatePicker
                                placeholder={'Años'}
                                allowClear
                                format={'DD/MM/YYYY'}
                                style={{ width: '100%' }}
                              />
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Actividad Comercial'}
                        labelCol={{ sm: { span: 10 } }}
                        name={'actividad_comercial'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Actividad Comercial'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>
                  </CustomRow>
                </FormContainer>
              </CustomForm>
            </ContentContainer>
          </CustomCol>
        </CustomRow>
      </CustomContent>
    </CustomLayout>
  )
}
export default LaborData
