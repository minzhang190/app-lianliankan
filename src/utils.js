function frameMatrix(
  matrix,
  fill = 0 /*填充0*/,
  thickness = 1 /*默认边框宽度为0*/
) {
  const { cols, rows } = getMatrixDimension(matrix)
  const fillLength = length => [...Array(length)].map(() => fill) // 填充一定长度的值
  const top = fillLength(cols + 2 * thickness)
  const bottom = fillLength(cols + 2 * thickness)
  const middle = matrix.map(row => [
    ...fillLength(thickness),
    ...row,
    ...fillLength(thickness)
  ])
  return [top, ...middle, bottom]
}

export function genMatrix(cols, rows, n) {
  if ((cols * rows) % 2 !== 0) throw Error('cols*rows结果必须为偶数')
  const throttle = 0.5 // 有50%几率填充0
  let a = [...Array(cols * rows / 2)].map(() =>
    Math.ceil(Math.random() > throttle ? 0 : Math.random() * n)
  )
  a = [...a, ...a].sort(() => Math.random() - 0.5)
  return frameMatrix(
    [...Array(rows)].map((value, y) => a.slice(y * cols, (y + 1) * cols))
  )
}

function matrixForPrint(matrix) {
  return matrix.map(row => row.join(' ')).join('\n')
}

function getMatrixValue(x, y, matrix) {
  return matrix[y][x]
}

function setMatrixValue(value, x, y, matrix) {
  matrix[y][x] = value
}

// exercise 2

function getMatrixDimension(matrix) {
  return {
    rows: matrix.length,
    cols: matrix[0].length
  }
}

function comparePoints(p1, p2) {
  const ydiff = p1[1] - p2[1]
  const xdiff = p1[0] - p2[0]
  if (ydiff !== 0) {
    return ydiff
  } else {
    return xdiff
  }
}

function sortPoints(p1, p2) {
  if (comparePoints(p1, p2) < 0) {
    return [p1, p2]
  } else {
    return [p2, p1]
  }
}

function isPointsEqual(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1]
}

// 注意这里判断是p1,p2之间是否可以画的下一条线，而不需要判断p1/p2点所在位置值是否相同
function isVerticalLink(p1, p2, matrix) {
  ;[p1, p2] = sortPoints(p1, p2) // 强制排序p1,p2两个点，这样循环的步长保证是1，不用考虑正负号
  if (p1[0] !== p2[0] || p1[1] === p2[1]) return false
  for (let y = p1[1] + 1; y < p2[1]; y++) {
    // 用点和点之间的坐标差值循环，如果在循环中发现非0值，则说明不能连线
    if (getMatrixValue(p1[0], y, matrix) !== 0) return false
  }
  return [p1, p2]
}

function isHorizontalLink(p1, p2, matrix) {
  ;[p1, p2] = sortPoints(p1, p2)
  if (p1[1] !== p2[1] || p1[0] === p2[0]) return false
  for (let x = p1[0] + 1; x < p2[0]; x++) {
    if (getMatrixValue(x, p1[1], matrix) !== 0) return false
  }
  return [p1, p2]
}

// 可以用一条直线连接？（没有转弯）
function isOneLineLink(p1, p2, matrix) {
  return isVerticalLink(p1, p2, matrix) || isHorizontalLink(p1, p2, matrix)
}

function joinLink(...links) {
  return links.reduce((ret, link) => {
    return [...ret, ...link.slice(1)]
  })
}

function isHVLink(p1, p2, matrix) {
  const { cols, rows } = getMatrixDimension(matrix)
  ;[p1, p2] = sortPoints(p1, p2)
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const p3 = [x, y] // 遍历整个矩阵，用p3去尝试是否能够满足条件
      // 在尝试条件前，先检查p3上面的值，如果是非0值（p1, p2的交叉点上的值必须为0才可能画线)
      //  则本次循环失败，再尝试下一个点
      const v3 = getMatrixValue(p3[0], p3[1], matrix)
      if (v3 !== 0) continue

      // 如果p3坐标和p1或p2相同时也略过
      if (isPointsEqual(p1, p3) || isPointsEqual(p2, p3)) {
        continue
      }

      // 如果p1和p3之间能画一条横线线，并且p2和p3之间能画一条竖线，则代表找到了
      const link1 = isHorizontalLink(p1, p3, matrix)
      const link2 = isVerticalLink(p3, p2, matrix)
      if (link1 && link2) {
        return joinLink(link1, link2)
      }
    }
  }
  return false
}

function isVHLink(p1, p2, matrix) {
  const { cols, rows } = getMatrixDimension(matrix)
  ;[p1, p2] = sortPoints(p1, p2)
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const p3 = [x, y]
      const v3 = getMatrixValue(p3[0], p3[1], matrix)
      if (v3 !== 0) continue
      if (isPointsEqual(p1, p3) || isPointsEqual(p2, p3)) {
        continue
      }
      const link1 = isVerticalLink(p1, p3, matrix)
      const link2 = isHorizontalLink(p3, p2, matrix)
      if (link1 && link2) {
        return joinLink(link1, link2)
      }
    }
  }
  return false
}

// 可以用两条直线连接？(一次转弯)
function isTwoLineLink(p1, p2, matrix) {
  ;[p1, p2] = sortPoints(p1, p2)
  return isHVLink(p1, p2, matrix) || isVHLink(p1, p2, matrix)
}

// 可以用3条直线连接？（二次转弯）
function isThreeLineLink(p1, p2, matrix) {
  const { cols, rows } = getMatrixDimension(matrix)
  ;[p1, p2] = sortPoints(p1, p2)

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      // 这里逻辑和twoLineLink类似，不赘述
      const p3 = [x, y]
      const v3 = getMatrixValue(p3[0], p3[1], matrix)
      if (v3 !== 0) continue
      if (isPointsEqual(p1, p3) || isPointsEqual(p2, p3)) {
        continue
      }

      const link1 = isVerticalLink(p1, p3, matrix)
      const link2 = isHVLink(p3, p2, matrix)
      /*符合竖横竖？*/
      if (link1 && link2) {
        return joinLink(link1, link2)
      }

      const link3 = isHorizontalLink(p1, p3, matrix)
      const link4 = isVHLink(p3, p2, matrix)
      /*符合横竖横？*/
      if (link3 && link4) {
        return joinLink(link3, link4)
      }
    }
  }
  return false
}

export function getAllLink(matrix) {
  const { rows, cols } = getMatrixDimension(matrix)
  const ret = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const p1 = [x, y]
      const v1 = getMatrixValue(p1[0], p1[1], matrix)
      if (v1 === 0) continue
      for (let yy = y; yy < rows; yy++) {
        for (let xx = x; xx < cols; xx++) {
          const p2 = [xx, yy]
          const v2 = getMatrixValue(p2[0], p2[1], matrix)
          if (v1 !== v2) continue
          if (
            isOneLineLink(p1, p2, matrix) ||
            isTwoLineLink(p1, p2, matrix) ||
            isThreeLineLink(p1, p2, matrix)
          ) {
            ret.push([p1, p2])
          }
        }
      }
    }
  }
  return ret
}

export function isLinkable(p1, p2, matrix) {}

export function calculateOrigin(
  width,
  height,
  columns,
  rows,
  cellSize,
  cellMargin
) {
  const w = columns * cellSize + (columns - 1) * cellMargin
  const h = rows * cellSize + (rows - 1) * cellMargin
  return [(width - w) / 2, (height - h) / 2]
}
