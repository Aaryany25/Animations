import React from 'react'

type TitleCardProps = {
  title: string
  year: string
  role: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

function TitleCard({ title, year, role, onMouseEnter, onMouseLeave, onFocus, onBlur }: TitleCardProps) {
  return (
    <div
      className="flex items-end gap-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
    >
      <div className="text-sm">{year}</div>
      <div className="text-4xl font-bold">{title}</div>
      <div className="text-sm">{role}</div>
    </div>
  )
}

export default TitleCard