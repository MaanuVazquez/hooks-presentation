import React from 'react'
import {Heading, Text, S} from 'spectacle'
import {BSlide, BList, BListItem, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Nineth(props) {
  return (
    <BSlide {...props}>
      <Heading size={5}>Before we continue..</Heading>
      <Text textAlign='left' textSize='28'>
        Hooks are JavaScript functions, but you need to follow two rules when using them.
      </Text>
      <Text textAlign='left' textSize='30' margin='20px 0'>
        <S type='bold'>Only Call Hooks at the Top Level</S>
      </Text>
      <Text textAlign='left' textSize='26'>
        Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of
        your React function. By following this rule, you ensure that Hooks are called in the same order each time a
        component renders. That’s what allows React to correctly preserve state of Hooks between multiple{' '}
        <BS color={colors.primary} type='normal'>
          useState
        </BS>{' '}
        and{' '}
        <BS color={colors.primary} type='normal'>
          useEffect
        </BS>{' '}
        calls.
      </Text>
      <Text textAlign='left' textSize='30' margin='20px 0'>
        <S type='bold'>Only Call Hooks from React Functions</S>
      </Text>
      <Text textAlign='left' textSize='26'>
        Don’t call Hooks from regular JavaScript functions. Instead you can:
      </Text>
      <BList textSize='26'>
        <S type='bold'>
          <BListItem textSize='26'>Call Hooks from React function components.</BListItem>
          <BListItem textSize='26'>Call Hooks from custom Hooks.</BListItem>
        </S>
      </BList>
      <Text textAlign='left' textSize='24'>
        By following this rule, you ensure that all stateful logic in a component is clearly visible from its source
        code.
      </Text>
    </BSlide>
  )
}
