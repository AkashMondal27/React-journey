import React from 'react'
import { useParams } from 'react-router-dom'

const Paramcompo = () => {

    const {id}=useParams();  

  return (
    <div>
      <h3> 
        params : {id}
      </h3>
    </div>
  )
}

export default Paramcompo
