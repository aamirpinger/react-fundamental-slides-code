import React from 'react'

export default function ErrorMessage (props) {
  const { errorMsg } = props

  return <span style={{ color: 'red' }}>{errorMsg}</span>
}
