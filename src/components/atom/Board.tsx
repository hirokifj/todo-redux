/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/react'

const Board: FC<{ styleProp: SerializedStyles }> = ({
  children,
  styleProp,
}) => {
  const style = css`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    ${styleProp}
  `

  return <div css={style}>{children}</div>
}

export default Board
