import React from 'react'
import {Heading, Layout, Fill} from 'spectacle'
import {BSlide, BCodePane} from '../../../BComponents'
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
          <BCodePane source={FunctionExample} />
        </Fill>
        <Fill>
          <BCodePane margin='0 0 0 20px' source={ClassExample} />
        </Fill>
      </Layout>
    </BSlide>
  )
}
