import React from 'react'
import { CustomTabPane, CustomTabs } from '../components'
import PhysicalPersonRegistration from '../components/PhysicalPersonRegistration'
import LegalPersonRelationship from './LegalPersonRelationship'

type TabConfig = {
  title: string
  type: string
  node: React.ReactNode
}

const CustomerRecord: React.FunctionComponent = () => {
  const [currentActiveKey, setCurrentActiveKey] = React.useState('2')
  const handleOnchangeTab = (activeKey: string): void => {
    setCurrentActiveKey(activeKey)
  }

  const tabOptions: ReadonlyArray<TabConfig> = [
    {
      title: 'RELACION DEL CLIENTE',
      type: 'relacionDelCliente',
      node: <div>RELACION DEL CLIENTE</div>,
    },
    {
      title: 'PERSONA FISICA',
      type: 'personaFisica',
      node: <PhysicalPersonRegistration />,
    },
    {
      title: 'PERSONA JURIDICA',
      type: 'personaJuridica',
      node: <LegalPersonRelationship />,
    },
    {
      title: 'DIRECCION Y CONTACTO',
      type: 'direccionContacto',
      node: <div>DIRECCION Y CONTACTO</div>,
    },
    {
      title: 'OTROS RELACIONADOS',
      type: 'otrosRelacionados',
      node: <div>OTROS RELACIONADOS</div>,
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

export default CustomerRecord
