import React from 'react'
import Card from './Card'

function generateColor() {
  const hexValue = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
  let hexColor = '#'

  for(let i = 0 ; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    hexColor += hexValue[randomIndex]
  }
  return hexColor.toUpperCase()
}

function multipleCards() {
  let rowLength = 4
  let columnLength = 8
  let cardMatrix = []

  for(let r = 0 ; r < rowLength; r++) {
    for(let c = 0 ; c  < columnLength; c++) {
      cardMatrix.push(<Card key={`${r}${c}`} color={generateColor()}/>)
    }
  }

  return cardMatrix
}

const Cards = (props) => {
  return (
    <div>
     {props.isCardRefresh ? null : multipleCards()}
    </div>
  )
}

export default Cards