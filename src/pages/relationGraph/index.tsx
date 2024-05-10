import { useEffect, useRef } from 'react';
import RelationGraph, { RGJsonData, RGNode, RGLine, RGLink, RGUserEvent, RelationGraphComponent } from 'relation-graph/react';
import styled from 'styled-components'
import { staticJsonData, fromsMap } from './data'
import { graphOptions } from './options'

const BothwayTree2 = () => {
  const graphRef = useRef<RelationGraphComponent | null>(null);

  const resetGraph = async () => {
    const graphInstance = graphRef.current?.getInstance();
    if (graphInstance) {
      await graphInstance.setOptions(graphOptions);
      await showGraph();
    }
  };

  const showGraph = async () => {
    const __graph_json_data: RGJsonData = staticJsonData;
    const graphInstance = graphRef.current?.getInstance();
    if (graphInstance) {
      await graphInstance.setJsonData(__graph_json_data);
      // 解决多个来源文字重叠问题
      const lines = graphInstance.getLinks()
        .filter(link => fromsMap[link.toNode.id]?.length > 1)
        .reduce((currentLines: RGLine[], link: RGLink) => currentLines.concat(...link.relations), []);
      for (const line of lines) {
        // @ts-ignore
        line.placeText = 'start';
      }
    }
  };

  const onNodeClick = (nodeObject: RGNode, $event: RGUserEvent) => {
    console.log('onNodeClick:', nodeObject);
  };

  const onLineClick = (lineObject: RGLine, linkObject: RGLink, $event: RGUserEvent) => {
    console.log('onLineClick:', lineObject);
  };

  useEffect(() => {
    resetGraph();
  }, []);

  return (

    <Styles>
      <RelationGraph ref={graphRef} options={graphOptions} onNodeClick={onNodeClick} onLineClick={onLineClick} />
    </Styles>
  );
};

export default BothwayTree2;

const Styles = styled.div`
  width: calc(100% - 12px);
  height: calc(100vh - 12px);
  .relation-graph .rel-map{
    background-size: contain;
  }
  .rel-node{
    border-style: solid;
  }
  .c-collapsed, .c-expanded{
    border: 1px solid #3691db;
    background-color: #3691db !important;
  }
 .relation-graph .rel-node-checked{
  box-shadow: 0 0 0 1px #3691db;
 }
 .relation-graph .c-rg-line{
  stroke: #ccc !important;
 }
 .relation-graph .rel-node-shape-1 .c-node-text{
  padding-left: 0;
  padding-right: 0;
 }
`