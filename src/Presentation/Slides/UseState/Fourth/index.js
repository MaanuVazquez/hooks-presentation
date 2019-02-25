import React from 'react'
import {CodePane, Text, Heading} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import classReadExample from './examples/classRead.example'
import functionReadExample from './examples/functionRead.example'
import classUpdateExample from './examples/classUpdate.example'
import functionUpdateExample from './examples/functionUpdate.example'
import {colors} from '../../../theme'

export default function Fourth(props) {
  return (
    <BSlide {...props}>
      <Heading size={6}>Reading State</Heading>
      <Text textAlign='left' textSize={30} margin='15px 0'>
        When we want to display the current count in a class, we read{' '}
        <BS color={colors.primary} type='normal'>
          this.state.count
        </BS>
        :
      </Text>
      <CodePane className='codePane' lang='jsx' source={classReadExample} />
      <Text textAlign='left' textSize={30} margin='15px 0'>
        In a function, we can use{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        directly:
      </Text>
      <CodePane className='codePane' lang='jsx' source={functionReadExample} />
      <Heading size={6} margin='30px 0 0 0  '>
        Updating State
      </Heading>
      <Text textAlign='left' textSize={30} margin='15px 0'>
        In a class, we need to call{' '}
        <BS color={colors.primary} type='normal'>
          this.setState()
        </BS>{' '}
        to update the{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        state:
      </Text>
      <CodePane className='codePane' lang='jsx' source={classUpdateExample} />
      <Text textAlign='left' textSize={30} margin='15px 0'>
        In a function, we already have{' '}
        <BS color={colors.primary} type='normal'>
          setCount
        </BS>{' '}
        and{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        as variables so we don’t need{' '}
        <BS color={colors.primary} type='normal'>
          this
        </BS>
        :
      </Text>
      <CodePane className='codePane' lang='jsx' source={functionUpdateExample} />
    </BSlide>
  )
}
