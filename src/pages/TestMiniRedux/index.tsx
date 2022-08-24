import { memo } from 'react'
import { Provider, useDispatch, useSelector } from './context'

const Test2 = memo(() => {
  const data = useSelector(state => state.data)
  console.log(data)
  return <div>test2</div>
})

const Test = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(d => {
      d.count += 1
    })
  }

  return <div>
    {count}
    <div onClick={handleClick}>触发事件</div>
    <Test2 />
  </div>
}

const Main = () => {
  return <Provider><Test /></Provider>
}

export default Main