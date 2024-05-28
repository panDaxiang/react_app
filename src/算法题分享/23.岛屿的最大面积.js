const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]

function getMaxAreaOfIsland(grid) {
  if (!Array.isArray(grid)) return 0
  const x = grid[0].length;
  const m = grid.length
  const visit = Array.from({ length: m }, () => new Array(x).fill(false));

  function dfs(i, j) {
    /** 需要考虑边界条件 */
    if (i < 0 || i >= m || j < 0 || j >= x || grid[i][j] === 0 || visit[i][j]) {
      return 0
    }
    visit[i][j] = true
    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
  }

  let maxArea = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < x; j++) {
      if (!visit[i][j] && grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j))
      }
    }
  }

  return maxArea
}

console.log(getMaxAreaOfIsland(grid));
