import React from 'react'
import { Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDatePicker,
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

const Contact = (): React.ReactElement => {
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
                    <CustomTitle level={4}>Contactos</CustomTitle>
                  </CustomDivider>
                  <CustomRow justify={'start'}>
                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Dirección'}
                        name={'direccion'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Dirección'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Cerda de'}
                        name={'cerda_de'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Cerda de'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24}>
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

                    <CustomCol xs={24}>
                      <CustomFormItem
                        label={'Nacimiento'}
                        name={'nacimiento'}
                        rules={[{ required: true }]}
                      >
                        <CustomDatePicker
                          placeholder={'Nacimiento'}
                          allowClear
                          format={'DD/MM/YYYY'}
                          style={{ width: '100%' }}
                        />
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
export default Contact
