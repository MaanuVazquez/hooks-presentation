import React from 'react'
import {Heading, Text} from 'spectacle'
import {BSlide, BList, BListItem} from '../../../BComponents'

export default function Fifth(props) {
  return (
    <BSlide {...props}>
      <Heading size={2} caps>
        Why Hooks?
      </Heading>
      <Text textAlign='left' margin='40px 0 0 0'>
        The motivation for hooks is that they solve a wide variety of seemingly unconnected problems in React that you
        might recognize.
      </Text>
      <BList>
        <strong>
          <BListItem>It is hard to reuse stateful logic between components</BListItem>
          <BListItem>Complex components become hard to understand</BListItem>
          <BListItem>Classes confuses both people and machines</BListItem>
        </strong>
      </BList>
    </BSlide>
  )
}
