import React from 'react'
import styled from 'styled-components'
import logo from './flag.png'
import bgTile from './tile-bg.jpg'

const Button = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
    background-color: white;
    color: black;
  }
`
const Div = styled.div`
  min-width: 80%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted navy;
  background-color: navy;
`

const H1 = styled.h1`
  color: navy;
  font-family: Arial;
`

// use styled() for inheritence
const DivNew = styled(Div)`
  background-color: lightblue;
  background-image: url(${bgTile});
  backgound
`

function App () {
  return (
    <Div>
      <DivNew>
        <H1>styled-component Example</H1>
        <img src={logo} alt='Logo' />;<Button>Hello World</Button>
        <Button>Button re-used</Button>
      </DivNew>
    </Div>
  )
}

export default App
