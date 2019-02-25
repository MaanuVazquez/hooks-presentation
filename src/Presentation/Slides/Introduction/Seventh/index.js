import React from 'react'
import {Heading, Text} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Seventh(props) {
  return (
    <BSlide {...props}>
      <Heading size={5}>Complex components become hard to understand</Heading>
      <Text textAlign='left' textSize={30}>
        We’ve often had to maintain components that started out simple but grew into unmanageable mess of stateful logic
        and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might
        perform some data fetching in{' '}
        <BS color={colors.primary} type='normal'>
          componentDidMount
        </BS>{' '}
        and{' '}
        <BS color={colors.primary} type='normal'>
          componentDidUpdate
        </BS>
        . However, the same{' '}
        <BS color={colors.primary} type='normal'>
          componentDidMount
        </BS>{' '}
        method might also contain some unrelated logic that sets up event listeners, with cleanup perfomed in{' '}
        <BS color={colors.primary} type='normal'>
          componentWillUnmount
        </BS>
        . Mutually related code that changes together gets split apart, but completely unrelated code ends up combined
        in a single method. This makes it too easy to introduce bugs and inconsistencies.
      </Text>
      <Text textAlign='left' textSize={30} margin='20px 0 0 0'>
        In many cases it’s not possible to break these components into smaller ones because the stateful logic is all
        over the place. It’s also difficult to test them.
      </Text>
      <Text textAlign='left' textSize={30} margin='20px 0 0 0'>
        To solve this,{' '}
        <BS color={colors.primary} type='normal'>
          Hooks lets you split one component into smaller functions based on what pieces are related (such as setting up
          a subscription or fetching data)
        </BS>
        , rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local
        state with reducer to make it more predictable
      </Text>
    </BSlide>
  )
}
