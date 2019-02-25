import React from 'react'
import {Heading} from 'spectacle'

export default function Index({title, index}) {
  return (
    <>
      <Heading size={1} textColor='primary' caps>
        {title}
      </Heading>
      <Heading size={4} textColor='secondary' caps>
        {index}
      </Heading>
    </>
  )
}
