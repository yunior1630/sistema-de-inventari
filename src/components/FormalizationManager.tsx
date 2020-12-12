import React from 'react'
import { Input, Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import {
  AudioOutlined,
  CloudUploadOutlined,
  PlusOutlined,
} from '@ant-design/icons'

import {
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomLayout,
  CustomRadio,
  CustomRadioGroup,
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

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
)

const { Option } = Select
const { Search } = Input

const FormalizationManager = (): React.ReactElement => {
  const [
    identificationTypeRadioState,
    setIdentificationTypeRadioState,
  ] = React.useState(' ')
  const handleStateOpc1RadioChange = (e: RadioChangeEvent) => {
    setIdentificationTypeRadioState(e.target.value)
  }

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
                    <CustomTitle level={4}>
                      Datos Generales Personas Jurídica
                    </CustomTitle>
                  </CustomDivider>
                  <br />
                  <CustomRow justify={'start'}>
                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Nombre(s)'}
                        name={'nombre'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <Search
                          suffix={suffix}
                          placeholder='Nombre'
                          enterButton
                        />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Apellido(s)'}
                        name={'apellido'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Apellido'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Identificación'}
                        name={'identificación'}
                        rules={[
                          {
                            required: true,
                            type:
                              identificationTypeRadioState === 'C'
                                ? 'number'
                                : 'string',
                            len:
                              identificationTypeRadioState === 'C'
                                ? 11
                                : undefined,
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol span={22}>
                            <CustomFormItem noStyle>
                              <CustomInput
                                placeholder={'Identificación'}
                                disabled={identificationTypeRadioState === ' '}
                              />
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

                    <CustomCol span={24}>
                      <CustomRow justify={'center'}>
                        <CustomRadioGroup onChange={handleStateOpc1RadioChange}>
                          <CustomRadio value={'C'}>Cédula</CustomRadio>
                          <CustomRadio value={'P'}>Pasaporte</CustomRadio>
                        </CustomRadioGroup>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol span={24}>
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
                            <CustomFormItem noStyle>
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

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Teléfono'}
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
                          <CustomCol span={16}>
                            <CustomFormItem noStyle>
                              <CustomInput placeholder={'Teléfono'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={6}>
                            <CustomFormItem noStyle>
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
export default FormalizationManager
