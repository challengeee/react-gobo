import { useState } from 'react'
import React from 'react'

import { BoardDimensions } from './useBoardDimensions'

// export type RenderStone<T=undefined> = (BoardDimensions: BoardDimensions, optionalProps:T) => React.ReactNode
export type RenderStone = (
  props: BoardDimensions & Record<string, unknown>,
) => React.ReactNode
export type BoardState = (RenderStone | undefined)[][]

export const useBoardState = (boardSize: number) => {
  const [boardState, setBoardState] = useState<BoardState>(
    Array(boardSize).fill(Array(boardSize).fill(undefined)),
  )

  const addStone = (col: number, row: number, renderStone: RenderStone) => {
    setBoardState(
      boardState.map((stones, colIndex) =>
        stones.map((prevStone, rowIndex) =>
          colIndex === col && rowIndex === row ? renderStone : prevStone,
        ),
      ),
    )
  }

  const removeStone = (col: number, row: number) => {
    setBoardState(
      boardState.map((stones, colIndex) =>
        stones.map((prevStone, rowIndex) =>
          colIndex === col && rowIndex === row ? undefined : prevStone,
        ),
      ),
    )
  }

  return { boardState, setBoardState, addStone, removeStone }
}
