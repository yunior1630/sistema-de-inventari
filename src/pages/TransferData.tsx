import React from 'react'

import {
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomLayout,
  CustomModal,
  CustomRow,
  CustomSelect,
  CustomTitle,
  CustomTooltip,
  Option,
} from '../components'

import {
  ContentContainer,
  DarkBlueButton,
  FormContainer,
  validateMessages,
} from '../constants/general'
import { formItemLayout } from '../themes'

const TransferData = (): React.ReactElement => {
  const [openStateModal, setOpenStateModal] = React.useState(false)

  const handler = () => {
    setOpenStateModal(true)
  }

  return (
    <CustomLayout>
      <CustomContent>
        <CustomRow justify={'center'}>
          <CustomCol xs={24} sm={24} md={21} lg={18} xl={15} xxl={12}>
            <ContentContainer>
              <CustomForm
                {...formItemLayout}
                validateMessages={validateMessages}
              >
                <FormContainer>
                  <CustomDivider orientation={'left'}>
                    <CustomTitle level={4}>
                      Datos de la Transferencia
                    </CustomTitle>
                  </CustomDivider>

                  <CustomRow justify={'end'}>
                    <CustomButton type={'primary'}>
                      Ver Cédula del Cliente
                    </CustomButton>
                  </CustomRow>

                  <br />

                  <CustomRow justify={'start'}>
                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Nombre(s)'}
                        name={'nombre'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Nombre(s)'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Apellido(s)'}
                        name={'aprllido'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Apellido(s)'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Identificación'}
                        name={'identificación'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Identificación'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Contacto'}
                        name={'contacto'}
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
                          <CustomCol span={20}>
                            <CustomFormItem noStyle>
                              <CustomInput placeholder={'Contacto'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={4}>
                            <CustomFormItem noStyle>
                              <CustomTooltip title='Haz click para ver más contactos'>
                                <CustomButton
                                  type={'primary'}
                                  onClick={handler}
                                >
                                  Ver Más
                                </CustomButton>
                              </CustomTooltip>
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Correo'}
                        name={'correo'}
                        rules={[{ required: true, type: 'email' }]}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol span={20}>
                            <CustomFormItem noStyle>
                              <CustomInput placeholder={'Correo'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={4}>
                            <CustomFormItem noStyle>
                              <CustomTooltip title='Haz click para ver más correo'>
                                <CustomButton
                                  type={'primary'}
                                  onClick={handler}
                                >
                                  Ver Más
                                </CustomButton>
                              </CustomTooltip>
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Entidad Financiera'}
                        name={'entidad_financiera'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Entidad Financiera'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Números de Cuenta'}
                        name={'numero_de_cuenta'}
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomInput placeholder={'Números de Cuenta'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Tipo de Cuenta'}
                        name={'tipo_de_cuenta'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Tipo de Cuenta'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Moneda de Cuenta'}
                        name={'moneda_de_cuenta'}
                        rules={[{ required: true }]}
                      >
                        <CustomCol span={7}>
                          <CustomSelect placeholder={'Selector'}>
                            <Option value='A'>A</Option>
                          </CustomSelect>
                        </CustomCol>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Vendedor'}
                        name={'vendedor'}
                        onlyLetters
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Vendedor'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Flota'}
                        name={'flota'}
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
                        <CustomInput placeholder={'Flota'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Extensión'}
                        name={'extensión'}
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomInput placeholder={'Extensión'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomFormItem
                        label={'Monto a Devolver'}
                        name={'monto_a_devolver'}
                        rules={[{ required: true }]}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol span={7}>
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
                              <CustomSelect placeholder={'Selector'}>
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={17}>
                            <CustomFormItem noStyle>
                              <CustomInput placeholder={'Monto a Devolver'} />
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomModal
                      visible={openStateModal}
                      closable={true}
                      onCancel={() => {
                        setOpenStateModal(false)
                      }}
                      onOk={() => {
                        setOpenStateModal(false)
                      }}
                    >
                      Hola
                    </CustomModal>
                  </CustomRow>

                  <br />

                  <CustomRow justify={'end'}>
                    <CustomCol
                      xs={24}
                      sm={9}
                      md={9}
                      lg={9}
                      xl={10}
                      xxl={4}
                      style={{ padding: '5px 0px' }}
                    >
                      <CustomButton htmlType={'submit'} type={'primary'}>
                        Guardar Borrador
                      </CustomButton>
                    </CustomCol>

                    <CustomCol xs={8} sm={5} md={4} lg={4} xl={3} xxl={3}>
                      <DarkBlueButton htmlType={'submit'} type={'primary'}>
                        Cancelar
                      </DarkBlueButton>
                    </CustomCol>

                    <CustomCol xs={6} sm={5} md={4} lg={4} xl={3} xxl={3}>
                      <DarkBlueButton htmlType={'submit'} type={'primary'}>
                        Solicitar
                      </DarkBlueButton>
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
export default TransferData
