import React from 'react'
import {Heading, Text} from 'spectacle'
import {BSlide, BS, BCodePane} from '../../../BComponents'
import {colors} from '../../../theme'
import classExample from './examples/class.example'
import hookExample from './examples/hook.example'

export default function Tenth(props) {
  return (
    <BSlide {...props}>
      <Heading size={6}>A note on useEffect</Heading>
      <Text textAlign='left' textSize={24} margin='15px 0'>
        In some cases, cleaning up or applying the effect after every render might create a performance problem. In
        class components, we can solve this by writing an extra comparison with{' '}
        <BS color={colors.primary} type='normal'>
          prevProps
        </BS>{' '}
        or{' '}
        <BS color={colors.primary} type='normal'>
          prevState
        </BS>{' '}
        inside{' '}
        <BS color={colors.primary} type='normal'>
          prevProps
        </BS>{' '}
        :
      </Text>
      <BCodePane className='codePane-medium' source={classExample} />
      <Text textAlign='left' textSize={24} margin='15px 0'>
        This requirement is common enough that it is built into the{' '}
        <BS color={colors.primary} type='normal'>
          useEffect
        </BS>{' '}
        Hook API. You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To
        do so, pass an array as an optional second argument to{' '}
        <BS color={colors.primary} type='normal'>
          useEffect
        </BS>
        :
      </Text>
      <BCodePane className='codePane-medium' source={hookExample} />
      <Text textAlign='left' textSize={24} margin='15px 0'>
        In the second argument you will recognize an array with{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        inside, that means that the effect will only be performed and cleaned if{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        does change and on component mount/unmount, also if you pass an empty array (
        <BS color={colors.primary} type='normal'>
          []
        </BS>
        ) as the second argument, the effect will be only perform on component mount and cleaned up on component unmount
      </Text>
    </BSlide>
  )
}
