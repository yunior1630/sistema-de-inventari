import React from 'react'
import { RadioChangeEvent } from 'antd/lib/radio'
import {
  CustomCol,
  CustomDatePicker,
  CustomFormItem,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSelect,
  Option,
} from '.'

const IncomeInformation = (): React.ReactElement => {
  const [entryStateFilterVoucher, setEntryStateFilterVoucher] = React.useState()
  const handleStateFilterRadioChangeVoucher = (e: RadioChangeEvent) => {
    setEntryStateFilterVoucher(e.target.value)
  }

  return (
    <>
      <CustomRow justify={'start'}>
        <CustomCol span={15}>
          <CustomRow justify={'start'}>
            <CustomCol span={24}>
              <CustomFormItem
                label={'Ocupación'}
                name={'ocupacion'}
                labelCol={{ span: 5 }}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Ocupación'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={12} style={{ padding: '0px 5px 0px 0px' }}>
              <CustomFormItem
                label={'Posición que Ocupa'}
                name={'posicion_que_ocupa'}
                labelCol={{ span: 10 }}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Posición que Ocupa'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={12}>
              <CustomFormItem
                name="tipo_empleo"
                label={'Tipo de empleo'}
                labelCol={{ span: 8 }}
                rules={[{ required: true }]}
              >
                <CustomRadioGroup
                  onChange={handleStateFilterRadioChangeVoucher}
                  value={entryStateFilterVoucher}
                >
                  <CustomRadio value={1}>Privado</CustomRadio>
                  <CustomRadio value={2}>Publico</CustomRadio>
                  <CustomRadio value={2}>Independiente</CustomRadio>
                </CustomRadioGroup>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={24}>
              <CustomFormItem
                label={'Lugar de Trabajo'}
                name={'lugar_trabajo'}
                labelCol={{ span: 5 }}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Lugar de Trabajo'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={11}>
              <CustomFormItem
                label={'Supervisor'}
                name={'supervisor'}
                labelCol={{ span: 11 }}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Supervisor'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={11}>
              <CustomFormItem
                label={'Fecha ingreso'}
                name={'fecha ingreso'}
                labelCol={{ span: 10 }}
              >
                <CustomDatePicker
                  allowClear
                  format={'DD/MM/YYYY'}
                  style={{ width: '100%' }}
                />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={12}>
              <CustomFormItem
                label={'Ingreso'}
                name={'ingreso'}
                labelCol={{ span: 10 }}
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
                  <CustomCol span={14}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Ingreso'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={10}>
                    <CustomFormItem noStyle>
                      <CustomSelect placeholder={'Peso'}>
                        <Option value="A">A</Option>
                      </CustomSelect>
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={12}>
              <CustomFormItem
                label={'Otros ingreso'}
                name={'otros_ingreso'}
                labelCol={{ span: 7 }}
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
                  <CustomCol span={14}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Otros ingreso'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={10}>
                    <CustomFormItem noStyle>
                      <CustomSelect placeholder={'otro ingreso'}>
                        <Option value="A">A</Option>
                      </CustomSelect>
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={24}>
              <CustomFormItem
                label={'Justifique'}
                name={'justifique'}
                labelCol={{ span: 5 }}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Justifique'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomCol>
      </CustomRow>
    </>
  )
}
export default IncomeInformation
