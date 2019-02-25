import React from 'react'
import {Heading, Text} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Eighth(props) {
  return (
    <BSlide {...props}>
      <Heading size={5}>Classes confuse both people and machines</Heading>
      <Text textAlign='left' textSize={30}>
        In addition to making code reuse and code organization more difficult, the React team found that classes can be
        a large barrier to learning React. You have to understand how{' '}
        <BS color={colors.primary} type='normal'>
          this
        </BS>{' '}
        works in Javascript, which is very different from how it works in most languages. You have to remember to bind
        the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props,
        state, and top-down data flow perfectly well but still struggle with classes. The distinction between function
        and class components in React and when to use each one leads to disagreements even between experienced React
        developers.
      </Text>
      <Text textAlign='left' textSize={30} margin='20px 0 0 0'>
        Additionally class components can encourage unintentional patterns that make optimizations fall back to a slower
        path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make
        hot reloading flaky and unreliable.
      </Text>
      <Text textAlign='left' textSize={30} margin='20px 0 0 0'>
        To solve these problems,{' '}
        <BS color={colors.primary} type='normal'>
          Hooks let you use more of React’s features without classes
        </BS>
        . Conceptually, React components have always been closer to functions. Hooks embrace functions, but without
        sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require
        you to learn complex functional or reactive programming techniques.
      </Text>
    </BSlide>
  )
}
