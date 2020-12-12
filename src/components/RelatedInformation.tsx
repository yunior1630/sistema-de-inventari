import React from 'react'
import { Select } from 'antd'
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

import { ContentContainer, FormContainer } from '../constants/general'
import { formItemLayout } from '../themes'

const { Option } = Select

const RelatedInformation = (): React.ReactElement => {
  const validateMessages = {
    required: `'$\{label}' es requerido.`,
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
                    <CustomTitle level={4}>Información Relacionada</CustomTitle>
                  </CustomDivider>
                  <br />
                  <CustomRow justify={'start'}>
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
                        label={'Indicador de Confianza'}
                        name={'indicador_confianza'}
                        labelCol={{ xl: { span: 24 } }}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Indicador de Confianza'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Oficial de Cobros'}
                        name={'oficial_cobros'}
                        labelCol={{ xl: { span: 24 } }}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Oficial de Cobros'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Mensaje Para el Cliente'}
                        name={'mensaje_para_el_cliente'}
                        labelCol={{ xl: { span: 24 } }}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Mensaje Para el Cliente'} />
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
export default RelatedInformation
