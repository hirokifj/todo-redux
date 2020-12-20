/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/react'

const Divider: FC<{ styleProps?: SerializedStyles }> = ({ styleProps }) => {
  const style = css`
    width: 100%;
    background-color: #f6f6f6;
    ${styleProps}
  `

  return <hr css={style} />
}

export default Divider
