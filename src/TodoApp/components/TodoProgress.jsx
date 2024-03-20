import React from 'react'
import { FinishedProgressIcon } from '../../core/Icons/FinishedProgressIcon'
import ProgressEmptyIcon from '../../core/Icons/ProgressEmptyIcon'
import { InProgressIcon } from '../../core/Icons/InProgressIcon'

export const TodoProgress = ({state}) => {
  return (
    <div className="progress column">
    {
      state === "To Do" ? (
        <ProgressEmptyIcon />
      ) : state === "In Progress" ? (
        <InProgressIcon />
      ) : (
        <FinishedProgressIcon />
      )
    }
  </div>
  )
}
