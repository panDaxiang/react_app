import { useRef, useState, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react';
import { useMemoizedFn } from 'ahooks'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import useTree from './hooks/useTree'
import { areas } from './data'

const defaultColDef = {
  resizable: true,
};

const TablePage = () => {
  const gridRef = useRef()

  const { foldTreeNodes, allRowData, updateFoldKeys } = useTree(areas, gridRef)

  const columnDefs: any[] = useMemo(() => [
    {
      field: 'name', cellRenderer: (params) => {
        const { level, hasChildren, key } = params.data;
        return <div style={{ paddingLeft: level * 10, cursor: hasChildren ? 'pointer' : 'default', display: 'flex', alignItems: 'center' }}>
          {params.value}
          {hasChildren ? <img style={{ width: 10, marginLeft: 4 }} src={require(foldTreeNodes.has(key) ? './images/arrow-down.svg' : './images/arrow-up.svg')} alt="" /> : null}
        </div>
      }
    },
    { field: 'value' },
    { field: 'level' },
  ], [foldTreeNodes]);

  const handleCellClick = useMemoizedFn((event) => {
    if(event.colDef.field === "name"){
      updateFoldKeys(event.data.key)
    }
  })

  const handleColumnResized = useMemoizedFn(() => { })

  return <div className="ag-theme-alpine" style={{ height: '100vh', width: '100%', padding: '10px 20px' }}>
    <AgGridReact
      ref={gridRef}
      rowData={allRowData}
      columnDefs={columnDefs}
      animateRows
      rowHeight={30}
      suppressScrollOnNewData={true}
      defaultColDef={defaultColDef}
      suppressNoRowsOverlay={true}
      onColumnResized={handleColumnResized}
      // onColumnMoved={onColumnMoved}
      // onGridReady={onGridReady}
      // onSortChanged={handleSortChange}
      onCellClicked={handleCellClick}
    // getRowId={getRowId}
    />
  </div>
}

export default TablePage