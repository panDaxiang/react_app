import { useMemoizedFn } from 'ahooks';
import { useMemo } from 'react'

import { useImmer } from 'use-immer';

const useTree = (tree, gridRef) => {
  const [foldTreeNodes, updateFoldTreeNodes] = useImmer(new Set())

  const allRowData = useMemo(() => {
    const treeNodes = []
    function traverseTree(tree, level, path){
      tree?.forEach(node => {
        const { children, ...props } = node;
        const hasChildren = Array.isArray(children) && children.length > 0;
        const newPath = path ? `${path}/${node.value}` : `${node.value}`
        treeNodes.push({
          ...props,
          name: node.name,
          value: node.value,
          level,
          key: node.value,
          path: newPath,
          hasChildren
        })
        if(hasChildren){
          traverseTree(children, level + 1, newPath)
        }
      })
    }

    traverseTree(tree, 1, '')
    return treeNodes
  }, [tree])

  const updateFoldKeys = useMemoizedFn((key) => {
    updateFoldTreeNodes(d => {
      foldTreeNodes.has(key) ? d.delete(key) : d.add(key);

      const data = allRowData.filter(row => {
        let b = true
        d.forEach(key => {
          if(row.path.includes(key) && !row.path.endsWith(key)){
            b = false
          }
        })

        return b
      })

      gridRef.current?.api.setRowData(data)
    })
  })

  return {
    foldTreeNodes,
    allRowData,
    updateFoldKeys,
  }
}

export default useTree