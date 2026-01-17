import React from 'react'
import Son from './son'
import Daughter from './daughter'

const Parent = () => {
  return (
    <div>
      <h1>I have 2 children</h1>

      <Son>
        <p>
          Although it is part of the Parent component,
          it is displayed inside the Son component
        </p>
      </Son>

      <Daughter>
        <p>
          Although it is part of the Parent component,
          it is displayed inside the Daughter component
        </p>
      </Daughter>
    </div>
  )
}

export default Parent
