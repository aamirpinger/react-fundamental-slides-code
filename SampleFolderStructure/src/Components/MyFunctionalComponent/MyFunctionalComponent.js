import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 36px;
  color: Olive;
`

export default function MyFunctionalComponent (props) {
  const { heading } = props
  return <H1 style={{ textDecoration: 'underline' }}>{heading}</H1>
}
