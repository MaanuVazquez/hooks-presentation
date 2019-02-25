import React from 'react'
import theme from './theme'
import {Deck} from 'spectacle'
import * as Introduction from './Slides/Introduction'
import * as UseState from './Slides/UseState'
import * as UseEffect from './Slides/UseEffect'
import 'normalize.css'
import './global.css'

const BRAND_SLIDE = {
  bgColor: 'primary'
}

const WHITE_SLIDE = {
  bgColor: 'tertiary',
  controlColor: 'primary',
  progressColor: 'primary'
}

export default function Presentation() {
  return (
    <Deck contentWidth={1500} theme={theme} progress='pacman' controls>
      <Introduction.First {...BRAND_SLIDE} />
      <Introduction.Second {...WHITE_SLIDE} />
      <Introduction.Third {...WHITE_SLIDE} />
      <Introduction.Fourth {...WHITE_SLIDE} />
      <Introduction.Fifth {...WHITE_SLIDE} />
      <Introduction.Sixth {...WHITE_SLIDE} />
      <Introduction.Seventh {...WHITE_SLIDE} />
      <Introduction.Eighth {...WHITE_SLIDE} />
      <Introduction.Nineth {...WHITE_SLIDE} />
      <UseState.First {...WHITE_SLIDE} />
      <UseState.Second {...WHITE_SLIDE} />
      <UseState.Third {...WHITE_SLIDE} />
      <UseState.Fourth {...WHITE_SLIDE} />
      <UseState.Fifth {...WHITE_SLIDE} />
      <UseEffect.First {...WHITE_SLIDE} />
      <UseEffect.Second {...WHITE_SLIDE} />
      <UseEffect.Third {...WHITE_SLIDE} />
      <UseEffect.Fourth {...WHITE_SLIDE} />
      <UseEffect.Fifth {...WHITE_SLIDE} />
      <UseEffect.Sixth {...WHITE_SLIDE} />
      <UseEffect.Seventh {...WHITE_SLIDE} />
      <UseEffect.Eighth {...WHITE_SLIDE} />
      <UseEffect.Nineth {...WHITE_SLIDE} />
      <UseEffect.Tenth {...WHITE_SLIDE} />
    </Deck>
  )
}
