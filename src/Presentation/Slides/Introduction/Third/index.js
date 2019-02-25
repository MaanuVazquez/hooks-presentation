import React from 'react'
import {Text, CodePane} from 'spectacle'
import {BSlide} from '../../../BComponents'
import Introduction from './examples/introduction.example'

export default function Third(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32} textAlign='c'>
        Hooks are a new addition in React 16.8. They let you use state and other React Features without writing a class.
      </Text>
      <br />
      <CodePane className='codePane' lang='jsx' source={Introduction} />
      <Text textSize={32} textAlign='left' margin='35px 0 0 0'>
        <strong>But what is a Hook?</strong> A hook is a special function that lets you “hook into” React features. For
        example, useState is a hook that lets you add React to function components.
      </Text>
      <Text textSize={32} textAlign='left' margin='20px 0 0 0'>
        <strong>When would I use a hook?</strong> If you write a function component and realize that you need to add
        some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing
        function component
      </Text>
    </BSlide>
  )
}
