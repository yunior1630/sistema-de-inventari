import React from 'react'
import { RadioChangeEvent } from 'antd/lib/radio'
import ExternalSalesCommissioner from './ExternalSalesCommissioner'
import {
  CustomButton,
  CustomCheckbox,
  CustomCol,
  CustomCollapse,
  CustomContent,
  CustomDatePicker,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomLayout,
  CustomPanel,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSearch,
  CustomSelect,
  CustomTable,
  CustomText,
  CustomTitle,
  Option,
} from '../components'

import {
  ContentContainer,
  CustomIcons,
  DarkBlueButton,
  FormContainer,
  validateMessages,
} from '../constants/general'
import { formItemLayout } from '../themes'
import OtherCharges from '../components/OtherCharges'
import BankLetter from './BankLetter'

const columnsConfirmedAuthorizations = [
  {
    dataIndex: 'name',
  },
]
const dataConfirmedAuthorizations = [
  {
    key: '1',
    name: 'Seguros por Asegurados Externa',
  },
  {
    key: '2',
    name: 'Exoneración de Gastos de Cierre',
  },
  {
    key: '3',
    name: 'Exoneración de Placa',
  },
]

const columnsVehicule = [
  {
    title: 'Referencia',
    dataIndex: 'referencia',
  },
  {
    title: 'Chasis',
    dataIndex: 'chasis',
  },
  {
    dataIndex: 'monetario',
  },
  {
    title: 'Valor',
    dataIndex: 'valor',
  },
]
const dataVehicule = [
  {
    key: '1',
    referencia: 'ED75869584',
    chasis: 'gdnehdbskED75869584',
    monetario: 'RD$',
    valor: 135000.0,
  },
  {
    key: '2',
    referencia: 'ED75869584',
    chasis: 'gdnehdbskED75869584',
  },
  {
    key: '3',
    referencia: 'ED75869584',
    chasis: 'gdnehdbskED75869584',
  },
]

