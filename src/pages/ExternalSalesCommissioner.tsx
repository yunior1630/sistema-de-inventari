import React from 'react'
import {
  CustomCol,
  CustomForm,
  CustomFormItem,
  CustomModal,
  CustomRadio,
  CustomRadioGroup,
  CustomTitle,
} from '../components'
import { RadioChangeEvent } from 'antd/lib/radio'
import ExternalCommissionerPhysicalSale from '../components/ExternalCommissionerPhysicalSale'
import ExternalCommissionerLegalSale from '../components/ExternalCommissionerLegalSale'
import { validateMessages } from '../constants/general'
import { formItemLayout } from '../themes'
import { Form } from 'antd'

const ExternalSalesCommissioner = (): React.ReactElement => {
  const [form] = Form.useForm()
  const [
    entryStateFilterLegalPhysical,
    setEntryStateFilterLegalPhysical,
  ] = React.useState('')
  const handleStateFilterRadioChangeLegalPhysical = (e: RadioChangeEvent) => {
    setEntryStateFilterLegalPhysical(e.target.value)
  }
  return (
    <CustomModal
      width={'60%'}
      visible={true}
      closable={false}
      onOk={() => {
        form.validateFields()
      }}
    >
      <CustomForm
        {...formItemLayout}
        validateMessages={validateMessages}
        form={form}
      >
        <CustomTitle>Comisionista Externo de Ventas</CustomTitle>
        <CustomFormItem
          name='tipo_persona'
          label='Tipo Persona'
          rules={[{ required: true }]}
        >
          <CustomRadioGroup
            onChange={handleStateFilterRadioChangeLegalPhysical}
          >
            <CustomRadio value={'F'}>Física</CustomRadio>
            <CustomRadio value={'J'}>Jurídica</CustomRadio>
          </CustomRadioGroup>
        </CustomFormItem>
        <CustomCol span={15}>
          {entryStateFilterLegalPhysical === 'F' && (
            <ExternalCommissionerPhysicalSale />
          )}
        </CustomCol>
        <CustomCol span={15}>
          {entryStateFilterLegalPhysical === 'J' && (
            <ExternalCommissionerLegalSale />
          )}
        </CustomCol>
      </CustomForm>
    </CustomModal>
  )
}
export default ExternalSalesCommissioner
