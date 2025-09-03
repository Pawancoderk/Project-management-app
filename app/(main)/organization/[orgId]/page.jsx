import React from 'react'

const Organization = ({params}) => {
    const {orgId} = params
  return (
    <div>
      <h1>Organization: {orgId}</h1>
    </div>
  )
}

export default Organization