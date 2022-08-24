import createContext from '../../miniRedux'

export const { Provider, useDispatch, useSelector } = createContext<{
  count: number,
  data: number[]
}>({ count: 1, data: [] })
