import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide} from '../../../BComponents'

export default function Nineth(props) {
  return (
    <BSlide {...props}>
      <Text textAlign='left' textSize={34} margin='50px 0'>
        <S type='bold'>Why did we return a function from our effect?</S> This is the optional cleanup mechanism for
        effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and
        removing subscriptions close to each other. They’re part of the same effect!
      </Text>
      <Text textAlign='left' textSize={34}>
        <S type='bold'>When exactly does React clean up an effect?</S> React performs the cleanup when the component
        unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also
        cleans up effects from the previous render before running the effects next time.
      </Text>
    </BSlide>
  )
}
