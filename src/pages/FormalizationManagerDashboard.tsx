import React from 'react'
import { Axis, Chart, Geom, Tooltip } from 'bizcharts'
import {
  CustomButton,
  CustomCol,
  CustomRow,
  CustomText,
  CustomTitle,
} from '../components'
import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: 1670px;
  overflow-x: scroll;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const data = [
  { time: 'Jan.', tem: 1000 },
  { time: 'Feb.', tem: 2200 },
  { time: 'Mar.', tem: 2000 },
  { time: 'Apr.', tem: 2600 },
  { time: 'May.', tem: 2000 },
  { time: 'Jun.', tem: 2600 },
  { time: 'Jul.', tem: 2800 },
  { time: 'Aug.', tem: 2000 },
]

const defs = [
  { dataKey: 'time', range: [0, 1] },
  { dataKey: 'tem', tickCount: 5, min: 0 },
]

type Props = {
  props?: React.ReactPropTypes
  changeToTab: (activeKey: string) => void
}

const FormalizationManagerDashboard = (props: Props): React.ReactElement => {
  const handleOnClick = () => {
    props.changeToTab('8')
  }
  const handleOnClicklegal = () => {
    props.changeToTab('9')
  }
  const handleOnClickPhysical = () => {
    props.changeToTab('10')
  }
  return (
    <ContentContainer>
      <CustomRow>
        <CustomCol {...{ xs: 24, sm: 24, md: 24, xl: 24 }}>
          <Chart
            height={400}
            width={1500}
            data={data}
            defs={defs}
            pixelRatio={window.devicePixelRatio * 2}
          >
            <Axis name='tem' />
            <Axis name='time' />
            <Tooltip showCrosshairs />
            <Geom type='area' position='time*tem' />
            <Geom type='line' position='time*tem' />
          </Chart>
        </CustomCol>
      </CustomRow>
      <CustomRow>
        <CustomCol {...{ xs: 24, sm: 24, md: 24, xl: 24 }}>
          <CustomRow justify={'center'}>
            <CustomTitle level={2}>
              Bienvenido al Gestor De Formalizaciones
            </CustomTitle>
          </CustomRow>
        </CustomCol>
      </CustomRow>

      <CustomRow>
        <CustomCol {...{ xs: 24, sm: 24, md: 24, xl: 24 }}>
          <CustomRow justify={'center'}>
            <CustomText>Bienvenido al Gestor De Formalizaciones</CustomText>
          </CustomRow>
        </CustomCol>
      </CustomRow>

      <CustomRow justify='center'>
        <CustomCol {...{ xs: 24, sm: 6, md: 5, xl: 3 }}>
          <CustomButton
            type={'primary'}
            style={{ borderColor: 'white' }}
            onClick={handleOnClickPhysical}
          >
            Persona Fisica
          </CustomButton>
        </CustomCol>

        <CustomCol {...{ xs: 24, sm: 7, md: 4, xl: 2 }}>
          <CustomButton
            type={'primary'}
            style={{ borderColor: 'white' }}
            onClick={handleOnClicklegal}
          >
            Persona Juridica
          </CustomButton>
        </CustomCol>
      </CustomRow>

      <CustomRow justify='center'>
        <CustomCol {...{ xs: 24, sm: 8, md: 5, xl: 3 }}>
          <CustomButton
            type={'primary'}
            style={{ borderColor: 'white' }}
            onClick={handleOnClick}
          >
            Pendientes de Formalizar
          </CustomButton>
        </CustomCol>
      </CustomRow>
    </ContentContainer>
  )
}
export default FormalizationManagerDashboard
