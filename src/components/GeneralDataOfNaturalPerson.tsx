import React, { useEffect } from 'react'
import { RadioChangeEvent } from 'antd/lib/radio'
import { CloudUploadOutlined } from '@ant-design/icons'

import {
  CustomButton,
  CustomCol,
  CustomFormItem,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  CustomRow,
  CustomSelect,
  Option,
} from '.'
import CustomDatePicker from './CustomDatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getNationalities } from '../actions/general'
import { StoreState } from '../reducers'
const GeneralDataOfNaturalPerson = (): React.ReactElement => {
  const [entryStateFilterVoucher, setEntryStateFilterVoucher] = React.useState()
  const handleStateFilterRadioChangeVoucher = (e: RadioChangeEvent) => {
    setEntryStateFilterVoucher(e.target.value)
  }
  const dispatch = useDispatch()
  const { nationalities } = useSelector((state: StoreState) => state.general)

  useEffect(() => {
    dispatch(getNationalities())
  }, [dispatch])
  return (
    <>
      <CustomRow justify={'start'}>
        <CustomCol span={17}>
          <CustomRow justify={'start'}>
            <CustomCol span={10}>
              <CustomFormItem
                label={'Código'}
                name={'codigo'}
                labelCol={{ span: 12 }}
                rules={[{ required: true }]}
              >
                <CustomInput disabled placeholder={'Código'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={14}>
              <CustomFormItem
                label={'DGII'}
                name={'dgii'}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput disabled placeholder={'DGII'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={10}>
              <CustomFormItem
                label={'Cédula / RNC'}
                name={'rnc'}
                labelCol={{ span: 12 }}
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
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Cédula / RNCF'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={2}>
                    <CustomFormItem noStyle>
                      <CustomButton
                        type="primary"
                        icon={<CloudUploadOutlined />}
                      />
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={5} style={{ padding: '0px 5px 0px 0px' }}>
              <CustomRow justify={'center'}>
                <CustomFormItem>
                  <CustomButton type="primary" icon={<CloudUploadOutlined />}>
                    Licencia
                  </CustomButton>
                </CustomFormItem>
              </CustomRow>
            </CustomCol>

            <CustomCol span={8}>
              <CustomFormItem
                label={'Pasaporte'}
                name={'pasaporte'}
                labelCol={{ span: 12 }}
                rules={[{ required: true }]}
                onlyLetters
              >
                <CustomRow justify={'start'}>
                  <CustomCol span={22}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Pasaporte'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={2}>
                    <CustomFormItem noStyle>
                      <CustomButton
                        type="primary"
                        icon={<CloudUploadOutlined />}
                      />
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={24}>
              <CustomFormItem
                label={'Nombre(s)'}
                name={'nombre'}
                labelCol={{ span: 5 }}
                onlyLetters
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Nombre'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomCol span={24}>
            <CustomFormItem
              label={'Apellido(s)'}
              name={'Apellido'}
              labelCol={{ span: 5 }}
              onlyLetters
              rules={[{ required: true }]}
            >
              <CustomInput placeholder={'Apellido'} />
            </CustomFormItem>
          </CustomCol>

          <CustomRow justify={'start'}>
            <CustomCol span={15} style={{ padding: '0px 5px 0px 0px' }}>
              <CustomFormItem
                label={'Apodo'}
                name={'apodo'}
                labelCol={{ span: 8 }}
              >
                <CustomInput placeholder={'Apodo (opcional)'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={9}>
              <CustomFormItem label={'Sexo'} name={'sexo'}>
                <CustomRadioGroup
                  onChange={handleStateFilterRadioChangeVoucher}
                  value={entryStateFilterVoucher}
                >
                  <CustomRadio value={1}>Masculino</CustomRadio>
                  <CustomRadio value={2}>Femenino</CustomRadio>
                </CustomRadioGroup>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={12} style={{ padding: '0px 5px 0px 0px' }}>
              <CustomFormItem
                label={'Nacionalidad'}
                name={'nacionalidad'}
                labelCol={{ span: 10 }}
                rules={[{ required: true }]}
              >
                <CustomSelect placeholder={'Nacionalidad'} allowClear>
                  {nationalities.map((nationality: string, index: number) => (
                    <Option
                      key={`${nationality}-${index}`}
                      value={`${nationality}`}
                    >
                      {nationality}
                    </Option>
                  ))}
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={12}>
              <CustomFormItem label={'Estado civil'} name={'estado_civil'}>
                <CustomRadioGroup
                  onChange={handleStateFilterRadioChangeVoucher}
                  value={entryStateFilterVoucher}
                >
                  <CustomRadio value={1}>Soltero</CustomRadio>
                  <CustomRadio value={2}>Casado</CustomRadio>
                  <CustomRadio value={2}>Union Libre</CustomRadio>
                </CustomRadioGroup>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={11}>
              <CustomFormItem
                label={'Lugar Nac'}
                name={'lugar_nac'}
                labelCol={{ span: 11 }}
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Lugar Nac'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={11}>
              <CustomFormItem
                label={'Fecha nac'}
                name={'fecha nac'}
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
            <CustomCol span={11}>
              <CustomFormItem
                label={'PEPS'}
                name={'peps'}
                labelCol={{ span: 11 }}
                rules={[{ required: true }]}
              >
                <CustomSelect placeholder={'PEPS'}>
                  <Option value="A">A</Option>
                </CustomSelect>
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={11}>
              <CustomFormItem
                label={'Vínculado A'}
                name={'vinculado'}
                labelCol={{ span: 10 }}
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Vinculado A'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={10}>
              <CustomFormItem
                label={'Cargo'}
                name={'cargo'}
                labelCol={{ span: 12 }}
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Cargo'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={12}>
              <CustomFormItem
                label={'Provincia'}
                name={'provincia'}
                labelCol={{ span: 11 }}
                rules={[{ required: true }]}
              >
                <CustomRow justify={'start'}>
                  <CustomCol span={14}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'provincia'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={10}>
                    <CustomFormItem noStyle>
                      <CustomInput placeholder={'provinicia'} />
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomCol>
      </CustomRow>
    </>
  )
}
export default GeneralDataOfNaturalPerson
