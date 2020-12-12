import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from '../actions/general'
import {
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDatePicker,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomInputNumber,
  CustomLayout,
  CustomRow,
  CustomSelect,
  CustomTable,
  CustomTitle,
  Option,
} from '../components'

import {
  ContentContainer,
  CustomIcons,
  FormContainer,
  validateMessages,
} from '../constants/general'
import { StoreState } from '../reducers'
import { GeneralCoinsType } from '../reducers/general'
import { formItemLayout } from '../themes'

const columnsCompanyPresenter = [
  {
    title: 'Doc. Identidad',
    dataIndex: 'docIdentidad',
  },
  {
    title: 'Nombre(s)',
    dataIndex: 'nombre',
  },
  {
    title: 'Apellido(s)',
    dataIndex: 'apellido',
  },
]

const LegalPersonRelationship = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { coins } = useSelector((state: StoreState) => state.general)

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch])

  return (
    <CustomLayout>
      <CustomContent>
        <CustomRow justify={'center'}>
          <CustomCol xs={24} lg={20}>
            <ContentContainer>
              <CustomForm
                {...formItemLayout}
                validateMessages={validateMessages}
              >
                <FormContainer>
                  <CustomDivider orientation={'left'}>
                    <CustomTitle level={2}>
                      Registro de Persona Jurídica
                    </CustomTitle>
                  </CustomDivider>
                  <CustomTitle level={3}>
                    Datos Generales Persona Jurídica
                  </CustomTitle>
                  <CustomRow justify={'end'}>
                    <CustomCol xs={24} xl={11}>
                      <CustomCol xs={24} md={20} xl={14}>
                        <CustomFormItem
                          label={'Código'}
                          labelCol={{ sm: 7, xl: 15 }}
                          name={'codigo'}
                        >
                          <CustomInput placeholder={'Código'} disabled />
                        </CustomFormItem>
                      </CustomCol>
                    </CustomCol>
                    <CustomCol xs={12} sm={8} md={4} xl={3}>
                      <CustomFormItem>
                        <CustomButton
                          type="primary"
                          icon={<CustomIcons.CloudUploadOutlined />}
                        >
                          Estatutos
                        </CustomButton>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={12} sm={9} md={7} xl={5}>
                      <CustomFormItem>
                        <CustomButton
                          type="primary"
                          icon={<CustomIcons.CloudUploadOutlined />}
                        >
                          Asamblea Constitutiva
                        </CustomButton>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={12} sm={8} xl={5}>
                      <CustomFormItem>
                        <CustomButton
                          type="primary"
                          icon={<CustomIcons.CloudUploadOutlined />}
                        >
                          Estado de Cuenta
                        </CustomButton>
                      </CustomFormItem>
                    </CustomCol>
                  </CustomRow>
                  <CustomRow justify={'start'}>
                    <CustomCol xs={24} md={20} xl={10}>
                      <CustomCol xs={24} xl={23}>
                        <CustomFormItem
                          label={'RNC'}
                          labelCol={{ sm: 7, xl: 10 }}
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
                              <CustomButton
                                type="primary"
                                icon={<CustomIcons.CloudUploadOutlined />}
                              />
                            </CustomCol>
                          </CustomRow>
                        </CustomFormItem>
                      </CustomCol>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={14}>
                      <CustomFormItem
                        label={'DGII'}
                        name={'dgii'}
                        labelCol={{ sm: 7, xl: 4 }}
                      >
                        <CustomInput placeholder={'DGII'} readOnly />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={24}>
                      <CustomFormItem
                        label={'Nombre(s)'}
                        name={'nombre'}
                        labelCol={{ sm: 7, xl: 4 }}
                        rules={[{ required: true }]}
                        onlyLetters
                      >
                        <CustomInput placeholder={'Nombre'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={14}>
                      <CustomFormItem
                        label={'Sector Económico'}
                        labelCol={{ sm: 7, xl: 7 }}
                        name={'sector_economico'}
                        rules={[{ required: true }]}
                        onlyLetters
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol xs={12} lg={8}>
                            <CustomFormItem noStyle>
                              <CustomInput />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={12} lg={16}>
                            <CustomFormItem noStyle>
                              <CustomInput placeholder={'Sector económico'} />
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={10}>
                      <CustomFormItem
                        label={'Tipo Sociedad'}
                        labelCol={{ sm: 7, xl: 7 }}
                        name={'tipo_sociedad'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Selector'}>
                          <Option value="A">A</Option>
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={12} sm={24} md={20} xl={7}>
                      <CustomFormItem
                        label={'Años Mercado'}
                        labelCol={{ sm: 7, xl: 14 }}
                        name={'anos_mercado'}
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomInputNumber
                          min={0}
                          placeholder={'Años mercado'}
                        />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={12} sm={24} md={20} xl={7}>
                      <CustomFormItem
                        label={'Meses Mercado'}
                        labelCol={{ sm: 7, xl: 10 }}
                        name={'meses_mercado'}
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomInputNumber
                          min={0}
                          max={11}
                          placeholder={'Meses mercado'}
                        />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={14}>
                      <CustomFormItem
                        label={'Servicios Ofrecidos'}
                        name={'servicios_ofrecidos'}
                        labelCol={{ sm: 7, xl: 7 }}
                        rules={[{ required: true }]}
                        onlyLetters
                      >
                        <CustomInput placeholder={'Servicios Ofrecidos'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={10}>
                      <CustomFormItem
                        label={'Venc. Reg. Mercatil'}
                        name={'venc_reg_mercatil'}
                        labelCol={{ sm: 7, xl: 10 }}
                        rules={[{ required: true }]}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol xs={2} sm={3} md={2} xl={3}>
                            <CustomButton
                              type="primary"
                              icon={<CustomIcons.CloudUploadOutlined />}
                            />
                          </CustomCol>

                          <CustomCol xs={22} sm={21} md={22} xl={21}>
                            <CustomDatePicker
                              placeholder={'Venc. Reg. Mercatil'}
                              allowClear
                              format={'DD/MM/YYYY'}
                            />
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={7}>
                      <CustomFormItem
                        label={'Ingreso'}
                        name={'ingreso'}
                        labelCol={{ sm: 7, xl: 14 }}
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                      >
                        <CustomInputNumber placeholder={'Ingreso'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={20} xl={7}>
                      <CustomFormItem
                        label={'Moneda'}
                        labelCol={{ sm: 7, xl: 10 }}
                        name={'moneda'}
                        rules={[{ required: true }]}
                      >
                        <CustomSelect placeholder={'Moneda'} allowClear>
                          {coins.map(
                            (coins: GeneralCoinsType, index: number) => (
                              <Option
                                value={coins.ID_MONEDA}
                                key={`${coins.ID_MONEDA}-${index}`}
                              >
                                {coins.ID_MONEDA}
                              </Option>
                            )
                          )}
                        </CustomSelect>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomRow justify={'end'}>
                        <CustomButton
                          htmlType={'submit'}
                          type="primary"
                          icon={<CustomIcons.PlusOutlined />}
                        >
                          Agregar Representante
                        </CustomButton>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomTable
                        title={() => (
                          <CustomTitle level={3}>
                            Representantes Empresa
                          </CustomTitle>
                        )}
                        bordered
                        scroll={{ y: 'number' }}
                        columns={columnsCompanyPresenter}
                      />
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
export default LegalPersonRelationship
