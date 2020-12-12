import React from 'react'
import { Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import { CloudUploadOutlined } from '@ant-design/icons'

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

const { Option } = Select

type GeneralDataPhysicalPersonProps = {
  ColorChangeState?: boolean
}

const GeneralDataPhysicalPerson = (
  props: GeneralDataPhysicalPersonProps
): React.ReactElement => {
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
              >
                <FormContainer>
                  <CustomDivider orientation={'left'}>
                    <CustomTitle level={4}>
                      Datos Generales Persona Fisica
                    </CustomTitle>
                  </CustomDivider>

                  <CustomRow justify={'start'}>
                    <CustomCol xs={24} md={14}>
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
                        <CustomRow justify={'start'}>
                          <CustomCol span={22}>
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
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

                    <CustomCol xs={17} sm={23} md={8}>
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

                    <CustomCol xs={7} sm={1} md={2}>
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

                    <CustomCol xs={24} md={14}>
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

                    <CustomCol xs={24} md={14}>
                      <CustomFormItem
                        label={'DGII'}
                        name={'dgii'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput
                          placeholder={'DGII'}
                          defaultValue={'cambio de color'}
                          style={{
                            color: props.ColorChangeState ? 'red' : 'green',
                          }}
                        />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={14}>
                      <CustomFormItem
                        label={'Primer Nombre'}
                        name={'primer_nombre'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Primer nombre'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={10}>
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

                    <CustomCol xs={24} md={14}>
                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Segundo Nombre'}
                          name={'segundo_nombre'}
                          onlyLetters
                          rules={[{ required: true }]}
                        >
                          <CustomInput placeholder={'Segundo nombre'} />
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Primer Apellido'}
                          name={'primer_apellido'}
                          onlyLetters
                          rules={[{ required: true }]}
                        >
                          <CustomInput placeholder={'Primer Apellido'} />
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={24}>
                        <CustomFormItem
                          label={'Segundo Apellido'}
                          name={'segundo_apellido'}
                          onlyLetters
                          rules={[{ required: true }]}
                        >
                          <CustomInput placeholder={'Segundo Apellido'} />
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol span={24}>
                        <CustomFormItem label={'Apodo'} name={'apodo'}>
                          <CustomRow justify={'start'}>
                            <CustomCol span={22}>
                              <CustomFormItem label={'Apodo'} noStyle>
                                <CustomInput placeholder={'Apodo (opcional)'} />
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
                    </CustomCol>

                    <CustomCol xs={18} md={10}>
                      <CustomRow justify={'end'}>
                        <img
                          src={`/assets/usuario.jpg`}
                          width='170px'
                          height='150px'
                          alt='Canvas Logo'
                        />
                      </CustomRow>

                      <CustomCol xs={23}>
                        <CustomRow justify={'end'}>
                          <CustomFormItem style={{ padding: '10px 0px' }}>
                            <CustomButton
                              type='primary'
                              icon={<CloudUploadOutlined />}
                            >
                              Foto del Cliente
                            </CustomButton>
                          </CustomFormItem>
                        </CustomRow>
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
export default GeneralDataPhysicalPerson
