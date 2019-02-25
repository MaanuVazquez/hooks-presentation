import React from 'react'
import {Text, S} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Fifth(props) {
  return (
    <BSlide {...props}>
      <Text textAlign='left' textSize={28} margin='15px 0'>
        <S type='bold'>What does useEffect do?</S> By using this Hook, you tell React that your component needs to do
        something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and
        call it later after performing the DOM updates. In the previous example, we set the document title, but we could
        also perform data fetching or call some other imperative API.
      </Text>
      <Text textAlign='left' textSize={28} margin='15px 0'>
        <S type='bold'>Why is useEffect called inside a component?</S> Placing{' '}
        <BS color={colors.primary} type='normal'>
          useEffect
        </BS>{' '}
        inside the component lets us access the count state variable (or any props) right from the effect. We don’t need
        a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid
        introducing React-specific APIs where JavaScript already provides a solution.
      </Text>
      <Text textAlign='left' textSize={28} margin='15px 0'>
        <S type='bold'>Does useEffect run after every render?</S> Yes! By default, it runs both after the first render
        and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to
        think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the
        effects.
      </Text>
    </BSlide>
  )
}
