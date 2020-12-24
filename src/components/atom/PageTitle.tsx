/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/react'

const PageTitle: FC<{ styleProp?: SerializedStyles }> = ({
  children,
  styleProp,
}) => {
  const style = css`
    font-size: 32px;
    line-height: 1;
    color: #363e62;
    ${styleProp}
  `

  return <h1 css={style}>{children}</h1>
}

export default PageTitle
