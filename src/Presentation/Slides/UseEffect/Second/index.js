import React from 'react'
import {Text, Heading, CodePane} from 'spectacle'
import {BSlide} from '../../../BComponents'
import functionExample from './examples/function.example'

export default function Second(props) {
  return (
    <BSlide {...props}>
      <Heading size={6}>Using the useEffect hook</Heading>
      <Text textAlign='left' textSize={30}>
        The Effect Hook lets you perform side effects in function components:
      </Text>
      <CodePane className='codePane-medium' lang='jsx' source={functionExample} />
      <Text textAlign='left' textSize={24} margin='15px 0'>
        This snippet is based on the counter example from the first chapter, but we added a new feature to it: we set
        the document title to a custom message including the number of clicks.
      </Text>
      <Text textAlign='left' textSize={28}>
        Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of
        side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve
        likely performed them in your components before.
      </Text>
    </BSlide>
  )
}
