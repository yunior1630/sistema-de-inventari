import React from 'react'
import { CustomTabPane, CustomTabs } from '../components'
import FormalizationManagerDashboard from './FormalizationManagerDashboard'
import PendingFormalize from './PendingFormalize'
import SectionReceiveLeft from './SectionReceiveLeft'
import GeneralDataPhysicalPerson from '../components/GeneralDataPhysicalPerson'
import GeneralDataLegalPersons from '../components/GeneralDataLegalPersons'
import ApplicationForFormalization from './ApplicationForFormalization'
import PhysicalPersonRegistration from '../components/PhysicalPersonRegistration'
type TabConfig = {
  title: string
  type: string
  node: React.ReactNode
}

const FormalizationManagerPrincipal: React.FunctionComponent = () => {
  const [currentActiveKey, setCurrentActiveKey] = React.useState('2')
  const handleOnchangeTab = (activeKey: string): void => {
    setCurrentActiveKey(activeKey)
  }

  const tabOptions: ReadonlyArray<TabConfig> = [
    {
      title: 'DASHBOARD',
      type: 'dashboard',
      node: <FormalizationManagerDashboard changeToTab={handleOnchangeTab} />,
    },
    {
      title: 'TASACION',
      type: 'tasacion',
      node: <PhysicalPersonRegistration />,
    },
    {
      title: 'SOLICITUD DE FORMALIZACION',
      type: 'solicitudFormalizacion',
      node: <ApplicationForFormalization />,
    },
    {
      title: 'TASAS',
      type: 'tasas',
      node: <div>TASAS</div>,
    },
    {
      title: 'CALCULADORA',
      type: 'calculadora',
      node: <div>CALCULADORA</div>,
    },
    {
      title: 'OFERTAS',
      type: 'ofertas',
      node: <div>OFERTAS</div>,
    },
    {
      title: 'APROVACIONES',
      type: 'aprovaciones',
      node: <div>APROVACIONES</div>,
    },
    {
      title: 'AGENDA',
      type: 'agenda',
      node: <div>AGENDA</div>,
    },
    {
      title: 'PENDIENTE A FROMALIZAR',
      type: 'pendiente_formalizar',
      node: <PendingFormalize />,
    },
    {
      title: 'PERSONA JURIDICA',
      type: 'persona_juridica',
      node: <GeneralDataLegalPersons />,
    },
    {
      title: 'PERSONA FISICA',
      type: 'persona_fisica',
      node: <GeneralDataPhysicalPerson />,
    },
    {
      title: 'APARTADO/VEHICULO A RECIBIR/DEJADO A LA VENTA',
      type: 'apartado/recibir/dejado',
      node: <SectionReceiveLeft />,
    },
  ]

  return (
    <CustomTabs
      type={'card'}
      activeKey={currentActiveKey}
      onChange={handleOnchangeTab}
    >
      {tabOptions.map((value: TabConfig, index: number) => (
        <CustomTabPane tab={value.title} key={`${index}`}>
          {value.node}
        </CustomTabPane>
      ))}
    </CustomTabs>
  )
}

export default FormalizationManagerPrincipal
