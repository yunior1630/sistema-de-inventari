import React from 'react'
import styled from 'styled-components'
import { ColumnType } from 'antd/lib/table'
import { Select } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  FullscreenOutlined,
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
  CustomSelect,
  CustomSpace,
  CustomTable,
  CustomText,
  CustomTitle,
} from '../components'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'

import { formItemLayout } from '../themes'

const ContentContainer = styled.div`
  max-width: 1670px;
  overflow-x: scroll;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

type FormalizationManager = {
  action?: React.ReactNode
  marca: string | number
  año: number
  estilo: string
  condicion: number
  origen: string
  traccion: string
  color_interior: string
  color_exterior: string
  combustible: string
  condicion_fisica: string
  referencia: string
  precio: number
  accesorios: string
  precio_acordado: number
  precio_total: number
  inventario_disponible: string | number
  descripcion: string
  cotizacion_por_unidad: string | number
  valor_instalado: number
  key: string
}
const columna: ColumnType<FormalizationManager>[] = [
  {
    key: 'inventario_disponible',
    title: 'Inventario Disponible',
    dataIndex: 'INVENTARIODISPONIBLE',
  },
  {
    key: 'descripcion',
    title: 'Descripcion',
    dataIndex: 'DESCRIPCION',
  },
  {
    key: 'cotizacion_por_unidad',
    title: 'Cotizacion por Unidad',
    dataIndex: 'COTIZACIONPORUNIDAD',
  },
]
const columna1: ColumnType<FormalizationManager>[] = [
  {
    key: 'descripcion',
    title: 'Descripcion',
    dataIndex: 'DESCRIPCION',
  },
  {
    key: 'valor_instalado',
    title: 'Valor Instalado',
    dataIndex: 'VALORINSTALADO',
  },
]

const columns: ColumnType<FormalizationManager>[] = [
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
    key: 'año',
    title: 'Año',
    dataIndex: 'AÑO',
  },
  {
    key: 'estilo',
    title: 'Estilo',
    dataIndex: 'ESTILO',
  },
  {
    key: 'condicion',
    title: 'Condicion',
    dataIndex: 'CONDICION',
  },
  {
    key: 'origen',
    title: 'Origen',
    dataIndex: 'ORIGEN',
  },
  {
    key: 'traccion',
    title: 'Traccion',
    dataIndex: 'TRACCION',
  },
  {
    key: 'color_interior',
    title: 'Color interior',
    dataIndex: 'COLORINTERIOR',
  },
  {
    key: 'color_exterior',
    title: 'Color exterior',
    dataIndex: 'COLOREXTERIOR',
  },
  {
    key: 'combustible',
    title: 'Combustible',
    dataIndex: 'COMBUSTIBLE',
  },
  {
    key: 'condicion_fisica',
    title: 'Condicion fisica',
    dataIndex: 'CONDICIONFISICA',
  },
  {
    key: 'referencia',
    title: 'Referencia',
    dataIndex: 'REFERENCIA',
  },
  {
    key: 'precio',
    title: 'Precio',
    dataIndex: 'PRECIO',
  },
  {
    key: 'accesorios',
    title: 'Accesorios',
    dataIndex: 'ACCESORIOS',
  },
  {
    key: 'precio_total',
    title: 'Precio total',
    dataIndex: 'PRECIOTOTAL',
  },
  {
    key: 'precio_acordado',
    title: 'Precio acordado',
    dataIndex: 'PRECIOACORDADO',
  },
]
const rowSelection = {
  onChange: (selectedRowKeys: any) => {
    alert(selectedRowKeys)
  },
}

const { Option } = Select

const FormalizationManager = (): React.ReactElement => {
  const validateMessages = {
    required: `Este item es requerido`,
    types: {
      email: `'$\{label}' no es un email válido.`,
      number: `'$\{label}' no es un número válido!`,
      regexp: `'$\{label}' formato no válido.`,
    },
    pattern: {
      mismatch: `'$\{label}' formato no válido.`,
    },
    number: {
      len: `'$\{label}' debe tener exactamente '$\{len}' caracteres.`,
    },
  }

  const [entryStateFilter, setEntryStateFilter] = React.useState()
  const handleStateFilterRadioChange = (e: RadioChangeEvent) => {
    setEntryStateFilter(e.target.value)
  }
  const [entryStateFilter2, setEntryStateFilter2] = React.useState()
  const handleStateFilterRadioChange2 = (e: RadioChangeEvent) => {
    setEntryStateFilter2(e.target.value)
  }
  const [entryStateFilter3, setEntryStateFilter3] = React.useState()
  const handleStateFilterRadioChange3 = (e: RadioChangeEvent) => {
    setEntryStateFilter3(e.target.value)
  }
  const [
    entryStateFilterContractModality,
    setEntryStateFilterContractModality,
  ] = React.useState()
  const handleStateFilterRadioChangeContractModality = (
    e: RadioChangeEvent
  ) => {
    setEntryStateFilterContractModality(e.target.value)
  }

  const [entryStateFilterVoucher, setEntryStateFilterVoucher] = React.useState()
  const handleStateFilterRadioChangeVoucher = (e: RadioChangeEvent) => {
    setEntryStateFilterVoucher(e.target.value)
  }

  const [
    entryStateFilterPaymentCondition,
    setEntryStateFilterPaymentCondition,
  ] = React.useState()
  const handleStateFilterRadioChangePaymentCondition = (
    e: RadioChangeEvent
  ) => {
    setEntryStateFilterPaymentCondition(e.target.value)
  }

  const { partners } = useSelector((state: StoreState) => state.partners)

  return (
    <ContentContainer>
      <CustomForm {...formItemLayout} validateMessages={validateMessages}>
        <CustomRow justify='start'>
          <CustomCol xs={22} sm={20} md={7} xl={7}>
            <CustomSpace direction='vertical' style={{ width: 300 }}>
              <CustomTitle level={4}>Gestor De Formalizaciones</CustomTitle>
            </CustomSpace>
            <CustomSpace direction='vertical' style={{ width: 300 }}>
              <CustomText strong>Vehículo a Formalizar</CustomText>
            </CustomSpace>
            <CustomSpace direction='vertical' style={{ width: 300 }}>
              <CustomText>Modalidad de Contratos</CustomText>
            </CustomSpace>
            <CustomCol xs={24} sm={24} md={2} xl={2} lg={2}>
              <CustomFormItem name='Modalidad' rules={[{ required: true }]}>
                <CustomRadioVertical
                  onChange={handleStateFilterRadioChangeContractModality}
                  value={entryStateFilterContractModality}
                >
                  <CustomRadio value={1}>Un vehículo</CustomRadio>
                  <CustomRadio value={2}>Más de un vehículo</CustomRadio>
                </CustomRadioVertical>
              </CustomFormItem>
            </CustomCol>
          </CustomCol>

          <CustomCol xs={24} sm={10} md={2} xl={2} lg={2}>
            <CustomText strong>Condición de Pago</CustomText>
            <CustomFormItem name='Condicion' rules={[{ required: true }]}>
              <CustomRadioVertical
                onChange={handleStateFilterRadioChangePaymentCondition}
                value={entryStateFilterPaymentCondition}
              >
                <CustomRadio value={1}>Crédito</CustomRadio>
                <CustomRadio value={2}>Al Contado</CustomRadio>
              </CustomRadioVertical>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={24} sm={12} md={8} xl={6} lg={7}>
            <CustomSpace
              direction='vertical'
              align='center'
              style={{ width: 360 }}
            >
              <CustomText strong> Excencion de ITBIS</CustomText>
            </CustomSpace>
            <CustomRow justify='center'>
              <CustomCol xs={24} sm={8} md={7} xl={7} lg={10}>
                <CustomFormItem>
                  <CustomButton
                    type={'primary'}
                    style={{ borderColor: 'white' }}
                    icon={<CloudUploadOutlined />}
                  >
                    Cargar
                  </CustomButton>
                </CustomFormItem>
              </CustomCol>

              <CustomCol xs={24} sm={5} md={4} xl={4} lg={4}>
                <CustomFormItem>
                  <CustomButton
                    type={'primary'}
                    style={{ borderColor: 'white' }}
                    icon={<CloudUploadOutlined />}
                  >
                    Carnet
                  </CustomButton>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xs={24} sm={24} md={7} xl={5} lg={8}>
            <CustomText strong>A nombre de quien va el vehículo</CustomText>
            <CustomRow justify='start'>
              <CustomCol xs={24} sm={24} md={10} xl={10} lg={10}>
                <CustomFormItem
                  name='nombre_vehiculo'
                  rules={[{ required: true }]}
                >
                  <CustomRadioVertical
                    onChange={handleStateFilterRadioChange}
                    value={entryStateFilter}
                  >
                    <CustomRadio value={1}>Comprador</CustomRadio>
                    <CustomRadio value={2}>Tercero</CustomRadio>
                  </CustomRadioVertical>
                </CustomFormItem>
              </CustomCol>

              <CustomCol xs={24} sm={24} md={9} xl={9}>
                <CustomButton type='primary'>Datos de tercero</CustomButton>
              </CustomCol>
            </CustomRow>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='start'>
          <CustomCol xs={24} sm={24} md={6} xl={6}>
            <CustomText strong>Tipo de Comprobante</CustomText>
          </CustomCol>

          <CustomCol xs={24} sm={24} md={8} xl={5} lg={7}>
            <CustomFormItem
              label='Mes a facturar'
              name='mes_facturar'
              rules={[{ required: true }]}
            >
              <CustomCol xs={24} sm={24} md={10} xl={10}>
                <CustomSelect>
                  <Option value='mes_a_facturar'>A</Option>
                </CustomSelect>
              </CustomCol>
            </CustomFormItem>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='start'>
          <CustomCol xs={24} sm={24} md={24} xl={6} lg={24}>
            <CustomFormItem name='comprobante' rules={[{ required: true }]}>
              <CustomRadioVertical
                onChange={handleStateFilterRadioChangeVoucher}
                value={entryStateFilterVoucher}
              >
                <CustomRadio value={1}>Consumo</CustomRadio>
                <CustomRadio value={2}>Valor fiscal</CustomRadio>
                <CustomRadio value={3}>Gubernamental</CustomRadio>
                <CustomRadio value={4}> Regimen Especial</CustomRadio>
              </CustomRadioVertical>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xl={5} xs={24} sm={5} md={8} lg={7}>
            <CustomFormItem
              label={'Valor a facturar'}
              name={'valor_a_facturar'}
              rules={[{ required: true }]}
            >
              <CustomRow justify='start'>
                <CustomCol xl={11} xs={24} sm={24} md={11} lg={10}>
                  <CustomSelect placeholder={'Selector'}>
                    <Option value='monto'>A</Option>
                  </CustomSelect>
                </CustomCol>

                <CustomCol xl={9} xs={24} sm={24} md={11} lg={10}>
                  <CustomInput />
                </CustomCol>
              </CustomRow>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xl={12} xs={24} sm={24} md={15} lg={9}>
            <CustomRow justify='end'>
              <CustomCol xl={6} xs={24} sm={24} md={6} lg={6}>
                <CustomFormItem>
                  <CustomButton
                    type={'primary'}
                    style={{ borderColor: 'white' }}
                    icon={<FullscreenOutlined />}
                  >
                    Extender pantalla
                  </CustomButton>
                </CustomFormItem>
              </CustomCol>

              <CustomCol xl={6} xs={24} sm={24} md={6} lg={6}>
                <CustomFormItem>
                  <CustomButton
                    type={'primary'}
                    style={{ borderColor: 'white' }}
                    icon={<PlusOutlined />}
                  >
                    Agregar vehículo
                  </CustomButton>
                </CustomFormItem>
              </CustomCol>

              <CustomCol xl={6} xs={24} sm={24} md={6} lg={6}>
                <CustomFormItem>
                  <CustomButton
                    type={'primary'}
                    style={{ borderColor: 'white' }}
                    icon={<RetweetOutlined />}
                  >
                    Cambiar vehículo
                  </CustomButton>
                </CustomFormItem>
              </CustomCol>

              <CustomCol xl={6} xs={24} sm={24} md={6} lg={6}>
                <CustomFormItem>
                  <CustomButton
                    type={'primary'}
                    style={{ borderColor: 'white' }}
                    icon={<DeleteOutlined />}
                  >
                    Eliminar vehículo
                  </CustomButton>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='start'>
          <CustomTable
            columns={columns}
            dataSource={partners}
            bordered={true}
            rowSelection={rowSelection}
          />
        </CustomRow>

        <CustomRow justify='start'>
          <CustomCol xl={6} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='end'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  rules={[
                    {
                      required: true,
                      type: 'number',
                    },
                  ]}
                  label={'Chasis'}
                  name={'chasis'}
                >
                  <CustomCol xl={24} xs={24} sm={24} md={24}>
                    <CustomInput placeholder={'Chasis'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={6} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='end'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  rules={[
                    {
                      required: true,
                      type: 'string',
                    },
                  ]}
                  label={'Transmisión'}
                  name={'transmision'}
                >
                  <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                    <CustomInput placeholder={'Transmisión'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={7} xs={24} sm={24} md={10} lg={10}>
            <CustomRow justify='center'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  label={'Numero de cilindros'}
                  name={'numero_de_cilindros'}
                  rules={[
                    {
                      required: true,
                      type: 'number',
                    },
                  ]}
                >
                  <CustomCol xl={8} xs={24} sm={24} md={8} lg={8}>
                    <CustomInput placeholder={'Numero de cilindros'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={4} xs={24} sm={24} md={10} lg={7}>
            <CustomFormItem
              label='Garantia'
              name='garantia'
              rules={[{ required: true }]}
              style={{ textAlign: 'start' }}
            >
              <CustomCol span={24}>
                <CustomFormItem noStyle>
                  <CustomInput style={{ width: '50%' }} />
                </CustomFormItem>

                <CustomFormItem noStyle>
                  <CustomInput style={{ width: '28%' }} />
                </CustomFormItem>
              </CustomCol>
            </CustomFormItem>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='start'>
          <CustomCol xl={6} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='end'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  rules={[
                    {
                      required: true,
                      type: 'number',
                    },
                  ]}
                  label={'Carrocería'}
                  name={'carroceria'}
                >
                  <CustomCol xl={24} xs={24} sm={24} md={24}>
                    <CustomInput placeholder={'Carrocería'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={6} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='end'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  rules={[
                    {
                      required: true,
                      type: 'number',
                    },
                  ]}
                  label={'Ubicacíon'}
                  name={'ubicacion'}
                >
                  <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                    <CustomInput placeholder={'Ubicacíon'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={5} xs={24} sm={24} md={10} lg={10}>
            <CustomFormItem
              label='Millaje'
              name='millaje'
              rules={[{ required: true }]}
              style={{ textAlign: 'start' }}
            >
              <CustomCol span={24}>
                <CustomFormItem noStyle>
                  <CustomInput style={{ width: '60%' }} />
                </CustomFormItem>

                <CustomFormItem noStyle>
                  <CustomInput style={{ width: '32%' }} />
                </CustomFormItem>
              </CustomCol>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xl={7} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='end'>
              <CustomCol xl={22} xs={24} sm={24} md={22} lg={24}>
                <CustomFormItem
                  label={'Soporte de Garantía'}
                  name={'soporte de garantia'}
                  rules={[
                    {
                      required: true,
                      type: 'string',
                    },
                  ]}
                >
                  <CustomCol xl={15} xs={24} sm={24} md={15} lg={24}>
                    <CustomInput placeholder={'Soporte de Garantía'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='start'>
          <CustomCol xl={6} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='end'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  label={'Tipo de Vehiculo'}
                  name={'tipo_vehiculo'}
                  rules={[
                    {
                      required: true,
                      type: 'string',
                    },
                  ]}
                >
                  <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                    <CustomInput placeholder={'Tipo de Vehiculo'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={6} xs={24} sm={24} md={10} lg={7}>
            <CustomRow justify='center'>
              <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                <CustomFormItem
                  label={'Fecha de entrega'}
                  name={'fecha_entrega'}
                  rules={[
                    {
                      required: true,
                      type: 'date',
                    },
                  ]}
                >
                  <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
                    <CustomInput placeholder={'Fecha de entrega'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>

          <CustomCol xl={6} xs={24} sm={24} md={10} lg={10}>
            <CustomRow justify='start'>
              <CustomCol xl={20} xs={24} sm={24} md={24} lg={20}>
                <CustomFormItem
                  rules={[
                    {
                      required: true,
                      type: 'string',
                    },
                  ]}
                  label={'Referencia'}
                  name={'referencia'}
                >
                  <CustomCol xl={22} xs={24} sm={24} md={22} lg={22}>
                    <CustomInput placeholder={'Referencia'} />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='end'>
          <CustomCol xl={24} xs={24} sm={24} md={24} lg={24}>
            <CustomRow justify='end'>
              <CustomCol xl={13} xs={24} sm={24} md={16} lg={13}>
                <CustomFormItem
                  labelCol={{ xl: 20 }}
                  label='Este vehículo Queda con Alguna Reparación o Entrega de artículo pendiente?'
                  rules={[{ required: true }]}
                >
                  <CustomRadioGroup
                    onChange={handleStateFilterRadioChange2}
                    value={entryStateFilter2}
                  >
                    <CustomRadio value={1}>si</CustomRadio>
                    <CustomRadio value={2}>no</CustomRadio>
                  </CustomRadioGroup>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>

            <CustomRow justify='end'>
              <CustomCol xl={13} xs={24} sm={24} md={11} lg={9}>
                <CustomFormItem
                  labelCol={{ xl: 20 }}
                  label='Queda pendiente por Renovación de marbete?'
                  rules={[{ required: true }]}
                >
                  <CustomRadioGroup
                    onChange={handleStateFilterRadioChange3}
                    value={entryStateFilter3}
                  >
                    <CustomRadio value={1}>si</CustomRadio>
                    <CustomRadio value={2}>no</CustomRadio>
                  </CustomRadioGroup>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>

            <CustomRow justify='end'>
              <CustomCol xl={24} xs={24} sm={24} md={11} lg={10}>
                <CustomFormItem
                  labelCol={{ xl: 19 }}
                  name='estatus_marbete_placa'
                  label={'Estatus de marbete de placa'}
                  rules={[{ required: true }]}
                >
                  <CustomCol xl={20} xs={24} sm={24} md={22} lg={22}>
                    <CustomInput />
                  </CustomCol>
                </CustomFormItem>
              </CustomCol>
            </CustomRow>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='center'>
          <CustomCol xl={17} xs={24} sm={24} md={17} lg={17}>
            <CustomText strong>Accesorios Vegamovil Revolucion</CustomText>
          </CustomCol>
        </CustomRow>

        <CustomRow justify='start'>
          <CustomCol xl={7} xs={24} sm={24} md={12} lg={10}>
            <CustomTable
              columns={columna}
              dataSource={partners}
              rowSelection={rowSelection}
            />
          </CustomCol>

          <CustomCol xl={7} xs={24} sm={24} md={12} lg={10}>
            <CustomTable
              columns={columna1}
              dataSource={partners}
              rowSelection={rowSelection}
            />
          </CustomCol>
        </CustomRow>

        <CustomRow justify='end'>
          <CustomCol xs={24} sm={24} md={5} xl={4} lg={4}>
            <CustomFormItem>
              <CustomButton
                type={'primary'}
                style={{ borderColor: 'white' }}
                icon={<CloseOutlined />}
              >
                Cancelar
              </CustomButton>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={24} sm={24} md={5} xl={4} lg={4}>
            <CustomFormItem>
              <CustomButton
                type={'primary'}
                style={{ borderColor: 'white' }}
                icon={<CloudUploadOutlined />}
                htmlType={'submit'}
              >
                Guardar Borrador
              </CustomButton>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={24} sm={24} md={4} xl={3} lg={3}>
            <CustomFormItem>
              <CustomButton
                type={'primary'}
                style={{ borderColor: 'white' }}
                icon={<ArrowLeftOutlined />}
              >
                Anterior
              </CustomButton>
            </CustomFormItem>
          </CustomCol>

          <CustomCol xs={24} sm={24} md={4} xl={3} lg={3}>
            <CustomFormItem>
              <CustomButton
                type={'primary'}
                style={{ borderColor: 'white' }}
                icon={<ArrowRightOutlined />}
                htmlType={'submit'}
              >
                Siguiente
              </CustomButton>
            </CustomFormItem>
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </ContentContainer>
  )
}
export default FormalizationManager
