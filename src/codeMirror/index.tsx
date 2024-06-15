// myCodemirror.tsx
import React, { useRef, useEffect } from 'react';
import { basicSetup, minimalSetup } from 'codemirror';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { autocompletion } from '@codemirror/autocomplete';

import { myCompletions } from './myCompletion'
import { placeholders } from './placeholder'


const CodeMirror: React.FC = () => {
  const editorRef = useRef(null);
  const viewRef = useRef<any>();

  const onUpdateExt = EditorView.updateListener.of((v: ViewUpdate) => {
    if (v.docChanged) {
      // console.log(v.state)
      viewRef.current.dispatch({
        state: v.state,
      });
    }
  });

  useEffect(() => {
    // 初始化CodeMirror编辑器
    const state = EditorState.create({
      doc: 'Dear [[name]],\nYour [[item]] is on its way. Please see [[order]] for details.\n',
      extensions: [
        minimalSetup,
        autocompletion({ 
          override: [myCompletions],
          activateOnCompletion(completion){
            
            
            return true
          },
        }),
        onUpdateExt,
        EditorView.updateListener.of((v) => {
          //监测得到的最新代码 
          // console.log(v.state.doc.toString())
        }),
        placeholders,
      ],

    });

    viewRef.current = new EditorView({
      state,
      parent: editorRef.current,
    })

    return () => {
      // 注意：此后此处要随组件销毁
      viewRef.current.destroy(); 
    };
  }, []);

  return <div ref={editorRef}></div>;
};

export default CodeMirror;

