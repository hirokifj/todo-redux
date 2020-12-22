/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, ChangeEvent } from 'react'
import { css, jsx } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { todoSlice } from '../../../ducks/todo'

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
        <Input value={value} onChange={onChange} placeholder="Task Title" />
      </div>
      <div css={buttonStyle}>
        <Button onClick={onSubmit}>Add Task</Button>
      </div>
    </div>
  )
}

const TaskInputContainer: FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const clearInput = () => {
    setValue('')
  }

  const dispatch = useDispatch()
  const { taskAdded } = todoSlice.actions

  const handleSubmit = () => {
    dispatch(taskAdded({ title: value }))
    clearInput()
  }

  return TaskInput({ value, onChange: handleChange, onSubmit: handleSubmit })
}

export default TaskInputContainer
