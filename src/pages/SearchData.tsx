import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import {
  CustomButton,
  CustomCol,
  CustomCollapse,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomPanel,
  CustomRow,
  CustomSelect,
  CustomTextArea,
  CustomTitle,
  Option,
} from '../components'

import GeneralDataLegalPersons from '../components/GeneralDataLegalPersons'
import FormalizationManager from '../components/FormalizationManager'
import Representative from '../components/Representative'
import RelatedInformation from '../components/RelatedInformation'

import {
  ContentContainer,
  DarkBlueButton,
  FormContainer,
  validateMessages,
} from '../constants/general'

import { formItemLayout } from '../themes'

const SearchData = (): React.ReactElement => {
  const [deploymentState, setDeploymentState] = React.useState(true)

  return (
    <CustomRow justify={'center'}>
      <CustomCol xs={24}>
        <ContentContainer background-color={'black'}>
          <CustomForm {...formItemLayout} validateMessages={validateMessages}>
            <FormContainer>
              <CustomDivider orientation={'left'}>
                <CustomTitle level={4}>Datos de Búsqueda</CustomTitle>
              </CustomDivider>
              <CustomRow justify={'start'}>
                <CustomCol xs={24} sm={10} xl={8}>
                  <CustomFormItem
                    label={'RNC'}
                    labelCol={{ md: { span: 7 } }}
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
                    <CustomInput placeholder={'RNC'} />
                  </CustomFormItem>
                </CustomCol>

                <CustomCol
                  xs={4}
                  style={{ display: deploymentState ? '' : 'none' }}
                >
                  <CustomFormItem>
                    <CustomButton
                      htmlType={'submit'}
                      type={'primary'}
                      onClick={() => setDeploymentState(!deploymentState)}
                    >
                      Búsqueda avanzada
                    </CustomButton>
                  </CustomFormItem>
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={14}
                  md={13}
                  lg={11}
                  xl={10}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem
                    label={'Nombre(s)'}
                    onlyLetters
                    name={'nombre'}
                    labelCol={{ md: { span: 4 } }}
                    rules={[{ required: true }]}
                  >
                    <CustomRow justify={'start'}>
                      <CustomCol span={18}>
                        <CustomFormItem
                          noStyle
                          rules={[{ required: true }]}
                          onlyLetters
                        >
                          <CustomInput placeholder={'Nombre'} />
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={6}>
                        <CustomFormItem
                          label={'Selector'}
                          onlyLetters
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
                    </CustomRow>
                  </CustomFormItem>
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={18}
                  md={14}
                  lg={14}
                  xl={12}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem
                    label={'Teléfono'}
                    labelCol={{
                      sm: { span: 4 },
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
                      <CustomCol xs={16} lg={15}>
                        <CustomFormItem noStyle rules={[{ required: true }]}>
                          <CustomInput placeholder={'Teléfono'} />
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={6}>
                        <CustomFormItem noStyle rules={[{ required: true }]}>
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

                <CustomCol
                  xs={4}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem style={{ padding: '0px 10px' }}>
                    <CustomButton
                      htmlType={'submit'}
                      type={'primary'}
                      onClick={() => setDeploymentState(!deploymentState)}
                    >
                      Búsqueda simple
                    </CustomButton>
                  </CustomFormItem>
                </CustomCol>
              </CustomRow>

              <CustomRow justify={'center'} align='top'>
                <CustomCol xs={24} lg={22} xl={15}>
                  <GeneralDataLegalPersons />
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={20}
                  md={17}
                  lg={15}
                  xl={9}
                  style={{ padding: '0px 5px' }}
                >
                  <br />
                  <br />
                  <CustomCollapse>
                    <CustomPanel header='Respresentante' key='1'>
                      <CustomCol xs={24}>
                        <Representative />
                      </CustomCol>
                    </CustomPanel>

                    <CustomPanel header='Información Relacionada' key='2'>
                      <CustomCol xs={24}>
                        <RelatedInformation />
                      </CustomCol>
                    </CustomPanel>

                    <CustomPanel
                      header='Datos Generales Personas Jurídica'
                      key='3'
                    >
                      <CustomCol xs={24}>
                        <FormalizationManager />
                      </CustomCol>
                    </CustomPanel>
                  </CustomCollapse>
                </CustomCol>
              </CustomRow>

              <CustomRow justify={'start'}>
                <CustomCol xs={24}>
                  <CustomCol xs={24} md={16} lg={12} xl={10}>
                    <br />
                    <CustomFormItem
                      label={'Remitente'}
                      name={'remitente'}
                      onlyLetters
                      rules={[{ required: true }]}
                    >
                      <CustomInput
                        placeholder={'Nombre del usuario que pone el mensaje'}
                      />
                    </CustomFormItem>
                  </CustomCol>
                </CustomCol>

                <CustomCol xs={24}>
                  <CustomCol xs={24} md={16} lg={12} xl={10}>
                    <CustomFormItem
                      label={'Mensaje Para el Cliente'}
                      name={'mensaje_para_el_cliente'}
                      onlyLetters
                      rules={[{ required: true }]}
                    >
                      <CustomTextArea
                        rows={4}
                        placeholder={'Mensaje para el cliente'}
                      />
                    </CustomFormItem>
                  </CustomCol>
                </CustomCol>
              </CustomRow>

              <CustomRow justify={'end'}>
                <CustomCol xs={12} sm={8} md={6} lg={4}>
                  <CustomFormItem>
                    <CustomButton htmlType={'submit'} type={'primary'}>
                      Guardar Borrador
                    </CustomButton>
                  </CustomFormItem>
                </CustomCol>

                <CustomCol xs={7} sm={5} md={4} lg={4} xl={2}>
                  <CustomFormItem>
                    <CustomButton htmlType={'submit'} type={'primary'}>
                      Cancelar
                    </CustomButton>
                  </CustomFormItem>
                </CustomCol>

                <CustomCol xs={5} sm={4} xl={3}>
                  <CustomFormItem>
                    <DarkBlueButton htmlType={'submit'} type={'primary'}>
                      Siguiente
                    </DarkBlueButton>
                  </CustomFormItem>
                </CustomCol>
              </CustomRow>
            </FormContainer>
          </CustomForm>
        </ContentContainer>
      </CustomCol>
    </CustomRow>
  )
}
export default SearchData
