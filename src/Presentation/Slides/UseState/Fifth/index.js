import React from 'react'
import {Heading, Text, CodePane} from 'spectacle'
import {BSlide, BS} from '../../../BComponents'
import objectStateExample from './examples/objectState.example'
import objectMergeExample from './examples/objectMerge.example'
import {colors} from '../../../theme'

export default function Fifth(props) {
  return (
    <BSlide {...props}>
      <Heading size={5}>Note on useState</Heading>
      <Text textAlign='left' textSize='30' margin='15px 0'>
        If you’re coming from classes, you might be tempted to always call{' '}
        <BS color={colors.primary} type='normal'>
          useState()
        </BS>{' '}
        once and put all state into a single object. You can do it if you’d like. Here is an example of a component that
        follows the mouse movement. We keep its position and size in the local state:
      </Text>
      <CodePane lang='jsx' className='codePane' source={objectStateExample} />
      <Text textAlign='left' textSize='30' margin='15px 0'>
        Now let’s say we want to write some logic that changes{' '}
        <BS color={colors.primary} type='normal'>
          left
        </BS>{' '}
        and{' '}
        <BS color={colors.primary} type='normal'>
          top
        </BS>{' '}
        when the user moves their mouse. Note how we have to merge these fields into the previous state object manually:
      </Text>
      <CodePane lang='jsx' className='codePane' source={objectMergeExample} />
      <Text textAlign='left' textSize='24' margin='15px 0 0 0'>
        This is because when we update a state variable, we replace its value. This is different from{' '}
        <BS color={colors.primary} type='normal'>
          this.setState
        </BS>{' '}
        in a class, which merges the updated fields into the object.
      </Text>
    </BSlide>
  )
}
