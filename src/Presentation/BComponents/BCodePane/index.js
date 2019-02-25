import React from 'react'
import {CodePane} from 'spectacle'

export default function BCodePane(props) {
  return <CodePane lang='jsx' theme='external' className='codePane' {...props} />
}
