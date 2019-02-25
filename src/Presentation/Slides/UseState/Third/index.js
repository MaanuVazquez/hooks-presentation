import React from 'react'
import {Text} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import {colors} from '../../../theme'

export default function Third(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32} textAlign='left' margin='15px 0px'>
        <BS type='bold'>What does calling useState do?</BS> It declares a “state variable”. Our variable is called{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        but we could call it anything else, like{' '}
        <BS color={colors.primary} type='normal'>
          banana
        </BS>
        . This is a way to “preserve” some values between the function calls —{' '}
        <BS color={colors.primary} type='normal'>
          useState
        </BS>{' '}
        is a new way to use the exact same capabilities that{' '}
        <BS color={colors.primary} type='normal'>
          this.state
        </BS>{' '}
        provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved
        by React.
      </Text>
      <Text textSize={32} textAlign='left' margin='15px 0px'>
        <BS type='bold'>What do we pass to useState as an argument?</BS> The only argument to the{' '}
        <BS color={colors.primary} type='normal'>
          useState()
        </BS>{' '}
        Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or
        a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so
        pass{' '}
        <BS color={colors.primary} type='normal'>
          0
        </BS>{' '}
        as initial state for our variable. (If we wanted to store two different values in state, we would call{' '}
        <BS color={colors.primary} type='normal'>
          useState()
        </BS>
        twice.)
      </Text>
      <Text textSize={32} textAlign='left' margin='15px 0px'>
        <BS type='bold'>What does useState return?</BS> It returns a pair of values: the current state and a function
        that updates it. This is why we write{' '}
        <BS color={colors.primary} type='normal'>
          const [count, setCount] = useState()
        </BS>
        . This is similar to{' '}
        <BS color={colors.primary} type='normal'>
          this.state.count
        </BS>{' '}
        and{' '}
        <BS color={colors.primary} type='normal'>
          this.setState
        </BS>{' '}
        in a class, except you get them in a pair.
      </Text>
    </BSlide>
  )
}
