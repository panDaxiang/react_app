import { FC, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import store from './store'


const App: FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState())
    })
  }, [])

  useEffect(() => {
    store.dispatch({
      type: 'count_change',
      data: count
    })
  }, [count])

  
  return <div>
    <button onClick={() => setCount(count + 1)}>+ 1</button>{count}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)