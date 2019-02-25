import React from 'react'
import {Slide, Image} from 'spectacle'
import BonsLogo from './assets/BonsLogo.jpg'
import styled from 'styled-components'

const Logo = styled(Image)`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 2.5%;
  user-drag: none;
  user-select: none;
`

export default function BSlide({children, ...restProps}) {
  return (
    <Slide {...restProps}>
      <Logo src={BonsLogo} />
      {children}
    </Slide>
  )
}
