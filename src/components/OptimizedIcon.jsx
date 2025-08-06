"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo } from 'react'

const OptimizedIcon = memo(({ icon, className, ...props }) => {
  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={`${className || ''} will-change-transform`}
      {...props}
    />
  )
})

OptimizedIcon.displayName = 'OptimizedIcon'

export default OptimizedIcon