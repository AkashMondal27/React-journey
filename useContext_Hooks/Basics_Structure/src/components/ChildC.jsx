import { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
  // 5️⃣ Consume context
  const user = useContext(UserContext)

  return (
    <div>
      <h2>I am Child C Component using the parent’s data</h2>
      <p>Name: {user.name}</p>
      <p>Mobile: {user.mobile}</p>
      <p>Email: {user.email}</p>
    </div> 
  )
}

export default ChildC
