import React from 'react'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  PlusOutlined,
  RetweetOutlined,
} from '@ant-design/icons'
import {
  CustomButton,
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  CustomRadioVertical,
  CustomRow,
  CustomTable,
  CustomText,
  CustomTitle,
} from '../components'
import { validateMessages } from '../constants/general'
import styled from 'styled-components'
import { RadioChangeEvent } from 'antd/lib/radio'
import { ColumnType } from 'antd/lib/table'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'
import { formItemLayout } from '../themes'
import CustomCollapse from '../components/CustomCollapse'
import CustomPanel from '../components/CustomPanel'

const ContentContainer = styled.div`
  overflow-x: scroll;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`
type Apartado_certificado_de_credito = {
  action?: React.ReactNode
  inventario_disponible: string | number
  descripcion: string
  referencia: string
  marca: string
  modelo: string | number
  estilo: string
  color: string
  ano: Date
  moneda: number
  valor_tasacion: number
  valor_recibir: number
  tasador: string
  fecha_tasacion: Date
  metodo_de_pago: string | number
  no_apv: number
  no_recibo: number
  usuario: string
  observacion: string
  abono: number
  apartado: string | number
  tasa: number
  cotizacion_por_unidad: string | number
  valor_instalado: number
  key: string
}
const columna_apartado: ColumnType<Apartado_certificado_de_credito>[] = [
  {
    key: 'referencia',
    title: 'Referencia',
    dataIndex: 'REFERENCIA',
  },
  {
    key: 'marca',
    title: 'Marca',
    dataIndex: 'MARCA',
  },
  {
    key: 'modelo',
    title: 'Modelo',
    dataIndex: 'MODELO',
  },
  {
    key: 'estilo',
    title: 'Estilo',
    dataIndex: 'ESTILO',
  },
  {
    key: 'color',
    title: 'Color',
    dataIndex: 'COLOR',
  },
  {
    key: 'ano',
    title: 'Año',
    dataIndex: 'AÑO',
  },
  {
    key: 'moneda',
    title: 'Moneda',
    dataIndex: 'MONEDA',
  },
  {
    key: 'valor_tasacion',
    title: 'Valor de tasacion',
    dataIndex: 'VALORTASACION',
  },
  {
    key: 'valor_recibir',
    title: 'Valor a recibir',
    dataIndex: 'VALORRECIBIR',
  },
  {
    key: 'tasador',
    title: 'Tasador',
    dataIndex: 'TASADOR',
  },
  {
    key: 'fecha_tasacion',
    title: 'Fecha de tasacion',
    dataIndex: 'FECHATASACION',
  },
]
const columna_certificado_de_credito: ColumnType<
  Apartado_certificado_de_credito
