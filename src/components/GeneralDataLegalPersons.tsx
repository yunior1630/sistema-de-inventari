import React from 'react'
import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons'
import { Select } from 'antd'

import {
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
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

const GeneralDataLegalPersons = (): React.ReactElement => {
  return (
    <CustomLayout>
      <CustomContent>
        <CustomRow justify={'center'}>
          <CustomCol span={24}>
            <ContentContainer>
              <CustomForm
                {...formItemLayout}
                validateMessages={validateMessages}
              >
                <FormContainer>
                  <CustomRow justify={'start'}>
                    <CustomCol span={24}>
                      <CustomDivider orientation={'left'}>
                        <CustomTitle level={4}>
                          Datos Generales Personas Jurídica
                        </CustomTitle>
                      </CustomDivider>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'RNC'}
                        name={'rnc'}
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
                          <CustomCol span={22}>
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
                              <CustomInput placeholder={'RNC'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={2}>
                            <CustomFormItem noStyle>
                              <CustomButton
                                type='primary'
                                icon={<CloudUploadOutlined />}
                              />
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'Nombre(s)'}
                        name={'nombre'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Nombre'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={8}>
                      <CustomRow justify={'end'}>
                        <CustomFormItem>
                          <CustomButton
                            type='primary'
                            icon={<CloudUploadOutlined />}
                          >
                            Registro Mercantil
                          </CustomButton>
                        </CustomFormItem>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'Sector económico'}
                        name={'sector_económico'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Sector económico'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={8}>
                      <CustomRow justify={'end'}>
                        <CustomFormItem>
                          <CustomButton
                            type='primary'
                            icon={<CloudUploadOutlined />}
                          >
                            Asamblea Constitutiva
                          </CustomButton>
                        </CustomFormItem>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'Actividad económico'}
                        name={'actividad_económico'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Actividad económico'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={8}>
                      <CustomRow justify={'end'}>
                        <CustomFormItem>
                          <CustomButton
                            type='primary'
                            icon={<CloudUploadOutlined />}
                          >
                            Foto de Representante
                          </CustomButton>
                        </CustomFormItem>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'Provincia'}
                        name={'provincia'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Provincia'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={8}>
                      <CustomRow justify={'end'}>
                        <CustomFormItem>
                          <CustomButton
                            type='primary'
                            icon={<CloudUploadOutlined />}
                          >
                            Estatutos
                          </CustomButton>
                        </CustomFormItem>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol xs={24} md={21} lg={22}>
                      <CustomFormItem
                        label={'Teléfono'}
                        labelCol={{
                          sm: { span: 8 },
                          md: { span: 6 },
                          lg: { span: 5 },
                        }}
                        name={'telefono'}
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
                        <CustomRow justify={'start'}>
                          <CustomCol xs={16} lg={13}>
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
                              <CustomInput placeholder={'Teléfono'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={6} md={5} lg={4}>
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
                              <CustomSelect
                                placeholder={'Selector'}
                                style={{ padding: '0px 5px' }}
                              >
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={2}>
                            <CustomFormItem noStyle>
                              <CustomButton
                                type='primary'
                                shape='circle'
                                icon={<PlusOutlined />}
                              />
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'Dirección Empresa'}
                        name={'direccion_empresa'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Dirección Empresa'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={16} lg={14}>
                      <CustomFormItem
                        label={'Estatus'}
                        name={'estatus'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Estatus'}>
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
export default GeneralDataLegalPersons
