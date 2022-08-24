import { FC, useEffect, useState, useTransition, useDeferredValue } from 'react'
import { createRoot } from 'react-dom/client'
import TestMiniRedux from './pages/TestMiniRedux'

const Input =  ({ onChange, value }) => {
  useEffect(() => {
    console.log('input effect')
  })
  return <input type="text" onChange={onChange} value={value} />
}

const Test1: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [arr, setArr] = useState<string[]>(new Array(1000).fill('合肥大智慧'))
  const [isPending, startTransition] = useTransition()
  const [keyword, setKeyword] = useState('')

  // const query = useDeferredValue(inputValue)
  useEffect(() => {
    console.log('app effect')
  })

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

    startTransition(() => {
      setKeyword(e.target.value)
    })
  }


  const reg = new RegExp(keyword, 'gi')
  
  return <div>
    <Input onChange={handleInputChange} value={inputValue} />
    <button>渲染列表</button>

    <ul>
      {
        arr.map((item, index) => {
          return <li key={index} dangerouslySetInnerHTML={{ __html: item?.replace(reg, `<span style="color: red">$&</span>`) }}></li>
        })
      }
      <li></li>
    </ul>

  </div>
}

const App = () => {
  return <div>
    <TestMiniRedux />
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
