import React from 'react'
import {Text, Heading} from 'spectacle'
import {BSlide, BS, BCodePane} from '../../../BComponents'
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
      <BCodePane source={classReadExample} />
      <Text textAlign='left' textSize={30} margin='15px 0'>
        In a function, we can use{' '}
        <BS color={colors.primary} type='normal'>
          count
        </BS>{' '}
        directly:
      </Text>
      <BCodePane source={functionReadExample} />
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
      <BCodePane source={classUpdateExample} />
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
      <BCodePane source={functionUpdateExample} />
    </BSlide>
  )
}
