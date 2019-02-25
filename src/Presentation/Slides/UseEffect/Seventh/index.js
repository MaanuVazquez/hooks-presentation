import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide, BCodePane} from '../../../BComponents'
import classExample from './examples/class.example'

export default function Seventh(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32}>
        <S type='bold'>Effects With Cleanup (Class)</S>
      </Text>
      <BCodePane className='codePane-medium' source={classExample} />
    </BSlide>
  )
}
