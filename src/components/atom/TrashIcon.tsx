/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/react'
import { FaTrash } from 'react-icons/fa'

const TrashIcon: FC<{ onClick: () => void; styleProp?: SerializedStyles }> = ({
  onClick,
  styleProp,
}) => {
  const style = css`
    color: currentColor;
    ${styleProp}
  `

  return <FaTrash onClick={onClick} css={style} />
}

export default TrashIcon
