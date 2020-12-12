import React from 'react'
import { Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons'

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

const { Option } = Select

const Representative = (): React.ReactElement => {
  const [
    identificationTypeRadioState,
    setIdentificationTypeRadioState,
  ] = React.useState(' ')
  const handleStateOpcRadioChange = (e: RadioChangeEvent) => {
    setIdentificationTypeRadioState(e.target.value)
  }
  const handleStateOpc1RadioChange = (e: RadioChangeEvent) => {
    alert(e.target.value)
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
                    <CustomTitle level={4}>Representante</CustomTitle>
                  </CustomDivider>

                  <CustomRow justify={'start'}>
                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Nombre(s)'}
                        name={'nombre'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Nombre'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Sexo'}
                        name={'sexo'}
                        rules={[{ required: true }]}
                      >
                        <CustomRadioGroup>
                          <CustomRadio value={'M'}>Masculino</CustomRadio>
                          <CustomRadio value={'F'}>Femenino</CustomRadio>
                        </CustomRadioGroup>
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
                        label={'Estado Civil'}
                        name={'estado_civil'}
                        rules={[{ required: true }]}
                      >
                        <CustomRadioGroup onChange={handleStateOpc1RadioChange}>
                          <CustomRadio value={'C'}>Casado</CustomRadio>
                          <CustomRadio value={'S'}>Soltero</CustomRadio>
                          <CustomRadio value={'UL'}>Unión Libre</CustomRadio>
                        </CustomRadioGroup>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem label={'Apodo'} name={'apodo'}>
                        <CustomInput placeholder={'Apodo (opcional)'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Dirección'}
                        name={'direccion'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol span={22}>
                            <CustomFormItem noStyle>
                              <CustomInput placeholder={'Dirección'} />
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
                        label={'Nacionalidad'}
                        name={'nacionalidad'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Nacionalidad'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Identificación'}
                        name={'identificacion'}
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
                        <CustomInput
                          placeholder={'Identificación'}
                          disabled={identificationTypeRadioState === ' '}
                        />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={18} sm={24}>
                      <CustomRow justify={'center'}>
                        <CustomFormItem>
                          <CustomRadioGroup
                            onChange={handleStateOpcRadioChange}
                          >
                            <CustomRadio value={'C'}>Cédula</CustomRadio>
                            <CustomRadio value={'P'}>Pasaporte</CustomRadio>
                          </CustomRadioGroup>
                        </CustomFormItem>
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

                    <CustomCol xs={14} sm={12} md={9} xl={7}>
                      <CustomRow justify={'center'}>
                        <CustomFormItem>
                          <CustomButton
                            type='primary'
                            icon={<CloudUploadOutlined />}
                          >
                            Licencia
                          </CustomButton>
                        </CustomFormItem>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'DGII'}
                        name={'dgii'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'DGII'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Posición en la Empresa'}
                        labelCol={{ xl: { span: 24 } }}
                        name={'posición_empresa'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Posición en la Empresa'}>
                          <Option value='A'>A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
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

                    <CustomCol span={24}>
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

                    <CustomCol xs={24} sm={19} md={17} lg={17} xl={18}>
                      <CustomRow justify={'end'}>
                        <img
                          src={`/assets/usuario.jpg`}
                          width='170px'
                          height='150px'
                          alt='Canvas Logo'
                        />
                      </CustomRow>
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
export default Representative
