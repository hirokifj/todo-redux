/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/react'

const Divider: FC<{ styleProp?: SerializedStyles }> = ({ styleProp }) => {
  const style = css`
    width: 100%;
    background-color: #f6f6f6;
    ${styleProp}
  `

  return <hr css={style} />
}

export default Divider
