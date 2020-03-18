import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function ControlledInputBox (props) {
  const { handleInputChange, textBoxValue, errorShowFlag } = props

  return (
    <>
      <input type='text' value={textBoxValue} onChange={handleInputChange} />
      {errorShowFlag && <ErrorMessage errorMsg='Please enter city name' />}
    </>
  )
}