>[] = [
  {
    key: 'fecha',
    title: 'Fecha',
    dataIndex: 'FECHA',
  },
  {
    key: 'metodo_de_pago',
    title: 'Metodo de pago',
    dataIndex: 'METODODEPAGO',
  },
  {
    key: 'no_apv',
    title: 'NO.APV',
    dataIndex: 'NOAPV',
  },
  {
    key: 'no_recibo',
    title: 'NO.Recibo',
    dataIndex: 'NORECIBO',
  },
  {
    key: 'referencia',
    title: 'Referencia',
    dataIndex: 'REFERENCIA',
  },
  {
    key: 'marca',
    title: 'Marca',
    dataIndex: 'MARCA',
  },
  {
    key: 'modelo',
    title: 'Modelo',
    dataIndex: 'MODELO',
  },
  {
    key: 'estilo',
    title: 'Estilo',
    dataIndex: 'ESTILO',
  },
  {
    key: 'color',
    title: 'Color',
    dataIndex: 'COLOR',
  },
  {
    key: 'ano',
    title: 'Año',
    dataIndex: 'AÑO',
  },
  {
    key: 'moneda',
    title: 'Moneda',
    dataIndex: 'MONEDA',
  },
  {
    key: 'tasa',
    title: 'Tasa',
    dataIndex: 'TASA',
  },
  {
    key: 'apartado',
    title: 'Apartado',
    dataIndex: 'APARTADO',
  },
  {
    key: 'abono',
    title: 'Abono',
    dataIndex: 'ABONO',
  },
  {
    key: 'observacion',
    title: 'Observacion',
    dataIndex: 'OBSERVACION',
  },
  {
    key: 'usuario',
    title: 'Usuario',
    dataIndex: 'USUARIO',
  },
]
const rowSelection = {
  onChange: (selectedRowKeys: any) => {
    alert(selectedRowKeys)
  },
}
const SectionReceiveLeft = (): React.ReactElement => {
  const [entryStateFilter, setEntryStateFilter] = React.useState(true)
  const handleStateFilterRadioChange = (e: RadioChangeEvent) => {
    setEntryStateFilter(true)

    setEntryStateFilter(e.target.value)
  }
  const [
    entryStateFilterPulledApart,
    setEntryStateFilterPulledApart,
  ] = React.useState(true)

  const handleStateFilterRadioChangePulledApart = (e: RadioChangeEvent) => {
    setEntryStateFilterPulledApart(true)

    setEntryStateFilterPulledApart(e.target.value)
  }
  const [
    entryStateFilterCertificate,
    setEntryStateFilterCertificate,
  ] = React.useState(true)
  const handleStateFilterRadioChangeCertificate = (e: RadioChangeEvent) => {
    setEntryStateFilterCertificate(true)

    setEntryStateFilterCertificate(e.target.value)
  }
  const [entryStateFilterLeft, setEntryStateFilterLeft] = React.useState(true)
  const handleStateFilterRadioChangeLeft = (e: RadioChangeEvent) => {
    setEntryStateFilterLeft(true)

    setEntryStateFilterLeft(e.target.value)
  }

  const [
    entryStateFilterVehicleReceive,
    setEntryStateFilterVehicleReceive,
  ] = React.useState()
  const handleStateFilterRadioChangeVehicleReceive = (e: RadioChangeEvent) => {
    setEntryStateFilterVehicleReceive(e.target.value)
  }
  const [
    entryStateFilterDebtVehicle,
    setEntryStateFilterDebtVehicle,
  ] = React.useState()
  const handleStateFilterRadioChangeDebtVehicle = (e: RadioChangeEvent) => {
    setEntryStateFilterDebtVehicle(e.target.value)
  }
  const [
    entryStateFilterPaymentMethod,
    setEntryStateFilterPaymentMethod,
  ] = React.useState()
  const handleStateFilterRadioChangePaymentMethod = (e: RadioChangeEvent) => {
    setEntryStateFilterPaymentMethod(e.target.value)
  }
  const [
    entryStateFilterPaymentMethod2,
    setEntryStateFilterPaymentMethod2,
  ] = React.useState()
  const handleStateFilterRadioChangePaymentMethod2 = (e: RadioChangeEvent) => {
    setEntryStateFilterPaymentMethod2(e.target.value)
  }

  const { partners } = useSelector((state: StoreState) => state.partners)
  return (
    <ContentContainer>
      <CustomForm {...formItemLayout} validateMessages={validateMessages}>
        <CustomRow justify={'start'}>
          <CustomTitle level={4}>
            APARTADO/VEHICULO A RECIBIR/DEJADO A LA VENTA
          </CustomTitle>
        </CustomRow>

        <CustomRow justify={'start'}>
          <CustomCol span={22}>
            <CustomCollapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <PlusOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <CustomPanel
                header='Apartado'
                key='1'
                disabled={entryStateFilterPulledApart === true}
              >
                <CustomCol span={24}>
                  <CustomTable
                    scroll={{ x: true }}
                    columns={columna_apartado}
                    dataSource={partners}
                    rowSelection={rowSelection}
                  />
                </CustomCol>
              </CustomPanel>
            </CustomCollapse>
          </CustomCol>

          <CustomCol span={2}>
            <CustomRadioGroup
              onChange={handleStateFilterRadioChangePulledApart}
              value={entryStateFilterPulledApart}
            >
              <CustomRadio value={false}>Si</CustomRadio>
              <CustomRadio value={true}>No</CustomRadio>
            </CustomRadioGroup>
          </CustomCol>
        </CustomRow>

        <CustomRow justify={'start'}>
          <CustomCol span={22}>
            <br />
            <CustomCollapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <PlusOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <CustomPanel
                header='Certificado de Crédito'
                key='2'
                disabled={entryStateFilterCertificate === true}
              >
                <CustomCol span={24}>
                  <CustomTable
                    scroll={{ x: true }}
                    columns={columna_certificado_de_credito}
                    dataSource={partners}
                    rowSelection={rowSelection}
                  />
                </CustomCol>
              </CustomPanel>
            </CustomCollapse>
          </CustomCol>

          <CustomCol span={2}>
            <CustomRadioGroup
              onChange={handleStateFilterRadioChangeCertificate}
              value={entryStateFilterCertificate}
            >
              <CustomRadio value={false}>Si</CustomRadio>
              <CustomRadio value={true}>No</CustomRadio>
            </CustomRadioGroup>
          </CustomCol>
        </CustomRow>

        <CustomRow justify={'start'}>
          <CustomCol span={22}>
            <br />
            <CustomCollapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <PlusOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <CustomPanel
                header='Vehículo a Recibir'
                key='3'
                disabled={entryStateFilter === true}
              >
                <CustomForm validateMessages={validateMessages}>
                  <CustomRow justify={'start'}>
                    <CustomCol sm={24} lg={1}>
                      <CustomFormItem>
                        <CustomRadioVertical
                          onChange={handleStateFilterRadioChangeVehicleReceive}
                          value={entryStateFilterVehicleReceive}
                        >
                          <CustomRadio value={1}>
                            Incluir en Negocio
                          </CustomRadio>
                          <CustomRadio value={2}>Dejado a la Venta</CustomRadio>
                        </CustomRadioVertical>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol xs={24} sm={23} md={20} xl={10} lg={20}>
                      <CustomFormItem
                        labelCol={{ span: 15 }}
                        label='Vehiculo Tienen Deuda?'
                      >
                        <CustomRadioVertical
                          onChange={handleStateFilterRadioChangeDebtVehicle}
                          value={entryStateFilterDebtVehicle}
                        >
                          <CustomRadio value={1}>Si</CustomRadio>
                          <CustomRadio value={2}>No</CustomRadio>
                        </CustomRadioVertical>
                      </CustomFormItem>
                    </CustomCol>

                    <CustomCol md={20} lg={10}>
                      <CustomFormItem
                        label='Sub Total Apartado y Abonos'
                        name='apartado_abono'
                        rules={[
                          {
                            required: true,
                            type: 'number',
                            transform: (value: string) =>
                              Number(value) ? value.length : value,
                          },
                        ]}
                        labelCol={{ span: 15 }}
                      >
                        <CustomRow justify={'start'}>
                          <CustomCol span={6}>
                            <CustomFormItem
                              noStyle
                              rules={[{ required: true }]}
                            >
                              <CustomInput />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={11}>
                            <CustomFormItem noStyle>
                              <CustomInput />
                            </CustomFormItem>
                          </CustomCol>
                        </CustomRow>
                      </CustomFormItem>
                    </CustomCol>
                  </CustomRow>

                  <CustomRow justify={'end'}>
                    <CustomCol span={24}>
                      <CustomRow justify={'start'}>
                        <CustomCol span={19}>
                          <CustomRow justify='end'>
                            <CustomCol span={4}>
                              <CustomButton
                                type={'primary'}
                                style={{ borderColor: 'white' }}
                                icon={<PlusOutlined />}
                              >
                                Agregar vehículo
                              </CustomButton>
                            </CustomCol>

                            <CustomCol span={4}>
                              <CustomButton
                                type={'primary'}
                                style={{ borderColor: 'white' }}
                                icon={<RetweetOutlined />}
                              >
                                Cambiar vehículo
                              </CustomButton>
                            </CustomCol>

                            <CustomCol span={4}>
                              <CustomButton
                                type={'primary'}
                                style={{ borderColor: 'white' }}
                                icon={<DeleteOutlined />}
                              >
                                Eliminar vehículo
                              </CustomButton>
                            </CustomCol>
                          </CustomRow>
                        </CustomCol>

                        <CustomCol span={17}>
                          <CustomTable
                            scroll={{ x: true }}
                            columns={columna_apartado}
                            dataSource={partners}
                            rowSelection={rowSelection}
                          />
                        </CustomCol>
                      </CustomRow>
                    </CustomCol>

                    <CustomRow justify={'start'}>
                      <CustomForm
                        {...formItemLayout}
                        validateMessages={validateMessages}
                      >
                        <CustomCol span={24}>
                          <CustomRow justify={'center'}>
                            <CustomCol span={8}>
                              <CustomText strong>Detalles de Deuda</CustomText>
                            </CustomCol>
                          </CustomRow>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Institución'}
                              name={'institucion'}
                              rules={[{ required: true }]}
                              onlyLetters
                            >
                              <CustomInput placeholder={'Institución'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Sucursal'}
                              name={'sucursal'}
                              rules={[{ required: true }]}
                              onlyLetters
                            >
                              <CustomInput placeholder={'Sucursal'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Ciudad'}
                              name={'ciudad'}
                              rules={[{ required: true }]}
                              onlyLetters
                            >
                              <CustomInput placeholder={'Ciudad'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'NO.Préstamo'}
                              name={'prestamo'}
                              rules={[
                                {
                                  required: true,
                                  type: 'number',
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomInput placeholder={'NO.Préstamo'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label='Monto de Saldo'
                              name='monto_saldo'
                              rules={[
                                {
                                  required: true,
                                  type: 'number',
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                              labelCol={{ span: 8 }}
                            >
                              <CustomRow justify={'start'}>
                                <CustomCol xs={16} lg={13}>
                                  <CustomFormItem
                                    noStyle
                                    rules={[{ required: true }]}
                                  >
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>

                                <CustomCol xs={8} lg={11}>
                                  <CustomFormItem
                                    noStyle
                                    rules={[{ required: true }]}
                                  >
                                    <CustomInput />
                                  </CustomFormItem>
                                </CustomCol>
                              </CustomRow>
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Fecha.Corte de saldo'}
                              name={'Fecha_corte_saldo'}
                              rules={[
                                {
                                  required: true,
                                  type: 'number',
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomInput
                                placeholder={'Fecha.Corte de saldo'}
                              />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Gerente'}
                              name={'gerente'}
                              rules={[{ required: true }]}
                              onlyLetters
                            >
                              <CustomInput placeholder={'Gerente'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Oficina'}
                              name={'oficina'}
                              rules={[{ required: true }]}
                              onlyLetters
                            >
                              <CustomInput placeholder={'Oficina'} />
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
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomInput placeholder={'Contacto'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomCol span={24}>
                            <CustomFormItem
                              label={'Correo'}
                              name={'correo'}
                              rules={[{ required: true, type: 'email' }]}
                            >
                              <CustomInput placeholder={'Correo'} />
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
                                  transform: (value: string) =>
                                    Number(value) ? value.length : value,
                                },
                              ]}
                            >
                              <CustomInput placeholder={'Teléfono'} />
                            </CustomFormItem>
                          </CustomCol>

                          <CustomRow justify={'center'}>
                            <CustomCol span={8}>
                              <CustomButton
                                type={'primary'}
                                style={{ borderColor: 'white' }}
                                icon={<CloudUploadOutlined />}
                              >
                                Cargar
                              </CustomButton>
                            </CustomCol>

                            <CustomCol span={4}>
                              <CustomButton
                                type={'primary'}
                                style={{ borderColor: 'white' }}
                                htmlType={'submit'}
                              >
                                Ver Pruebas de saldo
                              </CustomButton>
                            </CustomCol>
                          </CustomRow>
                        </CustomCol>
                      </CustomForm>
                    </CustomRow>
                  </CustomRow>
                </CustomForm>
              </CustomPanel>
            </CustomCollapse>
          </CustomCol>

          <CustomCol span={2}>
            <CustomRadioGroup
              onChange={handleStateFilterRadioChange}
              value={entryStateFilter}
            >
              <CustomRadio value={false}>Si</CustomRadio>
              <CustomRadio value={true}>No</CustomRadio>
            </CustomRadioGroup>
          </CustomCol>
        </CustomRow>

        <CustomRow justify={'start'}>
          <CustomCol sm={24} lg={22}>
            <br />
            <CustomCollapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <PlusOutlined rotate={isActive ? 90 : 0} />
              )}
            >
              <CustomPanel
                header='Dejado a la Venta'
                key='4'
                disabled={entryStateFilterLeft === true}
              >
                <CustomRow justify='start'>
                  <CustomCol md={24} lg={17}>
                    <CustomTable
                      scroll={{ x: true }}
                      columns={columna_apartado}
                      dataSource={partners}
                      rowSelection={rowSelection}
                    />
                  </CustomCol>

                  <CustomCol span={7}>
                    <CustomRow justify='center'>
                      <CustomText strong>
                        Uso Solo Para Vehiculo Dejado a la Venta
                      </CustomText>
                    </CustomRow>
                    <CustomRow justify='center'>
                      <CustomText>Metodo de Pago</CustomText>
                    </CustomRow>

                    <CustomRow justify='start'>
                      <CustomCol md={24} lg={12}>
                        <CustomFormItem>
                          <CustomRadioGroup
                            onChange={handleStateFilterRadioChangePaymentMethod}
                            value={entryStateFilterPaymentMethod}
                          >
                            <CustomRadio value={1}>Cheque</CustomRadio>
                            <CustomRadio value={2}>Transferencia</CustomRadio>
                            <CustomRadio value={3}>Certificado</CustomRadio>
                          </CustomRadioGroup>
                        </CustomFormItem>
                      </CustomCol>

                      <CustomCol md={24} lg={12}>
                        <CustomFormItem>
                          <CustomRadioGroup
                            onChange={
                              handleStateFilterRadioChangePaymentMethod2
                            }
                            value={entryStateFilterPaymentMethod2}
                          >
                            <CustomRadio value={1}>
                              Aplicar a la Cuenta
                            </CustomRadio>
                          </CustomRadioGroup>
                          <CustomButton type={'primary'}>
                            Datos Beneficiario
                          </CustomButton>
                        </CustomFormItem>
                      </CustomCol>
                    </CustomRow>
                  </CustomCol>
                </CustomRow>
              </CustomPanel>
            </CustomCollapse>
          </CustomCol>

          <CustomCol span={2}>
            <CustomRadioGroup
              onChange={handleStateFilterRadioChangeLeft}
              value={entryStateFilterLeft}
            >
              <CustomRadio value={false}>Si</CustomRadio>
              <CustomRadio value={true}>No</CustomRadio>
            </CustomRadioGroup>
          </CustomCol>
        </CustomRow>
        <br />
        <CustomRow justify='end'>
          <CustomCol sm={24} md={5} lg={4}>
            <CustomButton
              type={'primary'}
              style={{ borderColor: 'white' }}
              icon={<CloseOutlined />}
            >
              Cancelar
            </CustomButton>
          </CustomCol>

          <CustomCol sm={24} md={5} lg={4}>
            <CustomButton
              type={'primary'}
              style={{ borderColor: 'white' }}
              icon={<CloudUploadOutlined />}
              htmlType={'submit'}
            >
              Guardar Borrador
            </CustomButton>
          </CustomCol>

          <CustomCol sm={24} md={4} lg={3}>
            <CustomButton
              type={'primary'}
              style={{ borderColor: 'white' }}
              icon={<ArrowLeftOutlined />}
            >
              Anterior
            </CustomButton>
          </CustomCol>

          <CustomCol sm={24} md={4} lg={3}>
            <CustomButton
              type={'primary'}
              style={{ borderColor: 'white' }}
              icon={<ArrowRightOutlined />}
              htmlType={'submit'}
            >
              Siguiente
            </CustomButton>
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </ContentContainer>
  )
}
export default SectionReceiveLeft
