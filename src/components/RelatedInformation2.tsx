import React from 'react'
import { Input, Select } from 'antd'
import {
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
const { TextArea } = Input

const RelatedInformation2 = (): React.ReactElement => {
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
                    <CustomTitle level={4}>Información Relacionada</CustomTitle>
                  </CustomDivider>
                  <br />
                  <CustomRow justify={'start'}>
                    <CustomCol span={24}>
                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Vendedor'}
                          name={'vendedor'}
                          rules={[{ required: true }]}
                        >
                          <CustomSelect placeholder={'Vendedor'}>
                            <Option value='A'>A</Option>
                          </CustomSelect>
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Categoria Cliente'}
                          name={'categoria_cliente'}
                          rules={[{ required: true }]}
                        >
                          <CustomSelect placeholder={'Categoria Cliente'}>
                            <Option value='A'>A</Option>
                          </CustomSelect>
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Oficial de Cobros'}
                          name={'oficial_cobros'}
                          onlyLetters
                          rules={[{ required: true }]}
                        >
                          <CustomInput placeholder={'Oficial de Cobros'} />
                        </CustomFormItem>
                      </CustomCol>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Sucursal'}
                          name={'sucursal'}
                          rules={[{ required: true }]}
                        >
                          <CustomSelect placeholder={'Sucursal'}>
                            <Option value='A'>A</Option>
                          </CustomSelect>
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Referencias'}
                          name={'referencias'}
                          onlyLetters
                          rules={[{ required: true }]}
                        >
                          <TextArea rows={4} placeholder={'Referencias'} />
                        </CustomFormItem>
                      </CustomCol>
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
export default RelatedInformation2
