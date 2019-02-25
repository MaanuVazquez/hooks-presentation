import React from 'react'
import {Heading} from 'spectacle'
import {BSlide, Index} from '../../../BComponents'

export default function Second(props) {
  return (
    <BSlide {...props}>
      <Index title='REACT HOOKS' index='Introduction' />
      <Heading textColor='secondary' size={6}>
        What is a hook?
      </Heading>
    </BSlide>
  )
}
