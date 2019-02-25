import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide, BS, BCodePane} from '../../../BComponents'
import {colors} from '../../../theme'
import hooksExample from './examples/hooks.example'

export default function Fifth(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32}>
        <S type='bold'>Effects Without Cleanup (Hooks)</S>
      </Text>
      <BCodePane className='codePane-medium' source={hooksExample} />
      <Text textAlign='left' textSize={24} margin='15px 0'>
        <BS color={colors.primary} type='normal'>
          Now we do not need to duplicate the code
        </BS>
        .
      </Text>
    </BSlide>
  )
}
