import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide, BS, BCodePane} from '../../../BComponents'
import classExample from './examples/class.example'
import {colors} from '../../../theme'

export default function Fourth(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32}>
        <S type='bold'>Effects Without Cleanup (Class)</S>
      </Text>
      <BCodePane className='codePane-medium' source={classExample} />
      <Text textAlign='left' textSize={24} margin='15px 0'>
        Note how{' '}
        <BS color={colors.primary} type='normal'>
          we have to duplicate the code between these two lifecycle methods in class
        </BS>
        .
      </Text>
      <Text textAlign='left' textSize={24}>
        This is because in many cases we want to perform the same side effect regardless of whether the component just
        mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class
        components don’t have a method like this. We could extract a separate method but we would still have to call it
        in two places.
      </Text>
    </BSlide>
  )
}
