import { FC, useState, useRef, useEffect } from 'react'

const obj = {}

const LongPage: FC = () => {
  const [list] = useState(new Array(10000).fill(0));
  const scrollRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver((entrys) => {
      console.log(entrys)
    }, {

      threshold: [0, 0.5, 1],

    })

    obs.observe(scrollRef.current)

    return () => {
      obs.unobserve(scrollRef.current)
    }
  }, [])

  return <ul style={{ height: '800px', overflowY: 'auto' }} ref={scrollRef}>
    {
      list.map((item, index) => <li key={index} style={{ height: '100px' }}> 
        <img src="https://pic3.zhimg.com/v2-b62c22d7afa1f71af8bafd6aa787ba3a_1440w.jpg?source=172ae18b" alt="" />
      </li>)
    }
  </ul>
}

export default LongPage