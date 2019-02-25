import React from 'react'
import {Heading} from 'spectacle'
import {BSlide, Index} from '../../../BComponents'

export default function First(props) {
  return (
    <BSlide {...props}>
      <Index title='REACT HOOKS' index='usestate hook' />
      <Heading textColor='secondary' size={6}>
        State in functional components
      </Heading>
    </BSlide>
  )
}
