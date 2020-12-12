import React from 'react'
import styled from 'styled-components'
import { CustomButton } from '../components'
import {
  AudioOutlined,
  CloudUploadOutlined,
  FullscreenOutlined,
  PlusOutlined,
} from '@ant-design/icons'
export const FormContainer = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`
export const ContentContainer = styled.div`
  text-align: start;
  background-color: white;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`
export const DarkBlueButton = styled(CustomButton)`
  color: white;
  background-color: #002766;
  border: 50px;
  &:hover {
    background: #0050b3;
  }
  &:focus {
    background: #0050b3;
  }
`

export const validateMessages = {
  required: `'$\{label}' es requerido.`,
  types: {
    email: `'$\{label}' no es un email válido.`,
    number: `'$\{label}' no es un número válido!`,
    string: `'$\{label}' no es un valor válido!`,
  },
  number: {
    len: `'$\{label}' debe tener exactamente '$\{len}' caracteres.`,
  },
  string: {
    len: `'$\{label}' debe tener exactamente '$\{len}' caracteres.`,
  },
}

export const CustomIcons = {
  AudioOutlined: <AudioOutlined style={{ fontSize: 16, color: '#1890ff' }} />,
  CloudUploadOutlined,
  FullscreenOutlined,
  PlusOutlined,
}
