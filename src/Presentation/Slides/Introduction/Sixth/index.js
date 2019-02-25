import React from 'react'
import {Heading, Text} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Sixth(props) {
  return (
    <BSlide {...props}>
      <Heading size={5}>It is hard to reuse stateful logic between components</Heading>
      <Text textAlign='left' textSize={30}>
        React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store).
        If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order
        components that try to solve this. But these patterns require you to restructure your components when you use
        them, which can be cumbersome and make code harder to follow. If you look at a typical React application in
        React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers,
        consumers, higher-order components, render props, and other abstractions.
      </Text>
      <Text textAlign='left' textSize={32} margin='20px 0 0 0'>
        <BS color={colors.primary} type='bold'>
          So what is the problem here?
        </BS>{' '}
        React needs a better primitive for sharing stateful logic.
      </Text>
      <Text textAlign='left' textSize={30} margin='20px 0 0 0'>
        With hooks, you can extract stateful logic from a component so it can be tested independently and reused.
        <BS color={colors.primary} type='normal'>
          Hooks allow you to reuse stateful logic without changing your component hierarchy
        </BS>
        . This makes it easy to share Hooks among many components or even with the community
      </Text>
    </BSlide>
  )
}
