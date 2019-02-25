import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide, BS, BCodePane} from '../../../BComponents'
import {colors} from '../../../theme'
import hooksExample from './examples/function.example'

export default function Eighth(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32}>
        <S type='bold'>Effects With Cleanup (Hooks)</S>
      </Text>
      <BCodePane className='codePane-medium' source={hooksExample} />
      <Text textAlign='left' textSize={28} margin='30px 0 0 0'>
        You might be thinking that we’d need a separate effect to perform the cleanup. But code for adding and removing
        a subscription is so tightly related that{' '}
        <BS color={colors.primary} type='normal'>
          useEffect
        </BS>{' '}
        is designed to keep it together. If your effect returns a function, React will run it when it is time to clean
        up
      </Text>
    </BSlide>
  )
}
