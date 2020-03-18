import React from 'react'
import MyComponent from '../MyComponent/MyComponent'
import MyFunctionalComponent from '../MyFunctionalComponent/MyFunctionalComponent'

export default function CityList (props) {
  const { city } = props.match.params
  return (
    <>
      <MyFunctionalComponent heading={`Cities List - ${city}`} />
      <MyComponent />
    </>
  )
}
