import { Point } from '@antv/x6'

/** 计算两个坐标点中间坐标 */
export const calculateCenterPoint = (start: Point, end: Point) => {
  const x = (start.x + end.x) / 2;
  const y = (start.y + end.y) / 2;
  return { x, y }
}

/** 计算两个坐标点中间距离 */
export const calculateCenterDistance = (start: Point, end: Point) => {
  const x = end.x - start.x;
  const y = end.y - start.y;

  return Math.sqrt(x * x + y * y) / 2;
}

/** 计算label位置 */
export const calculateLabelDistance = (sourcePoint: Point, targetPoint: Point, vertices: any[], distance: number) => {
  // 暂时不做重新计算vertices处理,且只考虑只有一个label情况

  // 路径没有设置，则认为是起点和终点直接相连，这样直接百分比
  if (vertices.length === 0) {
    return distance
  } else {
    /** 根据distance判断依据起始点还是终点来计算距离 */
    if (distance < 0) {
      return -calculateCenterDistance(vertices[1], targetPoint)
    }else{
      // 此时是设置了百分比
    //   return distance
    // }else{
      return calculateCenterDistance(sourcePoint, vertices[0])
    }
  }
}
