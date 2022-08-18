import { FC, useEffect, useState, useTransition, useDeferredValue } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'


const App: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [arr, setArr] = useState<string[]>(new Array(1000).fill('合肥大智慧'))
  const [isPending, startTransition] = useTransition()
  const [keyword, setKeyword] = useState('')

  // const query = useDeferredValue(inputValue)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

    startTransition(() => {
      setKeyword(e.target.value)
    })
  }


  const reg = new RegExp(keyword, 'gi')
  
  return <div>
    <input type="text" onChange={handleInputChange} value={inputValue} />
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

const root = 
createRoot(document.getElementById('root'))

root.render(<App />)
