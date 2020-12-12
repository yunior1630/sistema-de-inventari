import React, { Key, useEffect } from 'react'
import {
  CustomCol,
  CustomFormItem,
  CustomInput,
  CustomRow,
  CustomSelect,
  Option,
} from '.'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../actions/general'
import { StoreState } from '../reducers'
import { GeneralCountriesType } from '../reducers/general'

const LaborAddress = (): React.ReactElement => {
  const [openStateModal, setOpenStateModal] = React.useState('')
  const dispatch = useDispatch()
  const { countries } = useSelector((state: StoreState) => state.general)

  const funci = (valor: Key) => {
    setOpenStateModal(valor.toString())
  }

  useEffect(() => {
    dispatch(getCountries('A'))
  }, [dispatch])
  return (
    <>
      <CustomRow justify={'start'}>
        <CustomCol span={17}>
          <CustomRow justify={'start'}>
            <CustomCol span={15}>
              <CustomFormItem
                label={'Pais'}
                name={'pais'}
                onlyLetters
                labelCol={{ span: 11 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomRow justify={'start'}>
                  <CustomCol span={7}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput
                        placeholder={'Pais'}
                        value={openStateModal}
                        readOnly
                      />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={17}>
                    <CustomFormItem noStyle>
                      <CustomSelect
                        placeholder={'Nacionalidad'}
                        onChange={(valor) => funci(valor)}
                        allowClear
                      >
                        {countries.map((countries: GeneralCountriesType) => (
                          <Option
                            key={`${countries.ID_PAIS}`}
                            value={`${countries.ID_PAIS}`}
                          >
                            {countries.DESC_PAIS}
                          </Option>
                        ))}
                      </CustomSelect>
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={15}>
              <CustomFormItem
                label={'Ciudad'}
                name={'ciudad'}
                onlyLetters
                labelCol={{ span: 11 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomRow justify={'start'}>
                  <CustomCol span={7}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Ciudad'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={17}>
                    <CustomFormItem noStyle>
                      <CustomSelect placeholder={'Ciudad'}>
                        <Option value="A">A</Option>
                      </CustomSelect>
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={15}>
              <CustomFormItem
                label={'Municipio'}
                name={'municipio'}
                onlyLetters
                labelCol={{ span: 11 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomRow justify={'start'}>
                  <CustomCol span={7}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Municipio'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={17}>
                    <CustomFormItem noStyle>
                      <CustomSelect placeholder={'Municipio'}>
                        <Option value="A">A</Option>
                      </CustomSelect>
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={15}>
              <CustomFormItem
                label={'Sector'}
                onlyLetters
                name={'sector'}
                labelCol={{ span: 11 }}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <CustomRow justify={'start'}>
                  <CustomCol span={7}>
                    <CustomFormItem noStyle rules={[{ required: true }]}>
                      <CustomInput placeholder={'Sector'} />
                    </CustomFormItem>
                  </CustomCol>

                  <CustomCol span={17}>
                    <CustomFormItem noStyle>
                      <CustomSelect placeholder={'Sector'}>
                        <Option value="A">A</Option>
                      </CustomSelect>
                    </CustomFormItem>
                  </CustomCol>
                </CustomRow>
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={15}>
              <CustomFormItem
                label={'Calle'}
                name={'calle'}
                labelCol={{ span: 11 }}
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Calle'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={8}>
              <CustomFormItem
                label={'Casa No./KM.'}
                name={'casa_km'}
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
                <CustomInput placeholder={'Casa No./KM.'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={15}>
              <CustomFormItem
                label={'Edificio'}
                name={'edificio'}
                labelCol={{ span: 11 }}
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Edificio'} />
              </CustomFormItem>
            </CustomCol>

            <CustomCol span={8}>
              <CustomFormItem
                label={'Aprt No.'}
                name={'Aprt'}
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
                <CustomInput placeholder={'Aprt No.'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>

          <CustomRow justify={'start'}>
            <CustomCol span={23}>
              <CustomFormItem
                label={'Proximo  A'}
                name={'Proximo'}
                labelCol={{ span: 7 }}
                rules={[{ required: true }]}
              >
                <CustomInput placeholder={'Proximo A'} />
              </CustomFormItem>
            </CustomCol>
          </CustomRow>
        </CustomCol>
      </CustomRow>
    </>
  )
}
export default LaborAddress
