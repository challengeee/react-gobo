import React from 'react'

import { RenderStone } from '../../hooks/useBoardState'

// from https://en.m.wikipedia.org/wiki/File:Go_b1.svg
export const WikiBlackStone: RenderStone = ({
  horizontalLineSpacing,
  verticalLineSpacing,
  stoneRadius,
  opacity = 1,
}) => {
  const id = 'wiki-black-stone-gradient'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={horizontalLineSpacing}
      height={verticalLineSpacing}
    >
      <defs>
        <radialGradient r=".8" cx=".3" cy=".3" id={id}>
          <stop stopColor="#777" offset="0" />
          <stop stopColor="#222" offset=".3" />
          <stop stopColor="#000" offset="1" />
        </radialGradient>
      </defs>
      <circle
        fill={`url(#${id})`}
        fillOpacity={opacity}
        r={stoneRadius}
        cx="50%"
        cy="50%"
      />
    </svg>
  )
}
