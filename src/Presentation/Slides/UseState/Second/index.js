import React from 'react'
import {Text, CodePane} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import classState from './examples/classState.example'
import functionState from './examples/functionState.example'
import {colors} from '../../../theme'

export default function Second(props) {
  return (
    <BSlide {...props}>
      <Text textSize={32} textAlign='left' margin='0 0 30px 0'>
        In a class, we initialize the{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        state to{' '}
        <BS color={colors.primary} type='normal'>
          0
        </BS>{' '}
        by setting{' '}
        <BS color={colors.primary} type='normal'>
          this.state
        </BS>{' '}
        to{' '}
        <BS color={colors.primary} type='normal'>
          {'{ count: 0 }'}
        </BS>{' '}
        in the constructor:
      </Text>
      <CodePane className='codePane' lang='jsx' source={classState} />
      <Text textSize={32} textAlign='left' margin='30px 0'>
        In a function component, we have no{' '}
        <BS color={colors.primary} type='normal'>
          this
        </BS>
        , so we can’t assign or read{' '}
        <BS color={colors.primary} type='normal'>
          this.state
        </BS>
        . Instead, we call the{' '}
        <BS color={colors.primary} type='normal'>
          useState
        </BS>{' '}
        Hook directly inside our component:
      </Text>
      <CodePane className='codePane' lang='jsx' source={functionState} />
    </BSlide>
  )
}
