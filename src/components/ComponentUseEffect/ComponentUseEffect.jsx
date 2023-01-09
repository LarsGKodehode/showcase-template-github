// Libraries
import {
  useState,
  useEffect
} from 'react'

function ComponentWithUseEffect() {
  const [count, setCount] = useState(0)

  useEffect(
    () => {
      console.log("this component got mounted")
    },
    []
  )

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default ComponentWithUseEffect