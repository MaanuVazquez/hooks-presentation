import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Third(props) {
  return (
    <BSlide {...props}>
      <Text textAlign='left' textSize={32}>
        There are two common kinds of side effects in React components: those that don’t require cleanup, and those that
        do. Let’s look at this distinction in more detail.
      </Text>
      <Text textAlign='left' textSize={34} margin='15px 0'>
        <S type='bold'>Effects Without Cleanup</S>
      </Text>
      <Text textAlign='left' textSize={28}>
        Sometimes,{' '}
        <BS color={colors.primary} type='normal'>
          we want to run some additional code after React has updated the DOM
        </BS>
        . Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a
        cleanup. We say that because we can run them and immediately forget about them.
      </Text>
      <Text textAlign='left' textSize={34} margin='15px 0'>
        <S type='bold'>Effects With Cleanup</S>
      </Text>
      <Text textAlign='left' textSize={28} margin='15px 0'>
        Some effects do require to do some cleanup. For
        example,{' '}
        <BS color={colors.primary} type='normal'>
          we might want to set up a subscription
        </BS>{' '}
        to some external data source. In that case, it is important to clean up so that we don’t introduce a memory
        leak! Let’s compare how we can do it with classes and with Hooks.
      </Text>
    </BSlide>
  )
}
