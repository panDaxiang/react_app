import { nodes } from './graph/node'
import { edges, edgeData } from './graph/edge'

// 第一步，根据nodes节点和edges的边来源确认节点位置
const map = {}
const position = []
nodes.forEach(node => {
  map[node.id] = {
    from: [],
    to: [],
    data: node
  }
})

edgeData.forEach(({ source, target }) => {
  if (source in map) {
    map[source].to.push(target)
  }
  if (target in map) {
    map[target].from.push(source)
  }
})

const getLevels = (id) => {
  if ('level' in map[id]) {
    ``
    return map[id].level
  }

  const tos = map[id]?.to;

  if (tos.length === 0) {
    map[id]['level'] = 0
    if (position[0]) {
      position[0].push(id)
    } else {
      position[0] = [id]
    }
    map[id].index = position[0].length - 1
    map[id].data.x = -map[id].index * 200
    map[id].data.y = 0
    return 0
  }
  let max = 0
  map[id]?.to.forEach(toId => {
    max = Math.max(max, getLevels(toId))
  })

  const level = max + 1

  map[id].level = level
  if (position[level]) {
    position[level].push(id)
  } else {
    position[level] = [id]
  }
  map[id].index = position[level].length - 1
  map[id].data.x = -map[id].index * 200
  map[id].data.y = -level * 200
  return max + 1
}

Object.keys(map).forEach(id => {
  getLevels(id)
})

console.log(map, position);

export const data = {
  nodes,
  edges: edges
}