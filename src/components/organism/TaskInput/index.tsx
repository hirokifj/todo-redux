/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, ChangeEvent } from 'react'
import { css, jsx } from '@emotion/react'

import Input from '../../atom/Input'
import Button from '../../atom/Button'

const TaskInput: FC<{
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}> = ({ value, onChange, onSubmit }) => {
  const inputStyle = css`
    flex-grow: 1;
    margin-bottom: 20px;
  `

  const buttonStyle = css`
    text-align: right;
  `

  return (
    <div>
      <div css={inputStyle}>
        <Input value={value} onChange={onChange} />
      </div>
      <div css={buttonStyle}>
        <Button onClick={onSubmit}>Add Task</Button>
      </div>
    </div>
  )
}

const TaskInputContainer: FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return TaskInput({ value, onChange: handleChange, onSubmit })
}

export default TaskInputContainer
