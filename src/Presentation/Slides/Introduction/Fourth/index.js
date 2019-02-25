import React from 'react'
import {Heading, Layout, Fill, CodePane} from 'spectacle'
import {BSlide} from '../../../BComponents'
import ClassExample from './examples/class.example'
import FunctionExample from './examples/function.example'

export default function Fourth(props) {
  return (
    <BSlide {...props}>
      <Heading textColor='primary' size={5} caps margin='0 0 30px 0'>
        Function and class equivalent
      </Heading>
      <Layout>
        <Fill>
          <CodePane className='codePane' lang='jsx' source={FunctionExample} />
        </Fill>
        <Fill>
          <CodePane margin='0 0 0 20px' className='codePane' lang='jsx' source={ClassExample} />
        </Fill>
      </Layout>
    </BSlide>
  )
}
