import React, { FC } from 'react'

const Spacer: FC<{ width: string }> = ({ width }) => {
  const style = {
    width,
  }

  return <div style={style} />
}

export default Spacer
