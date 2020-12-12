import React from 'react'
import styled from 'styled-components'
import { ColumnType } from 'antd/lib/table'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  CloudUploadOutlined,
  FullscreenOutlined,
} from '@ant-design/icons'
import {
  CustomButton,
  CustomCol,
  CustomFormItem,
  CustomRow,
  CustomTable,
  CustomTitle,
} from '../components'
import { useSelector } from 'react-redux'
import { StoreState } from '../reducers'

const ContentContainer = styled.div`
  max-width: 1670px;
  min-height: 720px;
  overflow-x: scroll;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

type FormalizationManager = {
  action?: React.ReactNode
  key: string
}
const columna: ColumnType<FormalizationManager>[] = [
  {
    key: 'fecha',
    title: 'Fecha',
    dataIndex: 'FECHA',
  },
  {
    key: 'hora',
    title: 'Hora',
    dataIndex: 'HORA',
  },
  {
    key: 'sucursal',
    title: 'Sucursal',
    dataIndex: 'SUCURSAL',
  },
  {
    key: 'vendedor',
    title: 'Vendedor',
    dataIndex: 'VENDEDOR',
  },
  {
    key: 'of_formalizacion',
    title: 'Of.Formalizacion',
    dataIndex: 'OF_FROMALIZACION',
  },
  {
    key: 'cliente',
    title: 'Cliente',
    dataIndex: 'CLIENTE',
  },
  {
    key: 'identificacion',
    title: 'Identificacion',
    dataIndex: 'IDENTIFICACION',
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
]
const rowSelection = {
  onChange: (selectedRowKeys: any) => {
    alert(selectedRowKeys)
  },
}

const PendingFormalize = (): React.ReactElement => {
  const { partners } = useSelector((state: StoreState) => state.partners)
  return (
    <ContentContainer>
      <CustomRow justify='start'>
        <CustomCol xl={7} xs={24} sm={24} md={12} lg={10}>
          <CustomTitle level={4}>Gestor De Formalizaciones</CustomTitle>
        </CustomCol>
      </CustomRow>
      <CustomRow>
        <CustomCol xs={24} sm={24} md={24} xl={24} lg={24}>
          <CustomFormItem>
            <CustomButton type={'primary'} icon={<FullscreenOutlined />}>
              Apartado
            </CustomButton>
          </CustomFormItem>
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
      </CustomRow>

      <CustomRow justify='end'>
        <CustomCol xs={24} sm={24} md={5} xl={3} lg={4}>
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

        <CustomCol xs={24} sm={24} md={4} xl={2} lg={3}>
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
    </ContentContainer>
  )
}
export default PendingFormalize
