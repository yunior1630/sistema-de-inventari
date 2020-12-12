import React from 'react'
import styled from 'styled-components'
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
  CustomModal,
  CustomRow,
  CustomSelect,
  CustomTitle,
} from '../components'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
}

const FormContainer = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`
const CustomInput1 = styled(CustomInput)`
  border: none;
  border-color: #fff transparent transparent transparent;
  border-bottom: 2px solid blue;
`
const CustomSelect1 = styled(CustomSelect)`
  position: relative;
  border-color: #fff transparent transparent transparent;
  border-bottom: 2px solid blue;
`
const ContentContainer = styled.div`
  text-align: center;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`
const TomandoButton = styled(CustomButton)`
  color: white;
  background-color: #002766;
  border: 50px;
`
const { Option } = Select

const CheckDate = (): React.ReactElement => {
  const validateMessages = {
    // eslint-disable-next-line
    required: '${label} es requerido.',
    types: {
      // eslint-disable-next-line
      email: '${label} no es un email válido.',
      // eslint-disable-next-line
      number: '${label} no es un número válido!',
      // eslint-disable-next-line
      regexp: '${label} formato no válido.',
    },
    pattern: {
      // eslint-disable-next-line
      mismatch: '${label} formato no válido.',
    },
  }

  const [openStateModal, setOpenStateModal] = React.useState(false)

  const handler = () => {
    setOpenStateModal(true)
  }

  return (
    <CustomLayout>
      <CustomContent>
        <CustomRow justify={'center'}>
          <CustomCol xs={24} sm={24} md={20} xl={13}>
            <ContentContainer>
              <CustomForm
                {...formItemLayout}
                validateMessages={validateMessages}
              >
                <FormContainer>
                  <CustomDivider orientation={'left'}>
                    <CustomTitle level={4}>Datos de Cheque</CustomTitle>
                  </CustomDivider>
                  <CustomRow justify={'end'}>
                    <CustomButton type={'primary'}>
                      {' '}
                      Ver Cédula del Cliente{' '}
                    </CustomButton>
                  </CustomRow>
                  <br />

                  <CustomRow justify={'start'}>
                    <CustomCol xs={24} sm={24} span={24}>
                      <CustomFormItem
                        label={'Nombre'}
                        name={'nombre'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Nombre'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} sm={24} span={24}>
                      <CustomFormItem
                        label={'Apellido'}
                        name={'aprllido'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Apellido'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} sm={24} span={24}>
                      <CustomFormItem
                        label={'Identificación'}
                        name={'identificación'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Identificación'} />
                      </CustomFormItem>
                    </CustomCol>
                  </CustomRow>
                  <CustomRow>
                    <CustomCol xs={24} sm={24} md={24} xl={24}>
                      <CustomFormItem
                        label={'Correo'}
                        name={'correo'}
                        rules={[
                          {
                            required: true,
                            type: 'email',
                          },
                        ]}
                        style={{ textAlign: 'start' }}
                      >
                        <CustomCol span={24}>
                          <CustomFormItem noStyle>
                            <CustomInput
                              style={{ width: '80%' }}
                              placeholder={'Email'}
                            />
                          </CustomFormItem>

                          <CustomFormItem noStyle>
                            <CustomButton
                              type={'primary'}
                              onClick={handler}
                              style={{ width: '20%' }}
                            >
                              Ver mas
                            </CustomButton>
                          </CustomFormItem>
                        </CustomCol>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomModal
                      width={1000}
                      visible={openStateModal}
                      closable={true}
                      onCancel={() => {
                        setOpenStateModal(false)
                      }}
                      onOk={() => {
                        setOpenStateModal(false)
                      }}
                    >
                      <CustomRow justify={'start'}>
                        <CustomCol span={6}>
                          {' '}
                          <h4>Tipo</h4>{' '}
                        </CustomCol>
                        <CustomCol span={6}>
                          {' '}
                          <h4>Numero</h4>{' '}
                        </CustomCol>
                        <CustomCol span={6}>
                          {' '}
                          <h4>Extensión</h4>{' '}
                        </CustomCol>
                        <CustomCol span={6}>
                          {' '}
                          <h4>Prioridad</h4>{' '}
                        </CustomCol>

                        <CustomCol span={6}>
                          <CustomSelect1
                            placeholder={'Selector'}
                            style={{
                              width: '90%',
                              position: 'relative',
                              top: '-5px',
                            }}
                            bordered={false}
                          >
                            <Option value='tipo'>A</Option>
                          </CustomSelect1>
                        </CustomCol>
                        <CustomCol span={6}>
                          <CustomInput1 style={{ width: '90%' }}></CustomInput1>
                        </CustomCol>
                        <CustomCol span={6}>
                          <CustomInput1 style={{ width: '90%' }}></CustomInput1>
                        </CustomCol>
                        <CustomCol span={6}>
                          <CustomSelect1
                            placeholder={'Selector'}
                            style={{
                              width: '90%',
                              position: 'relative',
                              top: '-5px',
                            }}
                            bordered={false}
                          >
                            <Option value='numero'>A</Option>
                          </CustomSelect1>
                        </CustomCol>
                      </CustomRow>
                    </CustomModal>
                  </CustomRow>

                  <CustomRow>
                    <CustomCol xs={24} sm={24} md={24} xl={24}>
                      <CustomFormItem
                        label={'Contacto'}
                        name={'contacto'}
                        rules={[{ required: true }]}
                        style={{ textAlign: 'start' }}
                      >
                        <CustomCol span={24}>
                          <CustomFormItem noStyle>
                            <CustomInput
                              style={{ width: '80%' }}
                              placeholder={'Contacto'}
                            />
                          </CustomFormItem>

                          <CustomFormItem noStyle>
                            <CustomButton
                              type={'primary'}
                              onClick={handler}
                              style={{ width: '20%' }}
                            >
                              Ver mas
                            </CustomButton>
                          </CustomFormItem>
                        </CustomCol>
                      </CustomFormItem>
                    </CustomCol>
                  </CustomRow>

                  <CustomRow>
                    <CustomCol xs={24} sm={24} span={24}>
                      <CustomFormItem
                        label={'Vendedor'}
                        name={'vendedor'}
                        rules={[{ required: true }]}
                      >
                        <CustomInput placeholder={'Vendedor'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} sm={24} span={24}>
                      <CustomFormItem
                        label={'Flota'}
                        name={'flota'}
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomInput placeholder={'Flota'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} sm={24} span={24}>
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
                        <CustomInput placeholder={'Extension'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} sm={24} md={24} xl={24}>
                      <CustomFormItem
                        label={'Monto a Devolver'}
                        name={'monto_a_devolver'}
                        rules={[{ required: true }]}
                        style={{ textAlign: 'start' }}
                      >
                        <CustomCol span={24}>
                          <CustomFormItem noStyle>
                            <CustomSelect
                              placeholder={'Selector'}
                              style={{ width: '30%' }}
                            >
                              <Option value='monto'>A</Option>
                            </CustomSelect>
                          </CustomFormItem>

                          <CustomFormItem noStyle>
                            <CustomInput
                              style={{ width: '70%' }}
                              placeholder={'Monto a Devolver'}
                            />
                          </CustomFormItem>
                        </CustomCol>
                      </CustomFormItem>
                    </CustomCol>
                  </CustomRow>

                  <br />

                  <CustomRow>
                    <CustomCol xs={12} sm={12} md={12} xl={12}>
                      <CustomButton htmlType={'submit'} type={'primary'}>
                        {' '}
                        Guardar Borrador{' '}
                      </CustomButton>
                    </CustomCol>

                    <CustomCol xs={6} sm={4} md={4} xl={4}>
                      <TomandoButton htmlType={'submit'} type={'primary'}>
                        {' '}
                        Cancelar
                      </TomandoButton>
                    </CustomCol>

                    <CustomCol xs={4} sm={4} md={4} xl={4}>
                      <TomandoButton htmlType={'submit'} type={'primary'}>
                        {' '}
                        Solicitar{' '}
                      </TomandoButton>
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

export default CheckDate
