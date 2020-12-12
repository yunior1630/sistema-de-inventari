import React from 'react'
import { CustomCol, CustomForm, CustomRow, CustomTitle } from '../components'
import IncomeInformation from '../components/IncomeInformation'
import GeneralDataOfNaturalPerson from '../components/GeneralDataOfNaturalPerson'
import LaborAddress from '../components/LaborAddress'
import { ContentContainer, validateMessages } from '../constants/general'
import { formItemLayout } from '../themes'
import CustomButton from './CustomButton'

const PhysicalPersonRegistration = (): React.ReactElement => {
  return (
    <ContentContainer>
      <CustomForm {...formItemLayout} validateMessages={validateMessages}>
        <CustomTitle>Registro De Persona Física</CustomTitle>
        <CustomRow justify={'center'}>
          <CustomCol span={20}>
            <CustomTitle level={4}>
              Datos generales de persona física
            </CustomTitle>
          </CustomCol>
        </CustomRow>
        <GeneralDataOfNaturalPerson />

        <CustomRow justify={'center'}>
          <CustomCol span={18}>
            <CustomRow justify={'start'}>
              <CustomCol span={12}>
                <CustomTitle level={4}>Informacion de Ingreso</CustomTitle>
              </CustomCol>

              <CustomCol span={3}>
                <CustomButton>Agregar Representante</CustomButton>
              </CustomCol>
            </CustomRow>
          </CustomCol>
        </CustomRow>

        <IncomeInformation />

        <CustomRow justify={'center'}>
          <CustomCol span={20}>
            <CustomTitle level={4}>Dirección Laboral</CustomTitle>
          </CustomCol>
        </CustomRow>
        <LaborAddress />
      </CustomForm>
    </ContentContainer>
  )
}
export default PhysicalPersonRegistration
