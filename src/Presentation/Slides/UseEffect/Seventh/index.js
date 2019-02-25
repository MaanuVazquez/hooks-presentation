import React from 'react'
import {CodePane, Text, S} from 'spectacle'
import {BSlide} from '../../../BComponents'
import classExample from './examples/class.example'

export default function Seventh(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32}>
        <S type='bold'>Effects With Cleanup (Class)</S>
      </Text>
      <CodePane lang='jsx' className='codePane-medium' source={classExample} />
    </BSlide>
  )
}