const ApplicationForFormalization = (): React.ReactElement => {
  const [openStateModal, setOpenStateModal] = React.useState(false)

  const handleModalExternalSalesCommissioner = () => {
    setOpenStateModal(!openStateModal)
  }
  const [activeStateCheckbox, setActiveStateCheckbox] = React.useState(false)

  const openModal = () => {
    setOpenStateModal(!openStateModal)
    setActiveStateCheckbox(true)
  }

  const [
    identificationTypeRadioState,
    setIdentificationTypeRadioState,
  ] = React.useState(' ')
  const handleStateOpcRadioChange = (e: RadioChangeEvent) => {
    setIdentificationTypeRadioState(e.target.value)
  }

  const vehicleStateOpcRadioChange = (e: RadioChangeEvent) => {
    alert(e.target.value)
  }

  const rentStateOpcRadioChange = (e: RadioChangeEvent) => {
    alert(e.target.value)
  }

  const [paymentCondition, setpaymentCondition] = React.useState('6AC')

  const paymentConditionStateOpcRadioChange = (e: RadioChangeEvent) => {
    e.target.value === 'C'
      ? setpaymentCondition('6C')
      : setpaymentCondition('6AC')
  }

  const [
    vehiclesReceivedActiveCollapse,
    setVehiclesReceivedActiveCollapse,
  ] = React.useState('')
  const [
    debtVehiclesReceiveActiveCollapse,
    setDebtVehiclesReceiveActiveCollapse,
  ] = React.useState('')
  const [
    bankLetterActiveCollapse,
    setBankLetterActiveCollapse,
  ] = React.useState('')
  const [
    additionalActiveCollapse,
    setAdditionalActiveCollapse,
  ] = React.useState('')
  const [
    closingCostsActiveCollapse,
    setClosingCostsActiveCollapse,
  ] = React.useState('')
  const [insuranceActiveCollapse, setInsuranceActiveCollapse] = React.useState(
    ''
  )
  const [
    protectionPlansForYourVehiclesActiveCollapse,
    setProtectionPlansForYourVehiclesActiveCollapse,
  ] = React.useState('')
  const [rentPlanActiveCollapse, setRentPlanActiveCollapse] = React.useState('')
  const [
    externalBrokerBusinessActiveCollapse,
    setExternalBrokerBusinessActiveCollapse,
  ] = React.useState('')

  const panelStateOpcRadioChange = (e: RadioChangeEvent) => {
    switch (e.target.value) {
      case 'S9':
        setVehiclesReceivedActiveCollapse('9')
        break
      case 'N9':
        setVehiclesReceivedActiveCollapse('')
        break
      case 'S10':
        setDebtVehiclesReceiveActiveCollapse('10')
        break
      case 'N10':
        setDebtVehiclesReceiveActiveCollapse('')
        break
      case 'S12':
        setBankLetterActiveCollapse('12')
        break
      case 'N12':
        setBankLetterActiveCollapse('')
        break
      case 'S13':
        setAdditionalActiveCollapse('13')
        break
      case 'N13':
        setAdditionalActiveCollapse('')
        break
      case 'S14':
        setClosingCostsActiveCollapse('14')
        break
      case 'N14':
        setClosingCostsActiveCollapse('')
        break
      case 'S15':
        setInsuranceActiveCollapse('15')
        break
      case 'N15':
        setInsuranceActiveCollapse('')
        break
      case 'S16':
        setProtectionPlansForYourVehiclesActiveCollapse('16')
        break
      case 'N16':
        setProtectionPlansForYourVehiclesActiveCollapse('')
        break
      case 'S17':
        setRentPlanActiveCollapse('17')
        break
      case 'N17':
        setRentPlanActiveCollapse('')
        break
      case 'S20':
        setExternalBrokerBusinessActiveCollapse('20')
        break
      case 'N20':
        setExternalBrokerBusinessActiveCollapse('')
        break
      default:
        return false
    }
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
                    <CustomTitle level={4}>Datos de Búsqueda</CustomTitle>
                  </CustomDivider>
                  <br />
                  <CustomRow justify={'start'}>
                    <CustomCol xs={24} md={12} xl={7}>
                      <CustomFormItem
                        label={'Identificación'}
                        labelCol={{ sm: 5, md: 7 }}
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
                        <CustomSearch
                          suffix={CustomIcons.AudioOutlined}
                          placeholder='Identificación'
                          disabled={identificationTypeRadioState === ' '}
                          enterButton
                        />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={8} xl={4}>
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

                    <CustomCol xs={24} md={12} xl={6}>
                      <CustomFormItem
                        label={'Nombre(s)'}
                        labelCol={{ sm: 5, md: 7, xl: 6 }}
                        name={'nombre'}
                        rules={[{ required: true }]}
                        onlyLetters
                      >
                        <CustomInput placeholder={'Nombre'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={12} xl={6}>
                      <CustomFormItem
                        label={'Apellido(s)'}
                        labelCol={{ sm: 5, md: 7, xl: 6 }}
                        name={'apellido'}
                        rules={[{ required: true }]}
                        onlyLetters
                      >
                        <CustomInput placeholder={'Apellido'} />
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={12} xl={7}>
                      <CustomFormItem
                        label={'RNC'}
                        labelCol={{ sm: 5, md: 7 }}
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

                    <CustomCol xs={24} md={12} xl={8}>
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
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
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
                            <CustomButton
                              type='primary'
                              shape='circle'
                              icon={<CustomIcons.PlusOutlined />}
                            />
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} md={10} xl={4}>
                      <CustomRow justify={'center'}>
                        <CustomFormItem>
                          <CustomButton
                            htmlType={'submit'}
                            type={'primary'}
                            shape='round'
                          >
                            Búsqueda simple
                          </CustomButton>
                        </CustomFormItem>
                      </CustomRow>
                    </CustomCol>

                    <CustomCol span={24}>
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        shape='round'
                      >
                        Clientes Pendientes de Formalizar
                      </CustomButton>
                    </CustomCol>
                  </CustomRow>
                  <br />
                  <CustomRow
                    justify={'end'}
                    style={{
                      border: '2px solid #002766',
                      borderRadius: '100px',
                      padding: '5px 0px',
                    }}
                  >
                    <CustomCol xs={20} sm={10} lg={6} xl={7}>
                      {'Sucursal: '}
                      <CustomText>Vegamovil Puta Cana</CustomText>
                    </CustomCol>

                    <CustomCol xs={20} sm={12} lg={7}>
                      {'Vendedor: '}
                      <CustomText>Ramon Lajara</CustomText>
                    </CustomCol>

                    <CustomCol xs={20} sm={10} lg={5} xl={4}>
                      {'Número: '}
                      <CustomText>0003</CustomText>
                    </CustomCol>

                    <CustomCol xs={20} sm={12} lg={5}>
                      <CustomText>13/03/2020 09:47:44 A.M.</CustomText>
                    </CustomCol>
                  </CustomRow>

                  <br />
                  <CustomRow justify={'center'} align='top'>
                    <CustomCol xs={24} md={12}>
                      <CustomCollapse>
                        <CustomPanel
                          header='Datos Generales del Cliente'
                          key='1'
                        >
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24}>
                              <CustomFormItem
                                label={'Cliente'}
                                labelCol={{ sm: 4, md: 8, xl: 4 }}
                              >
                                <CustomText>Juan Perez</CustomText>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={13} md={24} xl={12}>
                              <CustomFormItem label={'Identificación'}>
                                <CustomText>047-0552529-6</CustomText>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={11} md={24} xl={8}>
                              <CustomRow justify={'center'}>
                                <CustomFormItem>
                                  <CustomRadioGroup
                                    onChange={handleStateOpcRadioChange}
                                  >
                                    <CustomRadio value={'C'}>
                                      Cédula
                                    </CustomRadio>
                                    <CustomRadio value={'P'}>
                                      Pasaporte
                                    </CustomRadio>
                                  </CustomRadioGroup>
                                </CustomFormItem>
                              </CustomRow>
                            </CustomCol>

                            <CustomCol xs={24} xl={24}>
                              <CustomFormItem
                                label={'RNC'}
                                labelCol={{ sm: 4, md: 8, xl: 4 }}
                              >
                                <CustomText>58469257</CustomText>
                              </CustomFormItem>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel header='Aprobación AFC' key='2'>
                          <CustomDivider orientation={'left'}>
                            <CustomTitle level={4}>Cumplimiento</CustomTitle>
                          </CustomDivider>

                          <CustomCol xs={24} sm={18} md={24} lg={20}>
                            <CustomFormItem
                              label={'Vigencia'}
                              labelCol={{ sm: 4, xl: 5 }}
                              name={'vigencia'}
                              rules={[{ required: true }]}
                            >
                              <CustomRow justify={'start'}>
                                <CustomCol
                                  xs={12}
                                  lg={10}
                                  style={{ padding: '0px 5px' }}
                                >
                                  <CustomFormItem noStyle>
                                    <CustomInput placeholder={'Vigencia'} />
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol xs={12} lg={10}>
                                  <CustomFormItem
                                    label={'Dias'}
                                    noStyle
                                    name={'dias'}
                                    rules={[
                                      {
                                        required: true,
                                        type: 'number',
                                        transform: (value: string) =>
                                          Number(value) ? value.length : value,
                                      },
                                    ]}
                                  >
                                    <CustomInput placeholder={'Dias'} />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={20} md={24} lg={20}>
                            <CustomFormItem
                              label={'Estado'}
                              labelCol={{ sm: 4, xl: 5 }}
                            >
                              <CustomSelect placeholder={'Estado'}>
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>
                        </CustomPanel>

                        <CustomPanel header='Crédito Total Aprobado' key='3'>
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24} sm={20} md={24}>
                              <CustomFormItem
                                label={'Crédito Total Aprobado'}
                                labelCol={{ sm: 24, md: 24, lg: 9, xl: 7 }}
                                name={'credito_total_aprobado'}
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
                                  <CustomCol xs={12} lg={8}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect
                                        placeholder={'Selector'}
                                        style={{ padding: '0px 5px' }}
                                      >
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol xs={12} lg={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Crédito total aprobado'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24}>
                              <CustomFormItem
                                label={'Monto Utilizado'}
                                labelCol={{ sm: 24, md: 24, lg: 9, xl: 7 }}
                                name={'monto_utilizado'}
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
                                  <CustomCol xs={12} lg={8}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect
                                        placeholder={'Selector'}
                                        style={{ padding: '0px 5px' }}
                                      >
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol xs={12} lg={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Monto utilizado'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24}>
                              <CustomFormItem
                                label={'Monto Disponible'}
                                labelCol={{ sm: 24, md: 24, lg: 9, xl: 7 }}
                                name={'monto_disponicle'}
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
                                  <CustomCol xs={12} lg={8}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect
                                        placeholder={'Selector'}
                                        style={{ padding: '0px 5px' }}
                                      >
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol xs={12} lg={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Monto disponible'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24}>
                              <CustomDivider orientation={'left'} />
                              <CustomFormItem
                                label={'Aprobado por'}
                                labelCol={{ sm: 24, md: 24, lg: 9, xl: 7 }}
                                name={'aprobado_por'}
                                onlyLetters
                              >
                                <CustomInput />
                              </CustomFormItem>
                              <CustomDivider orientation={'left'} />
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>
                      </CustomCollapse>

                      <CustomRow justify={'start'} align='top'>
                        <CustomCol span={12}>
                          <CustomCollapse>
                            <CustomPanel header='Condición de Pago' key='4'>
                              <CustomRow justify={'center'}>
                                <CustomRadioGroup
                                  onChange={paymentConditionStateOpcRadioChange}
                                >
                                  <CustomRadio value={'C'}>Crédito</CustomRadio>
                                  <CustomRadio value={'AC'}>
                                    Al Contado
                                  </CustomRadio>
                                </CustomRadioGroup>
                              </CustomRow>
                            </CustomPanel>
                          </CustomCollapse>
                        </CustomCol>

                        <CustomCol span={12}>
                          <CustomCollapse>
                            <CustomPanel header='Moneda de Formalizar' key='5'>
                              <CustomRow justify={'center'}>
                                <CustomRadioGroup>
                                  <CustomRadio value={'RD'}>RD$</CustomRadio>
                                  <CustomRadio value={'US'}>US$</CustomRadio>
                                  <CustomRadio value={'EU'}>EU$</CustomRadio>
                                </CustomRadioGroup>
                              </CustomRow>
                            </CustomPanel>
                          </CustomCollapse>
                        </CustomCol>
                      </CustomRow>

                      <CustomCollapse activeKey={[paymentCondition]}>
                        <CustomPanel
                          header='Fondos'
                          key='6C'
                          disabled={paymentCondition === '6AC'}
                        >
                          <CustomRow justify={'start'}>
                            <CustomRadioGroup>
                              <CustomCol span={24}>
                                <CustomRadio value={'I'}>Interno</CustomRadio>
                                <CustomRadio value={'AI'}>
                                  Acuerdo Interinstitucional
                                </CustomRadio>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomRadio value={'E'}>Externo</CustomRadio>
                                <CustomRadio value={'AT'}>
                                  Acuerdo Tripartito
                                </CustomRadio>
                              </CustomCol>
                            </CustomRadioGroup>
                          </CustomRow>
                        </CustomPanel>
                      </CustomCollapse>

                      <CustomCollapse>
                        <CustomPanel
                          header='Autorizaciones Confirmadas'
                          key='7'
                        >
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24} lg={20}>
                              <CustomTable
                                scroll={{ y: 'number' }}
                                pagination={false}
                                showHeader={false}
                                rowSelection={{
                                  type: 'checkbox',
                                }}
                                columns={columnsConfirmedAuthorizations}
                                dataSource={dataConfirmedAuthorizations}
                              />
                            </CustomCol>
                            <CustomCol xs={24} lg={4}>
                              <CustomRow justify={'end'}>
                                <CustomCol
                                  xs={12}
                                  lg={23}
                                  xl={20}
                                  style={{ padding: '5px 0px' }}
                                >
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Eliminar
                                  </CustomButton>
                                </CustomCol>

                                <CustomCol xs={12} lg={23} xl={20}>
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Solicitar
                                  </CustomButton>
                                </CustomCol>
                              </CustomRow>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel header='Vehículos a Formalizar' key='8'>
                          <CustomRow justify={'end'}>
                            <CustomCol span={4}>
                              <CustomButton
                                type='primary'
                                shape='circle'
                                icon={<CustomIcons.FullscreenOutlined />}
                              />
                            </CustomCol>

                            <CustomCol xs={12} sm={8} md={12} lg={8}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Ver Especificaciones
                              </CustomButton>
                            </CustomCol>

                            <CustomCol span={24}>
                              <CustomTable
                                scroll={{ y: 'number', x: true }}
                                pagination={false}
                                rowSelection={{
                                  type: 'checkbox',
                                }}
                                columns={columnsVehicule}
                                dataSource={dataVehicule}
                              />
                              <br />
                            </CustomCol>

                            <CustomCol xs={24} sm={12}>
                              <CustomFormItem>
                                <CustomRow justify={'start'}>
                                  <CustomCol span={8}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect
                                        placeholder={'Selector'}
                                        style={{ padding: '0px 5px' }}
                                      >
                                        <Option value='RD'>RD$</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={16}>
                                    <CustomFormItem
                                      noStyle
                                      label={'Total Vehículos a Formalizar'}
                                      name={'total_vehículo_formalizar'}
                                      rules={[
                                        {
                                          required: true,
                                          type: 'number',
                                          transform: (value: string) =>
                                            Number(value)
                                              ? value.length
                                              : value,
                                        },
                                      ]}
                                    >
                                      <CustomInput />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>
                          </CustomRow>

                          <CustomRow justify={'start'}>
                            <CustomCol xs={8} sm={5} md={8} lg={6} xl={5}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Eliminar
                              </CustomButton>
                            </CustomCol>

                            <CustomCol xs={8} sm={5} md={8} lg={6} xl={5}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Agregar
                              </CustomButton>
                            </CustomCol>

                            <CustomCol xs={8} sm={5} md={8} lg={6} xl={5}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Cambiar
                              </CustomButton>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>
                      </CustomCollapse>

                      <CustomCollapse
                        activeKey={[
                          vehiclesReceivedActiveCollapse,
                          debtVehiclesReceiveActiveCollapse,
                        ]}
                      >
                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Vehículos Recibido'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S9'}>Si</CustomRadio>
                                <CustomRadio value={'N9'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='9'
                        >
                          <CustomRow justify={'end'}>
                            <CustomCol xs={8} sm={5} md={4} xl={6}>
                              <CustomFormItem>
                                <CustomButton
                                  type='primary'
                                  shape='circle'
                                  icon={<CustomIcons.FullscreenOutlined />}
                                />
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={10} sm={12} md={14} lg={12} xl={10}>
                              <CustomFormItem
                                label={'Tasa de Cambio'}
                                labelCol={{ xl: 12 }}
                              >
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                >
                                  59.68
                                </CustomButton>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={6} sm={5} md={6} lg={5}>
                              <CustomFormItem>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                >
                                  Agregar
                                </CustomButton>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24}>
                              <CustomTable
                                scroll={{ y: 'number', x: true }}
                                pagination={false}
                                rowSelection={{
                                  type: 'checkbox',
                                }}
                                columns={columnsVehicule}
                                dataSource={dataVehicule}
                              />
                              <br />
                            </CustomCol>

                            <CustomCol xs={24} sm={16} md={24}>
                              <CustomFormItem
                                label={'Total en Vehículo Recibido'}
                                labelCol={{ xl: 10 }}
                                name={'total_vehiculo_recibido'}
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
                                  <CustomCol
                                    span={8}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomSelect
                                        placeholder={'Selector'}
                                        style={{ padding: '0px 5px' }}
                                      >
                                        <Option value='RD'>RD$</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>
                          </CustomRow>

                          <CustomRow justify={'start'}>
                            <CustomCol
                              xs={12}
                              sm={8}
                              md={12}
                              lg={9}
                              xl={7}
                              style={{ padding: '5px 0px' }}
                            >
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Detalles de Deuda
                              </CustomButton>
                            </CustomCol>

                            <CustomCol
                              xs={12}
                              sm={8}
                              md={12}
                              lg={8}
                              xl={9}
                              style={{ padding: '5px 0px' }}
                            >
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Ver Especificaciones
                              </CustomButton>
                            </CustomCol>

                            <CustomCol xs={12} sm={9} md={12} lg={9} xl={4}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Eliminar
                              </CustomButton>
                            </CustomCol>

                            <CustomCol xs={12} sm={4} md={12} lg={6} xl={4}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Cambiar
                              </CustomButton>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Deuda Vehículos Recibir'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S10'}>Si</CustomRadio>
                                <CustomRadio value={'N10'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='10'
                        >
                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Monto Adeudado'}
                              labelCol={{ sm: 24, md: 24, lg: 24, xl: 11 }}
                              name={'monto_adeudado'}
                              rules={[
                                {
                                  required: true,
                                  type: 'number',
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomRow justify={'end'}>
                                <CustomCol span={8}>
                                  <CustomFormItem noStyle>
                                    <CustomSelect
                                      placeholder={'Selector'}
                                      style={{ padding: '0px 5px' }}
                                    >
                                      <Option value='A'>A</Option>
                                    </CustomSelect>
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={14}>
                                  <CustomFormItem noStyle>
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={2}>
                                  <CustomFormItem noStyle>
                                    <CustomButton
                                      type='primary'
                                      icon={<CustomIcons.CloudUploadOutlined />}
                                    />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Valor Aplicar a Vehículo a Formalizar'}
                              labelCol={{ sm: 24, md: 24, lg: 24, xl: 11 }}
                              name={'valor_aplicar_vehiculo_formalizar'}
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
                                <CustomCol span={8}>
                                  <CustomFormItem noStyle>
                                    <CustomSelect
                                      placeholder={'Selector'}
                                      style={{ padding: '0px 5px' }}
                                    >
                                      <Option value='A'>A</Option>
                                    </CustomSelect>
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={16}>
                                  <CustomFormItem noStyle>
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Total Descontado Vehículo Recibido'}
                              labelCol={{ sm: 24, md: 24, lg: 24, xl: 11 }}
                              name={'total_descontado_vehiculo_recibido'}
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
                                <CustomCol span={8}>
                                  <CustomFormItem noStyle>
                                    <CustomSelect
                                      placeholder={'Selector'}
                                      style={{ padding: '0px 5px' }}
                                    >
                                      <Option value='A'>A</Option>
                                    </CustomSelect>
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={16}>
                                  <CustomFormItem noStyle>
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Crédito a Favor del Cliente'}
                              labelCol={{ sm: 24, md: 24, lg: 24, xl: 11 }}
                              name={'credito_a_favor_del_cliente'}
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
                                <CustomCol span={8}>
                                  <CustomFormItem noStyle>
                                    <CustomSelect
                                      placeholder={'Selector'}
                                      style={{ padding: '0px 5px' }}
                                    >
                                      <Option value='A'>A</Option>
                                    </CustomSelect>
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={16}>
                                  <CustomFormItem noStyle>
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>
                        </CustomPanel>
                      </CustomCollapse>

                      <CustomCollapse>
                        <CustomPanel header='Detalles de Deuda' key='11'>
                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Institución'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'institución'}
                              rules={[{ required: true }]}
                            >
                              <CustomSelect placeholder={'Institución'}>
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Sucursal'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'sucursal'}
                              rules={[{ required: true }]}
                            >
                              <CustomSelect placeholder={'Sucursal'}>
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Ciudad'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'ciudad'}
                              rules={[{ required: true }]}
                            >
                              <CustomSelect placeholder={'Ciudad'}>
                                <Option value='A'>A</Option>
                              </CustomSelect>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'No. Préstamo'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'no_prestamo'}
                              rules={[
                                {
                                  required: true,
                                  type: 'number',
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomInput placeholder={'No. Préstamo'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Monto de Saldo'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'monto_de_saldo'}
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
                                <CustomCol span={8}>
                                  <CustomFormItem noStyle>
                                    <CustomSelect
                                      placeholder={'Selector'}
                                      style={{ padding: '0px 5px 0px 0px' }}
                                    >
                                      <Option value='RD'>RD$</Option>
                                    </CustomSelect>
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={16}>
                                  <CustomFormItem noStyle>
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Fecha de Corte de saldo'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'fecha_corte_saldo'}
                              rules={[{ required: true }]}
                            >
                              <CustomDatePicker
                                placeholder={'Fecha de Corte de saldo'}
                                allowClear
                                format={'DD/MM/YYYY'}
                                style={{ width: '100%' }}
                              />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Gerente'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'gerente'}
                              rules={[{ required: true }]}
                              onlyLetters
                            >
                              <CustomInput placeholder={'Gerente'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Contacto'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'contacto'}
                              rules={[
                                {
                                  required: true,
                                  type: 'number',
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomInput placeholder={'Contacto'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Correo'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
                              name={'correo'}
                              rules={[{ required: true, type: 'email' }]}
                            >
                              <CustomInput placeholder={'Correo'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} sm={18} md={24}>
                            <CustomFormItem
                              label={'Teléfono'}
                              labelCol={{ sm: 24, md: 24, lg: 9, xl: 8 }}
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
                                  <CustomFormItem
                                    noStyle
                                    rules={[{ required: true }]}
                                  >
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
                                  <CustomButton
                                    type='primary'
                                    shape='circle'
                                    icon={<CustomIcons.PlusOutlined />}
                                  />
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={23} sm={17} md={23}>
                            <CustomRow justify={'end'}>
                              <CustomButton
                                htmlType={'submit'}
                                type={'primary'}
                                shape='round'
                              >
                                Ver Pruebas de Saldo
                              </CustomButton>
                            </CustomRow>
                          </CustomCol>
                        </CustomPanel>
                      </CustomCollapse>
                    </CustomCol>

                    <CustomCol xs={24} md={12}>
                      <CustomCollapse
                        activeKey={[
                          bankLetterActiveCollapse,
                          additionalActiveCollapse,
                          closingCostsActiveCollapse,
                          insuranceActiveCollapse,
                          protectionPlansForYourVehiclesActiveCollapse,
                          rentPlanActiveCollapse,
                        ]}
                      >
                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Carta de Banco'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S12'}>Si</CustomRadio>
                                <CustomRadio value={'N12'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='12'
                        >
                          {bankLetterActiveCollapse === '12' && <BankLetter />}
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24} sm={16} md={24} lg={16}>
                              <CustomFormItem
                                label={'Total'}
                                labelCol={{ md: 4 }}
                                name={'total_de_carta_de_banco'}
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
                                  <CustomCol
                                    span={8}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='RD'>RD$</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={14} sm={6} md={16} lg={6}>
                              <CustomRow justify={'end'}>
                                <CustomFormItem>
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Ver Detalles
                                  </CustomButton>
                                </CustomFormItem>
                              </CustomRow>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Adicionales'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S13'}>Si</CustomRadio>
                                <CustomRadio value={'N13'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='13'
                        >
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24} sm={16} md={24} lg={16}>
                              <CustomFormItem
                                label={'Total'}
                                labelCol={{ md: 4 }}
                                name={'total_de_adicionales'}
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
                                  <CustomCol
                                    span={8}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='RD'>RD$</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={14} sm={6} md={16} lg={6}>
                              <CustomRow justify={'end'}>
                                <CustomFormItem>
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Ver Detalles
                                  </CustomButton>
                                </CustomFormItem>
                              </CustomRow>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Gastos de Cierre'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S14'}>Si</CustomRadio>
                                <CustomRadio value={'N14'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='14'
                        >
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24}>
                              <CustomRadioGroup>
                                <CustomRadio value={'A'}>Acuerdo</CustomRadio>
                                <CustomRadio value={'P'}>Pago</CustomRadio>
                              </CustomRadioGroup>
                            </CustomCol>

                            <CustomCol xs={24} sm={16} md={24} lg={16}>
                              <br />
                              <CustomFormItem
                                label={'Total'}
                                labelCol={{ md: 4 }}
                                name={'total_de_gastos_de_cierres'}
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
                                  <CustomCol
                                    span={8}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='RD'>RD$</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={16}>
                                    <CustomFormItem noStyle>
                                      <CustomInput />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={14} sm={6} md={16} lg={6}>
                              <br />
                              <CustomRow justify={'end'}>
                                <CustomFormItem>
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Ver Detalles
                                  </CustomButton>
                                </CustomFormItem>
                              </CustomRow>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Seguros'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S15'}>Si</CustomRadio>
                                <CustomRadio value={'N15'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='15'
                        >
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24} xl={8}>
                              <CustomCol span={24}>
                                <CustomTitle level={4}>Vehículo</CustomTitle>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomCheckbox>Primer Anual</CustomCheckbox>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomFormItem>
                                  <CustomRow justify={'start'}>
                                    <CustomCol span={8}>
                                      <CustomFormItem noStyle>
                                        <CustomSelect
                                          placeholder={'Selector'}
                                          style={{ padding: '0px 5px' }}
                                        >
                                          <Option value='RD'>RD$</Option>
                                        </CustomSelect>
                                      </CustomFormItem>
                                    </CustomCol>

                                    <CustomCol span={16}>
                                      <CustomFormItem
                                        noStyle
                                        label={'Primer Anual'}
                                        name={'primer_anual'}
                                        rules={[
                                          {
                                            required: true,
                                            type: 'number',
                                            transform: (value: string) =>
                                              Number(value)
                                                ? value.length
                                                : value,
                                          },
                                        ]}
                                      >
                                        <CustomInput />
                                      </CustomFormItem>
                                    </CustomCol>
                                  </CustomRow>
                                </CustomFormItem>
                              </CustomCol>

                              <CustomCol span={8}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                >
                                  Ver Detalles
                                </CustomButton>
                              </CustomCol>
                            </CustomCol>

                            <CustomCol xs={24} xl={8}>
                              <CustomCol span={24}>
                                <CustomTitle level={4}>Vida Deudor</CustomTitle>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomCheckbox>Cuota Mensual</CustomCheckbox>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomFormItem>
                                  <CustomRow justify={'start'}>
                                    <CustomCol span={8}>
                                      <CustomFormItem noStyle>
                                        <CustomSelect
                                          placeholder={'Selector'}
                                          style={{ padding: '0px 5px' }}
                                        >
                                          <Option value='RD'>RD$</Option>
                                        </CustomSelect>
                                      </CustomFormItem>
                                    </CustomCol>

                                    <CustomCol span={16}>
                                      <CustomFormItem
                                        noStyle
                                        label={'Cuota Mensual'}
                                        name={'cuota_mensual_de_vida_deudor'}
                                        rules={[
                                          {
                                            required: true,
                                            type: 'number',
                                            transform: (value: string) =>
                                              Number(value)
                                                ? value.length
                                                : value,
                                          },
                                        ]}
                                      >
                                        <CustomInput />
                                      </CustomFormItem>
                                    </CustomCol>
                                  </CustomRow>
                                </CustomFormItem>
                              </CustomCol>

                              <CustomCol span={8}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                >
                                  Ver Detalles
                                </CustomButton>
                              </CustomCol>
                            </CustomCol>

                            <CustomCol xs={24} xl={8}>
                              <CustomCol span={24}>
                                <CustomTitle level={4}>Desempleo</CustomTitle>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomCheckbox>Cuota Mensual</CustomCheckbox>
                              </CustomCol>

                              <CustomCol span={24}>
                                <CustomFormItem>
                                  <CustomRow justify={'start'}>
                                    <CustomCol span={8}>
                                      <CustomFormItem noStyle>
                                        <CustomSelect
                                          placeholder={'Selector'}
                                          style={{ padding: '0px 5px' }}
                                        >
                                          <Option value='RD'>RD$</Option>
                                        </CustomSelect>
                                      </CustomFormItem>
                                    </CustomCol>

                                    <CustomCol span={16}>
                                      <CustomFormItem
                                        noStyle
                                        label={'Cuota Mensual'}
                                        name={'cuota_mensual_de_desempleo'}
                                        rules={[
                                          {
                                            required: true,
                                            type: 'number',
                                            transform: (value: string) =>
                                              Number(value)
                                                ? value.length
                                                : value,
                                          },
                                        ]}
                                      >
                                        <CustomInput />
                                      </CustomFormItem>
                                    </CustomCol>
                                  </CustomRow>
                                </CustomFormItem>
                              </CustomCol>

                              <CustomCol span={8}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                >
                                  Ver Detalles
                                </CustomButton>
                              </CustomCol>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Planes de Protección de su Vehículos'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S16'}>Si</CustomRadio>
                                <CustomRadio value={'N16'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='16'
                        >
                          <CustomRadioGroup
                            onChange={vehicleStateOpcRadioChange}
                          >
                            <CustomRow justify={'start'}>
                              <CustomCol
                                xs={24}
                                sm={12}
                                md={24}
                                lg={12}
                                xl={10}
                              >
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                  style={{ borderColor: 'white' }}
                                >
                                  Cubierta Tren de Fuerza
                                  <CustomRadio
                                    value={'CTF'}
                                    style={{ padding: '0px 4px' }}
                                  ></CustomRadio>
                                </CustomButton>
                              </CustomCol>

                              <CustomCol xs={24} sm={10} md={24} lg={10} xl={7}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                  style={{ borderColor: 'white' }}
                                >
                                  Cubierta Oro
                                  <CustomRadio
                                    value={'CO'}
                                    style={{ padding: '0px 4px' }}
                                  ></CustomRadio>
                                </CustomButton>
                              </CustomCol>

                              <CustomCol xs={24} sm={7}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                  style={{ borderColor: 'white' }}
                                >
                                  Cubierta Platinium
                                  <CustomRadio
                                    value={'CP'}
                                    style={{ padding: '0px 4px' }}
                                  ></CustomRadio>
                                </CustomButton>
                              </CustomCol>
                            </CustomRow>
                          </CustomRadioGroup>

                          <CustomCol xs={24} xl={18}>
                            <br />
                            <CustomFormItem
                              label={'Costo 6 Meses'}
                              name={'costo_6_meses'}
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
                                    <CustomInput
                                      placeholder={'Costo 6 meses'}
                                    />
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={2}>
                                  <CustomFormItem noStyle>
                                    <CustomButton
                                      type='primary'
                                      icon={<CustomIcons.CloudUploadOutlined />}
                                    />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol xs={24} xl={18}>
                            <CustomFormItem
                              label={'Costo un Años'}
                              name={'costo_un_años'}
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
                                    <CustomInput
                                      placeholder={'Costo un años'}
                                    />
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={2}>
                                  <CustomFormItem noStyle>
                                    <CustomButton
                                      type='primary'
                                      icon={<CustomIcons.CloudUploadOutlined />}
                                    />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>
                        </CustomPanel>

                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Plan de Renta'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S17'}>Si</CustomRadio>
                                <CustomRadio value={'N17'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='17'
                        >
                          <CustomRadioGroup onChange={rentStateOpcRadioChange}>
                            <CustomRow justify={'start'}>
                              <CustomCol xs={24} sm={7} md={12} xl={9}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                  style={{ borderColor: 'white' }}
                                >
                                  Plan Renta
                                  <CustomRadio
                                    value={'CTF'}
                                    style={{ padding: '0px 4px' }}
                                  ></CustomRadio>
                                </CustomButton>
                              </CustomCol>

                              <CustomCol xs={24} sm={8} md={12} lg={8} xl={10}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                  style={{ borderColor: 'white' }}
                                >
                                  Cubierta Oro
                                  <CustomRadio
                                    value={'CO'}
                                    style={{ padding: '0px 4px' }}
                                  ></CustomRadio>
                                </CustomButton>
                              </CustomCol>

                              <CustomCol xs={24} sm={8} md={5}>
                                <CustomButton
                                  htmlType={'submit'}
                                  type={'primary'}
                                  shape='round'
                                  style={{ borderColor: 'white' }}
                                >
                                  Cubierta Platinium
                                  <CustomRadio
                                    value={'CP'}
                                    style={{ padding: '0px 4px' }}
                                  ></CustomRadio>
                                </CustomButton>
                              </CustomCol>
                            </CustomRow>
                          </CustomRadioGroup>

                          <CustomCol xs={24} xl={18}>
                            <br />
                            <CustomFormItem
                              label={'Costo un Anual'}
                              name={'costo_un_anual'}
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
                                    <CustomInput
                                      placeholder={'Costo un anual'}
                                    />
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol span={2}>
                                  <CustomFormItem noStyle>
                                    <CustomButton
                                      type='primary'
                                      icon={<CustomIcons.CloudUploadOutlined />}
                                    />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>
                        </CustomPanel>
                      </CustomCollapse>

                      <CustomCollapse>
                        <CustomPanel header='Gastos y Servicios' key='18'>
                          <CustomRow justify={'start'}>
                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Otros Cargos'}
                                name={'otros_cargos'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Otros Cargos'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={10} sm={5} md={8} lg={14} xl={5}>
                              <CustomRow justify={'end'}>
                                <CustomFormItem>
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Ver Detalles
                                  </CustomButton>
                                </CustomFormItem>
                              </CustomRow>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Cargos de Cierre'}
                                name={'cargos_cierre'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Cargos de Cierre'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Matriculación'}
                                name={'matriculacion'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Matriculación'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Seguros'}
                                labelAlign={'left'}
                                labelCol={{ sm: 24, md: 24, lg: 4, xl: 4 }}
                              >
                                <CustomRow justify={'start'}>
                                  {'%'}
                                  <CustomCol xs={22} sm={24} md={23} lg={5}>
                                    <CustomCol
                                      xs={5}
                                      md={6}
                                      lg={24}
                                      style={{ padding: '1px 0px' }}
                                    >
                                      <CustomFormItem
                                        noStyle
                                        label={'%'}
                                        name={'porciento'}
                                        rules={[
                                          {
                                            required: true,
                                            type: 'number',
                                            transform: (value: string) =>
                                              Number(value)
                                                ? value.length
                                                : value,
                                          },
                                        ]}
                                      >
                                        <CustomInput />
                                      </CustomFormItem>
                                    </CustomCol>
                                  </CustomCol>

                                  <CustomCol
                                    xs={7}
                                    sm={6}
                                    md={7}
                                    lg={5}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol xs={15} lg={11}>
                                    <CustomFormItem
                                      noStyle
                                      label={'Seguros'}
                                      name={'seguros'}
                                      rules={[
                                        {
                                          required: true,
                                          type: 'number',
                                          transform: (value: string) =>
                                            Number(value)
                                              ? value.length
                                              : value,
                                        },
                                      ]}
                                    >
                                      <CustomInput placeholder={'Seguros'} />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={1}
                                    style={{ padding: '0px 9px' }}
                                  >
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Planes de Protección'}
                                name={'planes_proteccion'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Planes de Protección'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Plan de Renta Anual'}
                                name={'plan_renta_anual'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Plan de Renta Anual'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Accesorios VR'}
                                name={'accesorios_vr'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Accesorios VR'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={10} sm={5} md={8} lg={14} xl={5}>
                              <CustomRow justify={'end'}>
                                <CustomFormItem>
                                  <CustomButton
                                    htmlType={'submit'}
                                    type={'primary'}
                                    shape='round'
                                  >
                                    Ver Detalles
                                  </CustomButton>
                                </CustomFormItem>
                              </CustomRow>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={18}>
                              <CustomFormItem
                                label={'Total Gastos y Servicios'}
                                name={'total_gastos_servicios'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Total Gastos y Servicios'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>

                        <CustomPanel header='Financiamiento' key='19'>
                          <CustomRow justify={'end'}>
                            <CustomCol span={24}>
                              <CustomFormItem
                                label={'Tipo de Financiamiento'}
                                name={'tipo_de_financiamiento'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
                                rules={[{ required: true }]}
                              >
                                <CustomSelect
                                  placeholder={'Tipo de financiamiento'}
                                >
                                  <Option value='A'>A</Option>
                                </CustomSelect>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol span={20}>
                              <CustomFormItem
                                label={'Oferta'}
                                name={'oferta'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
                                rules={[{ required: true }]}
                              >
                                <CustomCol span={20}>
                                  <CustomSelect placeholder={'Oferta'}>
                                    <Option value='A'>A</Option>
                                  </CustomSelect>
                                </CustomCol>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol span={20}>
                              <CustomFormItem
                                label={'Cuotas'}
                                name={'cuotas'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
                                rules={[
                                  {
                                    required: true,
                                    type: 'number',
                                    transform: (value: string) =>
                                      Number(value) ? value.length : value,
                                  },
                                ]}
                              >
                                <CustomCol span={10}>
                                  <CustomInput placeholder={'Cuotas'} />
                                </CustomCol>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol span={20}>
                              <CustomFormItem
                                label={'Tasa de Interés'}
                                name={'tasa_de_interes'}
                                labelCol={{ sm: 24, md: 24, lg: 9 }}
                                rules={[
                                  {
                                    required: true,
                                    type: 'number',
                                    transform: (value: string) =>
                                      Number(value) ? value.length : value,
                                  },
                                ]}
                              >
                                <CustomCol span={10}>
                                  <CustomInput
                                    placeholder={'Tasa de interés'}
                                  />
                                </CustomCol>
                              </CustomFormItem>
                            </CustomCol>
                          </CustomRow>

                          <CustomRow justify={'start'}>
                            <CustomCol span={24}>
                              <CustomDivider orientation={'left'}>
                                <CustomTitle level={4}>
                                  Incluir en el Financiamiento
                                </CustomTitle>
                              </CustomDivider>
                            </CustomCol>

                            {openStateModal && <OtherCharges />}

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Otros Cargos'}
                                name={'otros_cargos'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Otros Cargos'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox
                                      onChange={openModal}
                                      checked={activeStateCheckbox}
                                    />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Cargos de Cierre'}
                                name={'cargos_cierre'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Cargos de Cierre'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Matriculación'}
                                name={'matriculacion'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Matriculación'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24}>
                              <CustomFormItem
                                label={'Seguros'}
                                labelAlign={'left'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 5 }}
                              >
                                <CustomRow justify={'start'}>
                                  {'%'}
                                  <CustomCol xs={22} xl={4}>
                                    <CustomCol
                                      xs={5}
                                      md={6}
                                      xl={24}
                                      style={{ padding: '1px 0px' }}
                                    >
                                      <CustomFormItem
                                        noStyle
                                        label={'%'}
                                        name={'porciento'}
                                        rules={[
                                          {
                                            required: true,
                                            type: 'number',
                                            transform: (value: string) =>
                                              Number(value)
                                                ? value.length
                                                : value,
                                          },
                                        ]}
                                      >
                                        <CustomInput />
                                      </CustomFormItem>
                                    </CustomCol>
                                  </CustomCol>

                                  <CustomCol
                                    xs={7}
                                    sm={6}
                                    md={7}
                                    xl={5}
                                    style={{ padding: '0px 5px 0px 13px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol xs={15} xl={10}>
                                    <CustomFormItem
                                      noStyle
                                      label={'Seguros'}
                                      name={'seguros'}
                                      rules={[
                                        {
                                          required: true,
                                          type: 'number',
                                          transform: (value: string) =>
                                            Number(value)
                                              ? value.length
                                              : value,
                                        },
                                      ]}
                                    >
                                      <CustomInput placeholder={'Seguros'} />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={1}
                                    style={{ padding: '0px 9px' }}
                                  >
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Planes de Protección'}
                                name={'planes_proteccion'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Planes de Protección'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Plan de Renta Anual'}
                                name={'plan_renta_anual'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Plan de Renta Anual'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Accesorios VR'}
                                name={'accesorios_vr'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={'Accesorios VR'}
                                      />
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol span={2}>
                                    <CustomCheckbox />
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>

                            <CustomCol xs={24} sm={20} md={24} xl={22}>
                              <CustomFormItem
                                label={'Total Incluido en Financiamiento'}
                                name={'total_incluido_en_financiamiento'}
                                labelCol={{ sm: 24, md: 24, lg: 24, xl: 10 }}
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
                                  <CustomCol span={6}>
                                    <CustomFormItem noStyle>
                                      <CustomSelect placeholder={'Selector'}>
                                        <Option value='A'>A</Option>
                                      </CustomSelect>
                                    </CustomFormItem>
                                  </CustomCol>

                                  <CustomCol
                                    span={16}
                                    style={{ padding: '0px 5px' }}
                                  >
                                    <CustomFormItem noStyle>
                                      <CustomInput
                                        placeholder={
                                          'Total Incluido en Financiamiento'
                                        }
                                      />
                                    </CustomFormItem>
                                  </CustomCol>
                                </CustomRow>
                              </CustomFormItem>
                            </CustomCol>
                          </CustomRow>
                        </CustomPanel>
                      </CustomCollapse>

                      <CustomCollapse
                        activeKey={[externalBrokerBusinessActiveCollapse]}
                      >
                        <CustomPanel
                          header={
                            <CustomRow justify={'start'}>
                              {'Negocio Comisionista Externo'}
                              <CustomRadioGroup
                                onChange={panelStateOpcRadioChange}
                                style={{ padding: '0px 10px' }}
                              >
                                <CustomRadio value={'S20'}>Si</CustomRadio>
                                <CustomRadio value={'N20'}>No</CustomRadio>
                              </CustomRadioGroup>
                            </CustomRow>
                          }
                          key='20'
                        >
                          <DarkBlueButton
                            htmlType={'submit'}
                            onClick={handleModalExternalSalesCommissioner}
                            type={'primary'}
                            shape='round'
                          >
                            Agregar Intermediario
                          </DarkBlueButton>
                          {openStateModal && <ExternalSalesCommissioner />}
                        </CustomPanel>
                      </CustomCollapse>
                      <br />
                    </CustomCol>
                  </CustomRow>

                  <CustomRow justify={'end'}>
                    <CustomCol
                      xs={24}
                      sm={5}
                      md={4}
                      lg={4}
                      xl={3}
                      style={{ padding: '5px 0px' }}
                    >
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        shape='round'
                      >
                        Cancelar
                      </CustomButton>
                    </CustomCol>

                    <CustomCol xs={12} sm={7} md={5} lg={4} xl={4}>
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        shape='round'
                      >
                        Guardar Borrador
                      </CustomButton>
                    </CustomCol>

                    <CustomCol xs={12} sm={7} md={5} lg={4} xl={3}>
                      <CustomButton
                        htmlType={'submit'}
                        type={'primary'}
                        shape='round'
                      >
                        Enviar Solicitar
                      </CustomButton>
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
export default ApplicationForFormalization
