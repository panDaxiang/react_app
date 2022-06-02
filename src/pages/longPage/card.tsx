import { FC, useRef, useEffect, useState } from 'react'

const Card: FC = () => {
  const scrollRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(item => {
        if(item.intersectionRatio > 0){
          setShow(true)
          obs.unobserve(scrollRef.current)
        }else{
          // setShow(false)
        }
      })
    }, {
      threshold: [0, 0.5, 1],
    })

    obs.observe(scrollRef.current)
  }, [])

  return <div ref={scrollRef} style={{ height: 100 }}>
    {
      show && <img src="https://source.unsplash.com/300x300/?book,library" alt="" />
    }
    
  </div>
}

export default Card