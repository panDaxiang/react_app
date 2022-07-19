import { memo, FC, CSSProperties } from 'react'
import { isEqual } from 'lodash'

const f1 = () => {}
const f2 = () => {}

console.log(isEqual(() => {}, () => {}))
console.log(isEqual(f1, f2))
console.log(isEqual(document.body, document.body))
console.log(isEqual(document.body, document))


interface Props{
  style?: CSSProperties,
  getContainer: () => HTMLElement
}

const Test: FC<Props> = ({ style, getContainer }) => {
    console.log(style, getContainer)
    return <span style={style}>test component</span> 

}

export default memo(Test, (prevProps, nextProps) => {
  if(isEqual(prevProps.getContainer(), nextProps.getContainer())) return true
  return false
})