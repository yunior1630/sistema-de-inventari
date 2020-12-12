import React from 'react'
import { RadioChangeEvent } from 'antd/lib/radio'

import {
  CustomButton,
  CustomCol,
  CustomCollapse,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomPanel,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSearch,
  CustomSelect,
  CustomTextArea,
  CustomTitle,
  Option,
} from '../components'

import GeneralDataPhysicalPerson from '../components/GeneralDataPhysicalPerson'
import RelatedInformation2 from '../components/RelatedInformation2'
import Contact from '../components/Contact'
import LaborData from '../components/LaborData'

import {
  ContentContainer,
  CustomIcons,
  DarkBlueButton,
  FormContainer,
  validateMessages,
} from '../constants/general'

import { formItemLayout } from '../themes'

const AdvancedSearch = (): React.ReactElement => {
  const [deploymentState, setDeploymentState] = React.useState(true)

  const [colorChangeState, setColorChangeState] = React.useState(true)

  const [
    identificationTypeRadioState,
    setIdentificationTypeRadioState,
  ] = React.useState(' ')
  const handleStateOpcRadioChange = (e: RadioChangeEvent) => {
    setIdentificationTypeRadioState(e.target.value)
    alert(e.target.value)
  }

  return (
    <CustomRow justify={'start'}>
      <CustomCol xs={24}>
        <ContentContainer>
          <CustomForm {...formItemLayout} validateMessages={validateMessages}>
            <FormContainer>
              <CustomDivider orientation={'left'}>
                <CustomTitle level={4}>Datos de Búsqueda</CustomTitle>
              </CustomDivider>
              <CustomRow justify={'start'}>
                <CustomCol xs={24} md={16} lg={12} xl={10}>
                  <CustomFormItem
                    label={'Identificación'}
                    labelCol={{ sm: { span: 5 } }}
                    name={'identificacion'}
                    rules={[
                      {
                        required: true,
                        type:
                          identificationTypeRadioState === 'C'
                            ? 'number'
                            : 'string',
                        len:
                          identificationTypeRadioState === 'C' ? 11 : undefined,
                        transform: (value: string) =>
                          Number(value) ? value.length : value,
                      },
                    ]}
                  >
                    <CustomSearch
                      suffix={CustomIcons.AudioOutlined}
                      placeholder='Identificación'
                      onSearch={() => setColorChangeState(false)}
                      enterButton
                      disabled={identificationTypeRadioState === ' '}
                    />
                  </CustomFormItem>
                </CustomCol>

                <CustomCol xs={24} md={8} lg={6} xl={5}>
                  <CustomRow justify={'center'}>
                    <CustomFormItem>
                      <CustomRadioGroup onChange={handleStateOpcRadioChange}>
                        <CustomRadio value={'C'}>Cédula</CustomRadio>
                        <CustomRadio value={'P'}>Pasaporte</CustomRadio>
                      </CustomRadioGroup>
                    </CustomFormItem>
                  </CustomRow>
                </CustomCol>

                <CustomCol
                  xs={24}
                  md={18}
                  lg={6}
                  xl={4}
                  style={{ display: deploymentState ? '' : 'none' }}
                >
                  <CustomRow justify={'center'}>
                    <CustomFormItem>
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        onClick={() => setDeploymentState(!deploymentState)}
                      >
                        Búsqueda avanzada
                      </CustomButton>
                    </CustomFormItem>
                  </CustomRow>
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={24}
                  md={16}
                  lg={12}
                  xl={9}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem
                    label={'Nombre(s)'}
                    labelCol={{ sm: { span: 5 } }}
                    name={'nombre'}
                    rules={[{ required: true }]}
                  >
                    <CustomInput placeholder={'Nombre'} />
                  </CustomFormItem>
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={24}
                  md={16}
                  lg={12}
                  xl={7}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem
                    label={'Apellido(s)'}
                    labelCol={{ sm: { span: 5 } }}
                    name={'apellido'}
                    rules={[{ required: true }]}
                  >
                    <CustomInput placeholder={'Apellido'} />
                  </CustomFormItem>
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={24}
                  md={16}
                  lg={12}
                  xl={7}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem
                    label={'RNC'}
                    labelCol={{ sm: { span: 5 } }}
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
                  xs={24}
                  sm={24}
                  md={16}
                  lg={12}
                  xl={10}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomFormItem
                    label={'Teléfono'}
                    labelCol={{ sm: { span: 5 } }}
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
                            icon={<CustomIcons.PlusOutlined />}
                          />
                        </CustomFormItem>
                      </CustomCol>
                    </CustomRow>
                  </CustomFormItem>
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={24}
                  md={15}
                  lg={10}
                  xl={24}
                  style={{ display: deploymentState ? 'none' : '' }}
                >
                  <CustomRow justify={'center'}>
                    <CustomFormItem>
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        onClick={() => setDeploymentState(!deploymentState)}
                      >
                        Búsqueda simple
                      </CustomButton>
                    </CustomFormItem>
                  </CustomRow>
                </CustomCol>
              </CustomRow>

              <CustomRow justify={'center'} align='top'>
                <CustomCol xs={24} xl={15}>
                  <GeneralDataPhysicalPerson
                    ColorChangeState={colorChangeState}
                  />
                </CustomCol>

                <CustomCol
                  xs={24}
                  sm={24}
                  md={20}
                  lg={16}
                  xl={9}
                  style={{ padding: '0px 5px' }}
                >
                  <br />
                  <br />
                  <CustomCollapse>
                    <CustomPanel header='Información Relacionada' key='1'>
                      <RelatedInformation2 />
                    </CustomPanel>

                    <CustomPanel header='Contactos' key='2'>
                      <Contact />
                    </CustomPanel>

                    <CustomPanel header='Datos Laborales' key='3'>
                      <LaborData />
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
export default AdvancedSearch
